namespace CMS.API.DTOs
{
    public class PaymentDTO
    {
        public int Id { get; set; }
        public string TypePayement { get; set; }
        public string TypePlan { get; set; }
        public decimal TicketPrice { get; set; }
    }
}
