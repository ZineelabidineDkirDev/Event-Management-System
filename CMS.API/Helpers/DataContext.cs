namespace CMS.API.Helpers;

using CMS.API.Entities;
using Microsoft.EntityFrameworkCore;
using System;

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

    protected override void OnConfiguring(DbContextOptionsBuilder options)
    {
        options.UseSqlServer(Configuration.GetConnectionString("CMSDB"));
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<EventAttendance>()
            .HasOne(ea => ea.Event)
            .WithMany(e => e.Attendances)
            .HasForeignKey(ea => ea.EventId)
            .OnDelete(DeleteBehavior.Restrict);
    }
}

