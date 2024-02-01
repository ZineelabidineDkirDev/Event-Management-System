using System.ComponentModel.DataAnnotations;

namespace CMS.API.Entities
{
    public class PartnerEvent
    {
        [Key]
        public int PartnerId { get; set; }
        public Partner Partner { get; set; }

        public int EventId { get; set; }
        public Event Event { get; set; }
    }
}
