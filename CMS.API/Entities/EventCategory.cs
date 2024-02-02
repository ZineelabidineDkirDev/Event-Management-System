using System.ComponentModel.DataAnnotations;

namespace CMS.API.Entities
{
    public class EventCategory
    {
        [Key]
        public int Id { get; set; }
        public int EventId { get; set; }
        public Event Event { get; set; }
        public int CategoryId { get; set; }
        public Category Category { get; set; }
    }
}
