using CMS.API.Authorization;
using CMS.API.Helpers;
using Microsoft.Extensions.Options;

public class JwtMiddleware
{
    private readonly RequestDelegate _next;
    private readonly AppSettings _appSettings;

    public JwtMiddleware(RequestDelegate next, IOptions<AppSettings> appSettings)
    {
        _next = next;
        _appSettings = appSettings.Value;
    }

    public async Task Invoke(HttpContext context, DataContext dataContext, IJwtUtils jwtUtils)
    {
        var token = context.Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();
        var accountId = jwtUtils.ValidateJwtToken(token);

        if (accountId != null)
        {
            var account = await dataContext.Accounts.FindAsync(accountId.Value);

            if (account != null)
            {
                context.Items["Account"] = account;
            }
            else
            {
                Console.WriteLine($"Account with ID {accountId} not found.");
            }
        }

        await _next(context);
    }
}
