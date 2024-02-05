using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.Eventing.Reader;

namespace CMS.API.Entities
{
    [Table("Speakers")]
    public class Speaker
    {
        [Key]

        public int Id { get; set; }
        public string Name { get; set; }

        public string ImageName { get; set; }

        [NotMapped]
        public IFormFile Image { get; set; }
        public string Bio { get; set; }
        public string Company { get; set; }
        public string Position { get; set; }
        public string LinkedInProfile { get; set; }
        public string TwitterProfile { get; set; }
        public string InstagramProfile { get; set; }
        public bool DesactivateAccount { get; set; }
        public ICollection<PlannerSpeaker> PlannerSpeakers { get; set; }
    }
}
