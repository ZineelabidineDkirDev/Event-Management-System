namespace CMS.API.Helpers;

using AutoMapper.Execution;
using CMS.API.Entities;
using Microsoft.EntityFrameworkCore;
using Org.BouncyCastle.Pqc.Crypto.Lms;
using System;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;
using static System.Runtime.InteropServices.JavaScript.JSType;

public class DataContext : DbContext
{
    public DbSet<Account> Accounts { get; set; }
    public DbSet<ApplicationSettings> ApplicationSettings { get; set; }
    public DbSet<Category> Categories { get; set; }
    public DbSet<Event> Events { get; set; }
    public DbSet<EventAttendance> EventAttendances { get; set; }
    public DbSet<EventCategory> EventCategories { get; set; }
    public DbSet<Partner> Partners { get; set; }
    public DbSet<PartnerEvent> PartnerEvents { get; set; }
    public DbSet<Presentation> Presentations { get; set; }
    public DbSet<Speaker> Speakers { get; set; }
    public DbSet<Payement> Payements { get; set; }
    public DbSet<Planner> Planners { get; set; }
    public DbSet<PlannerSpeaker> PlannerSpeakers { get; set; }
    public DbSet<Sponsor> Sponsors { get; set; }
    public DbSet<SponsorEvent> SponsorEvents { get; set; }

    private readonly IConfiguration Configuration;

    public DataContext(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        if (!optionsBuilder.IsConfigured)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder()
                .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
            .AddJsonFile("appsettings.json")
            .Build();

            optionsBuilder.UseSqlServer(configuration.GetConnectionString("CMSDB"));
        }
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Account>().ToTable("Accounts");
        modelBuilder.Entity<ApplicationSettings>().ToTable("ApplicationSettings");
        modelBuilder.Entity<Category>().ToTable("Categories");
        modelBuilder.Entity<Event>().ToTable("Events");
        modelBuilder.Entity<EventAttendance>().ToTable("EventAttendances");
        modelBuilder.Entity<EventCategory>().ToTable("EventCategories");
        modelBuilder.Entity<Partner>().ToTable("Partners");
        modelBuilder.Entity<PartnerEvent>().ToTable("PartnerEvents");
        modelBuilder.Entity<Presentation>().ToTable("Presentations");
        modelBuilder.Entity<Speaker>().ToTable("Speakers");
        modelBuilder.Entity<Payement>().ToTable("Payments");
        modelBuilder.Entity<Planner>().ToTable("Planners");
        modelBuilder.Entity<PlannerSpeaker>().ToTable("PlannerSpeakers");
        modelBuilder.Entity<Sponsor>().ToTable("Sponsors");
        modelBuilder.Entity<SponsorEvent>().ToTable("SponsorEvents");
        modelBuilder.Entity<EventAttendance>()
            .HasOne(ea => ea.Planner)
            .WithMany(e => e.Attendances)
            .HasForeignKey(ea => ea.PlannerId)
            .OnDelete(DeleteBehavior.Restrict);
    }
}

