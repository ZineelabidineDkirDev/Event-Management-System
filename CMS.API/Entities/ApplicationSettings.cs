using System.ComponentModel.DataAnnotations;

namespace CMS.API.Entities
{
    public class ApplicationSettings
    {
        [Key]
        public int Id { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
    }
}
