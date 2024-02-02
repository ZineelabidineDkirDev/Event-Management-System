using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CMS.API.Entities
{
    [Table("PartnerEvents")]
    public class PartnerEvent
    {
        [Key]
        public int Id { get; set; }
        public int PartnerId { get; set; }
        public Partner Partner { get; set; }
        public int EventId { get; set; }
        public Event Event { get; set; }
    }
}
