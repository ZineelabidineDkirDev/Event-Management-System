using CMS.API.Authorization;
using CMS.API.Contracts;
using CMS.API.Helpers;
using CMS.API.Mapper;
using CMS.API.Repositories;
using CMS.API.Services;
using Microsoft.OpenApi.Models;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to DI container
var services = builder.Services;
var env = builder.Environment;

services.AddDbContext<DataContext>();
services.AddCors();
services.AddControllers().AddJsonOptions(x =>
{
    x.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
});
services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

// Add Swagger services
services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "MMC APIs", Version = "v1" });
});

// Configure strongly typed settings object
services.Configure<AppSettings>(builder.Configuration.GetSection("AppSettings"));
services.AddAutoMapper(typeof(MappingProfile));

// Configure DI for application services
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

// Use custom error handling middleware
app.UseMiddleware<ErrorHandlerMiddleware>();



// Use JwtMiddleware before authorization
app.UseMiddleware<JwtMiddleware>();

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();