using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AWS.API.Models
{
    public class GlacierVaultResult
    {
        public string Marker { get; set; }
        public List<Vault> VaultList { get; set; }
    }
}
