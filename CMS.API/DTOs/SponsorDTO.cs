using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CMS.API.DTOs
{
    public class SponsorDTO
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string LogoName { get; set; }
        public string Type { get; set; }
        [NotMapped]
        public IFormFile Logo { get; set; }
    }
}
