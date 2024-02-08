using CMS.API.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CMS.API.Controllers;

[Controller]
public abstract class BaseController : ControllerBase
{
    public Account Account => (Account)HttpContext.Items["Account"];
}
