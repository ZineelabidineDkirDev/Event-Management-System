using System.ComponentModel.DataAnnotations;

namespace CMS.API.Entities
{
    public class Presentation
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int DurationMinutes { get; set; }
        public string SlideUrl { get; set; }
        public int EventId { get; set; }
        public Event Event { get; set; }
    }
}
