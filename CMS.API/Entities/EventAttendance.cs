using System.ComponentModel.DataAnnotations;

namespace CMS.API.Entities
{
    public class EventAttendance
    {
        [Key]
        public int UserId { get; set; }

        public int EventId { get; set; }
        public Event Event { get; set; }

        public DateTime RegistrationDate { get; set; }
        public bool HasAttended { get; set; }
    }
}
