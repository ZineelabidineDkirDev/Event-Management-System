using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CMS.API.Entities
{
    [Table("Planners")]
    public class Planner
    {
        [Key]
        public int Id { get; set; }
        public DateTime StartDateTime { get; set; }
        public DateTime EndDateTime { get; set; }
        public string Location { get; set; }
        public string Horizontal { get; set; }
        public string Vertical { get; set; }
        public string Description { get; set; }
        public bool IsOnline { get; set; }
        public int MaxAttendees { get; set; }
        public bool IsActive { get; set; }
        public int OrganizerId { get; set; }
        public int EventId { get; set; }
        public Event Event { get; set; }
        public ICollection<Presentation> Presentations { get; set; }
        public ICollection<PartnerEvent> PartnerEvents { get; set; }
        public ICollection<SponsorEvent> SponsorEvents { get; set; }
        public ICollection<EventCategory> EventCategories { get; set; }
        public ICollection<EventAttendance> Attendances { get; set; }
        public ICollection<PlannerSpeaker> PlannerSpeakers { get; set; }
    }
}
