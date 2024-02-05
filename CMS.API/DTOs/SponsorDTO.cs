using System.ComponentModel.DataAnnotations.Schema;

namespace CMS.API.DTOs
{
    public class SponsorDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string Description { get; set; }
        [NotMapped]
        public IFormFile Logo { get; set; }
        public string ImageName { get; set; }
    }
}
