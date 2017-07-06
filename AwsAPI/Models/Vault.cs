using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AWS.API.Models
{
    public class Vault
    {
        public DateTime? CreationDate { get; set; }
        public DateTime? LastInventoryDate { get; set; }
        public int? NumberOfArchives { get; set; }
        public int? SizeInBytes { get; set; }
        public string VaultARN { get; set; }
        public string VaultName { get; set; }
    }
}
