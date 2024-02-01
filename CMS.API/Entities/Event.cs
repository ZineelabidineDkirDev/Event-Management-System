using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace CMS.API.Entities
{
    public class Event
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string ImageName { get; set; }

        [NotMapped]
        public IFormFile Image { get; set; }
        public DateTime StartDateTime { get; set; }
        public DateTime EndDateTime { get; set; }
        public string Location { get; set; }

        public string Horizontal { get; set; }
        public string Vertical { get; set; }
        public string Description { get; set; }
        public bool IsOnline { get; set; }
        public decimal TicketPrice { get; set; }
        public int MaxAttendees { get; set; }
        public bool IsActive { get; set; }
        public int OrganizerId { get; set; }
        public ICollection<Speaker> Speakers { get; set; }
        public ICollection<Presentation> Presentations { get; set; }
        public ICollection<PartnerEvent> PartnerEvents { get; set; }
        public ICollection<SponsorEvent> SponsorEvents { get; set; }
        public ICollection<EventCategory> EventCategories { get; set; }
        public ICollection<EventAttendance> Attendances { get; set; }
    }
}
