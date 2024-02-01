using System.ComponentModel.DataAnnotations;

namespace CMS.API.Entities
{
    public class SponsorEvent
    {
        [Key]
        public int SponsorId { get; set; }
        public Sponsor Sponsor { get; set; }


        public int EventId { get; set; }
        public Event Event { get; set; }
    }
}
