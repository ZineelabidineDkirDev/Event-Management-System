using CMS.API.Authorization;

using CMS.API.Contracts;

using CMS.API.Helpers;

using CMS.API.Mapper;

using CMS.API.Repositories;

using CMS.API.Services;

using Microsoft.OpenApi.Models;

using System.Text.Json.Serialization;

using Serilog;

using Microsoft.EntityFrameworkCore;
 
Log.Logger = new LoggerConfiguration()

    .MinimumLevel.Information()

    .WriteTo.File("logs/Log.txt", rollingInterval: RollingInterval.Day)

    .CreateLogger();

try

{

    var builder = WebApplication.CreateBuilder(args);

    builder.Host.UseSerilog();

    builder.Logging.ClearProviders();
<<<<<<< HEAD

    builder.Logging.AddConsole();

=======
    builder.Logging.AddConsole();
>>>>>>> f06723b9bbb649d88a5d3389b0fbe056173a791d
    builder.Logging.AddDebug();

    var services = builder.Services;

    var env = builder.Environment;

    services.AddDbContext<DataContext>();

    services.AddCors();

    services.AddControllers().AddJsonOptions(x =>

    {

        x.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());

    });

    services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

    services.AddSwaggerGen(c =>

    {

        c.SwaggerDoc("v1", new OpenApiInfo { Title = "MMC APIs", Version = "v1" });

<<<<<<< HEAD
=======
        c.OperationFilter<FileUploadParams>();
>>>>>>> f06723b9bbb649d88a5d3389b0fbe056173a791d
    });

    services.Configure<AppSettings>(builder.Configuration.GetSection("AppSettings"));

    services.AddDbContext<DataContext>(

        options => options.UseSqlServer(builder.Configuration.GetConnectionString("CMSDB")));

    services.AddAutoMapper(typeof(MappingProfile));

    services.AddScoped<IJwtUtils, JwtUtils>();

    services.AddScoped<IAccountService, AccountService>();

    services.AddScoped<IEmailService, EmailService>();

    services.AddScoped<IApplicationSettingsRepository, ApplicationSettingsRepository>();

    services.AddScoped<ICategoryRepository, CategoryRepository>();

    services.AddScoped<IEventRepository, EventRepository>();

    services.AddScoped<IPartnerRepository, PartnerRepository>();

    services.AddScoped<ISpeakerRepository, SpeakerRepository>();

    services.AddScoped<ISponsorRepository, SponsorRepository>();

    services.AddScoped<IPayementRepository, PayementRepository>();

    services.AddScoped<IPlannerRepository, PlannerRepository>();

    services.AddScoped<IPlannerSpeakerRepository, PlannerSpeakerRepository>();

    var app = builder.Build();

    app.UseStaticFiles();

    app.UseSwagger();

    app.UseSwaggerUI(c =>

    {

        c.SwaggerEndpoint("/swagger/v1/swagger.json", "MMC APIs");

    });

    app.UseCors(x => x

        .SetIsOriginAllowed(origin => true)

        .AllowAnyMethod()

        .AllowAnyHeader()

        .AllowCredentials());

    app.UseMiddleware<ErrorHandlerMiddleware>();

    app.UseMiddleware<JwtMiddleware>();

    app.UseAuthentication();

    app.UseRouting();

    /*    app.UseAuthorization();
    */

    app.UsePathBase("/server");
    app.MapControllers();


    app.MapFallback(HandleFallbackRequest);


    // Handle all other requests

    await app.RunAsync();

    async Task HandleFallbackRequest(HttpContext context)

    {

        var filePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "index.html");

        await context.Response.SendFileAsync(filePath);

    }

    app.Run();

}
<<<<<<< HEAD

catch (Exception ex)

=======
catch (Exception ex)
>>>>>>> f06723b9bbb649d88a5d3389b0fbe056173a791d
{

    Log.Fatal(ex, "Application terminated unexpectedly");
<<<<<<< HEAD

}
=======
}


>>>>>>> f06723b9bbb649d88a5d3389b0fbe056173a791d
