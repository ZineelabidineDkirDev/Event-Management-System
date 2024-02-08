using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CMS.API.Entities
{
    [Table("EventAttendances")]
    public class EventAttendance
    {
        [Key]

        public int Id { get; set; }
        public int UserId { get; set; }
        public Account Account { get; set; }
        public int PlannerId { get; set; }
        public Planner Planner { get; set; }
        public DateTime RegistrationDate { get; set; }
        public bool HasAttended { get; set; }
    }
}
