using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AWS.API.Models
{
    public class Vault
    {
        string CreationDate { get; set; }
        string LastInventoryDate { get; set; }
        string NumberOfArchives { get; set; }
        string SizeInBytes { get; set; }
        string VaultARN { get; set; }
        string VaultName { get; set; }
    }
}
