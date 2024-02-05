using System.ComponentModel.DataAnnotations.Schema;

namespace CMS.API.DTOs
{
    public class EventDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        [NotMapped]
        public IFormFile Image { get; set; }
    }
}