using CMS.API.Entities;
using CMS.API.Models.Accounts;
using Microsoft.AspNetCore.Mvc;

namespace CMS.API.Controllers
{
    [Controller]
    public abstract class BaseController : ControllerBase
    {
        public Account Account
        {
            get
            {
                if (HttpContext.Items["Account"] is Account account)
                {
                    return account;
                }

                if (HttpContext.Items["Account"] is AccountResponse accountResponse)
                {
                    return new Account
                    {
                        Id = accountResponse.Id,
                    };
                }

                return null;
            }
        }
    }
}
