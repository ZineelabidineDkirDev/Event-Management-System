using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CMS.API.Entities
{
    [Table("PlannerSpeakers")]
    public class PlannerSpeaker
    {
        [Key]
        public int Id { get; set; }
        public int SpeakerId { get; set; }
        public Speaker Speaker { get; set; }
        public int PlannerId { get; set; }
        public Planner Planner { get; set; }

    }
}
