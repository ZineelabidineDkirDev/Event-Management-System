using CMS.API.Entities;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace CMS.API.Authorization
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
    public class AuthorizeAttribute : Attribute, IAuthorizationFilter
    {
        private readonly IList<Role> _roles;

        public AuthorizeAttribute(params Role[] roles)
        {
            _roles = roles;
        }

        public void OnAuthorization(AuthorizationFilterContext context)
        {
            var allowAnonymous = context.ActionDescriptor.EndpointMetadata.OfType<AllowAnonymousAttribute>().Any();
            if (allowAnonymous)
                return;

            var account = (Account)context.HttpContext.Items["Account"];

            if (account == null)
            {
                context.Result = new JsonResult(new { message = "Unauthorized: User not authenticated" })
                {
                    StatusCode = StatusCodes.Status401Unauthorized
                };
                return;
            }

            if (_roles.Any() && !_roles.Contains(account.Role))
            {
                context.Result = new JsonResult(new { message = "Unauthorized: Insufficient role permissions" })
                {
                    StatusCode = StatusCodes.Status403Forbidden
                };
                return;
            }
        }
    }
}
