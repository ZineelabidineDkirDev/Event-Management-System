using System.ComponentModel.DataAnnotations.Schema;

namespace CMS.API.DTOs
{
    public class EventDTO
    {
        public string Name { get; set; }
        [NotMapped]
        public IFormFile Image { get; set; }
    }
}
