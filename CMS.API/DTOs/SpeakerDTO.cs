﻿using System.ComponentModel.DataAnnotations.Schema;

namespace CMS.API.DTOs
{
    public class SpeakerDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        [NotMapped]
        public IFormFile Image { get; set; }
        public string ImageName { get; set; }
        public string Bio { get; set; }
        public string Company { get; set; }
        public string Position { get; set; }
        public string LinkedInProfile { get; set; }
        public string TwitterProfile { get; set; }
        public string InstagramProfile { get; set; }
        public bool DesactivateAccount { get; set; }
    }
}
