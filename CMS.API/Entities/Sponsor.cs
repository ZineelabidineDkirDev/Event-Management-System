using System.ComponentModel.DataAnnotations;

namespace CMS.API.Entities
{
    public class Sponsor
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string LogoUrl { get; set; }
        public ICollection<SponsorEvent> SponsorEvents { get; set; }
    }
}
