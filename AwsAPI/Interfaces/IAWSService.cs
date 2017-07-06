using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AWS.API.Models;

namespace AWS.API.Interfaces
{
    public interface IAWSService<T>
    {
        Task<T> GetAsync();

    }
}
