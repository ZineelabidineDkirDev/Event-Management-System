using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CMS.API.Entities
{
    [Table("Payements")]
    public class Payement
    {
        [Key]
        public int Id { get; set; }
        public string TypePayement { get; set; }
        public string TypePlan { get; set; }
        public decimal TicketPrice { get; set; }
    }
}
