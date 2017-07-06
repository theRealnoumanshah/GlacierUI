using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AWS.API.Interfaces;
using AWS.API.Models;
using System.Security.Cryptography;
using System.Text;
using System.Net.Http;

namespace AWS.API.Services
{
    public class GlacierService : AWSService<GlacierVaultResult>, IGlacierService
    {

        public GlacierService(AWSRequestParameters awsParams) : base(awsParams)
        {         
        }

        public GlacierVaultResult GetVaults()
        {
            return base.GetAsync().Result;

        }   
    }
}
