using System.ComponentModel.DataAnnotations;

namespace CMS.API.Entities
{
    public class Category
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public ICollection<EventCategory> EventCategories { get; set; }
    }
}
