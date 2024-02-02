using System.ComponentModel.DataAnnotations;

namespace CMS.API.Entities
{
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
