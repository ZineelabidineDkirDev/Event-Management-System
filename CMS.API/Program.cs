using CMS.API.Authorization;
using CMS.API.Contracts;
using CMS.API.Helpers;
using CMS.API.Mapper;
using CMS.API.Repositories;
using CMS.API.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to DI container
var services = builder.Services;
var env = builder.Environment;

services.AddDbContext<DataContext>();
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
services.AddDbContext<DataContext>(
        options => options.UseSqlServer(builder.Configuration.GetConnectionString("CMSDBV2")));
services.AddAutoMapper(typeof(MappingProfile));
services.AddAutoMapper(typeof(MappingProfile));

// Configure DI for application services
services.AddScoped<IJwtUtils, JwtUtils>();
services.AddScoped<IAccountService, AccountService>();
services.AddScoped<IEmailService, EmailService>();
services.AddScoped<IApplicationSettingsRepository, ApplicationSettingsRepository>();
services.AddScoped<ICategoryRepository, CategoryRepository>();
services.AddScoped<IEventRepository, EventRepository>();
services.AddScoped<IEventCategoryRepository, EventCategoryRepository>();
services.AddScoped<IEventAttendanceRepository, EventAttendanceRepository>();
services.AddScoped<IPartnerRepository, PartnerRepository>();
services.AddScoped<ISpeakerRepository, SpeakerRepository>();
services.AddScoped<ISponsorRepository, SponsorRepository>();
services.AddScoped<IPayementRepository, PayementRepository>(); 
services.AddScoped<IPlannerRepository, PlannerRepository>();
services.AddScoped<IPlannerSpeakerRepository, PlannerSpeakerRepository>();
services.AddCors(options => {
    options.AddPolicy("AllowAllOrigins", builder => {
        builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    });
});
var app = builder.Build();

app.UseStaticFiles();


app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "MMC APIs");
});

app.UseCors("AllowAllOrigins");

// Use custom error handling middleware
app.UseMiddleware<ErrorHandlerMiddleware>();



// Use JwtMiddleware before authorization
app.UseMiddleware<JwtMiddleware>();

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();