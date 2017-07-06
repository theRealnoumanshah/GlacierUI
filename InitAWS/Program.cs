using System;
using System.Net.Http;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace InitAWS
{
    class Program
    {

        private static string _accessKey = "AKIAJGTCNGBYORCFUEYA";
        private static string _secretKey = "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";
        private static string _region = "us-east-1";
        private static string _service = "glacier";

        private static string _HTTPMethod = "GET";
        private static string _canonicalURI = "/-/vaults";
        private static string _canonicalQueryString = "";
        private static string _canonicalHeaders = "glacier.us-east-1.amazonaws.com";
        private static string _signedHeaders = "";
        private static string _hashedPayload = "";

        // get the various date formats needed to form our request
        private static string _dateTimeStamp, _dateOnlyStamp;

        static void Main(string[] args)
        {
           Task<string> returnAWS =  InitializeAWS();

            string s = returnAWS.Result;

            Console.ReadLine();
        }

        static async Task<string> InitializeAWS()
        {

            _dateTimeStamp = getAWSDate(DateTime.UtcNow.ToString("yyyy-MM-ddTHH:mm:ss"));
            _dateOnlyStamp = _dateTimeStamp.Split('T')[0];

            // Empty payload because it is a GET request
            string payload = "", 
                hashedPayload = "",
                canonicalReqHash = "";

            // SHA256 hash value for our payload
            using (var algorithm = SHA256.Create())
            {
                // Create the at_hash using the access token returned by CreateAccessTokenAsync.
                hashedPayload = toHexString(algorithm.ComputeHash(Encoding.UTF8.GetBytes(payload)));

            }

            // Create canonical request
            var canonicalReq = "GET\n" +
                                "/-/vaults\n" +
                                "\n" +
                                "host:glacier.us-east-1.amazonaws.com\n" +
                                "x-amz-content-sha256:" + hashedPayload.ToLower() + "\n" +
                                "x-amz-date:" + _dateTimeStamp + "\n" +
                                "\n" +
                                "host;x-amz-content-sha256;x-amz-date\n" +
                                hashedPayload.ToLower();

            using (var algorithm = SHA256.Create())
            {
                // hash the canonical request
                canonicalReqHash = toHexString(algorithm.ComputeHash(Encoding.UTF8.GetBytes(canonicalReq)));

            }

            // Generate string to sign
            string stringToSign = "AWS4-HMAC-SHA256\n" +
                                    _dateTimeStamp + "\n" +
                                    _dateOnlyStamp + "/" + _region + "/" + _service + "/aws4_request\n" + 
                                    canonicalReqHash.ToLower();

            // Generate signing key
            byte[] signingKey = getSignatureKey(_secretKey, _dateOnlyStamp, _region, _service);

            // get authorization signature
            string authorizationSignature = getAuthorizationSignature(stringToSign, signingKey);

            // Form our authorization header
            var authorizationString = "Credential=" +
                              _accessKey + "/" +
                              _dateOnlyStamp + "/" +
                              _region + "/" +
                              _service + "/aws4_request," +
                              " SignedHeaders=host;x-amz-content-sha256;x-amz-date," +
                              " Signature=" + authorizationSignature.ToLower();

            var client = new HttpClient
            {
                BaseAddress = new Uri("http://glacier.us-east-1.amazonaws.com")
            };

            var authenticationHeaderValue = new System.Net.Http.Headers.AuthenticationHeaderValue("AWS4-HMAC-SHA256", authorizationString);

            client.DefaultRequestHeaders.Authorization = authenticationHeaderValue;
            client.DefaultRequestHeaders.Add("x-amz-date", _dateTimeStamp);
            client.DefaultRequestHeaders.Add("x-amz-content-sha256", hashedPayload.ToLower());
            client.DefaultRequestHeaders.Add("x-amz-glacier-version", "2012-06-01");
            HttpResponseMessage response = await client.GetAsync(_canonicalURI);

            return await response.Content.ReadAsStringAsync();

        }

        static byte[] HmacSHA256(String data, byte[] key)
        {
            HMACSHA256 hmac = new HMACSHA256(key);
            return hmac.ComputeHash(Encoding.UTF8.GetBytes(data));
        }

        static byte[] getSignatureKey(String key, String dateStamp, String regionName, String serviceName)
        {
            byte[] kSecret = Encoding.UTF8.GetBytes(("AWS4" + key).ToCharArray());
            byte[] kDate = HmacSHA256(dateStamp, kSecret);
            byte[] kRegion = HmacSHA256(regionName, kDate);
            byte[] kService = HmacSHA256(serviceName, kRegion);
            byte[] kSigning = HmacSHA256("aws4_request", kService);

            return kSigning;
        }

        private static string getAuthorizationSignature(string stringToHash, byte[] signingKey)
        {
            string kAuthSig;

            using (HMACSHA256 hmac = new HMACSHA256(signingKey))
            {

                kAuthSig = toHexString(hmac.ComputeHash(Encoding.UTF8.GetBytes(stringToHash)));

            }

            return kAuthSig;
        }

        // this function converts the generic JS ISO8601 date format to the specific format the AWS API wants
        private static string getAWSDate(string dateStr)
        {
            dateStr = dateStr.Replace(":", "");
            dateStr = dateStr.Replace("-", "");

            dateStr = dateStr.Split('.')[0] + "Z";

            return dateStr;
        }

        private static string toHexString(byte[] SHA256Result) {
            
            StringBuilder stringBuilder = new StringBuilder();

            foreach (byte b in SHA256Result)
                stringBuilder.AppendFormat("{0:X2}", b);

            return stringBuilder.ToString();

        }

    }
}