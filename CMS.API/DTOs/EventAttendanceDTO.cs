namespace CMS.API.DTOs
{
    public class EventAttendanceDTO
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int PlannerId { get; set; }
        public DateTime RegistrationDate { get; set; }
        public bool HasAttended { get; set; }
    }
}