using System.ComponentModel.DataAnnotations;

namespace CMS.API.Entities
{
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
