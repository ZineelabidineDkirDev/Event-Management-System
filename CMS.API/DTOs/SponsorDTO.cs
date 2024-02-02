using System.ComponentModel.DataAnnotations.Schema;

namespace CMS.API.DTOs
{
    public class SponsorDTO
    {
        public string Name { get; set; }
        public string Description { get; set; }
        [NotMapped]
        public IFormFile Logo { get; set; }
    }
}
