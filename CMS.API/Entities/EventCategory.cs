using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CMS.API.Entities
{
    [Table("EventCategories")]
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
