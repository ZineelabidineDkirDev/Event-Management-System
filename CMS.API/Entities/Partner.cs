using System.ComponentModel.DataAnnotations;

namespace CMS.API.Entities
{
    public class Partner
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string WebsiteUrl { get; set; }
        public ICollection<PartnerEvent> PartnerEvents { get; set; }
    }
}
