using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace CMS.API.Entities
{
    public class Speaker
    {
        [Key]

        public int Id { get; set; }
        public string Name { get; set; }

        [NotMapped]
        public IFormFile Image { get; set; }
        public string Bio { get; set; }
        public string Company { get; set; }
        public string Position { get; set; }
        public string LinkedInProfile { get; set; }
        public string TwitterProfile { get; set; }


        public int EventId { get; set; }
        public Event Event { get; set; }
    }
}
