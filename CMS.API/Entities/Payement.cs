using System.ComponentModel.DataAnnotations;

namespace CMS.API.Entities
{
    public class Payement
    {
        [Key]
        public int Id { get; set; }
        public string TypePayement { get; set; }
        public string TypePlan { get; set; }
        public decimal TicketPrice { get; set; }
    }
}
