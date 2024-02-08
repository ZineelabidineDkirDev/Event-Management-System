using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CMS.API.DTOs
{
    public class EventDTO
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string ImageName { get; set; }
        [NotMapped]
        public IFormFile Image { get; set; }
    }
}
