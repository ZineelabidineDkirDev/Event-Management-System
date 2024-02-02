using CMS.API.Entities;

namespace CMS.API.Contracts
{
    public interface IPayementRepository
    {
        Task<IEnumerable<Payement>> GetPayements();
        Task<Payement> GetPayementById(int id);
        Task<int> CreatePayement(Payement payement);
        Task<int> UpdatePayement(Payement payement);
        Task<int> DeletePayement(int id);
    }
}
