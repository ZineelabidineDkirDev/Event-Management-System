using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CMS.API.Entities
{
    [Table("EventAttendances")]
    public class EventAttendance
    {
        public int Id { get; set; }
        public int ParticipantId { get; set; }
        public Account Account { get; set; }
        public int EventId { get; set; }
        public Event Event { get; set; }
        public DateTime RegistrationDate { get; set; }
        public bool HasAttended { get; set; }
    }
}
