using System.ComponentModel.DataAnnotations.Schema;

namespace CMS.API.DTOs
{
    public class EventDTO
    {
        public string Name { get; set; }
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
    }
}
