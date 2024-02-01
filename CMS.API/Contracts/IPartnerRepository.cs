using CMS.API.Entities;

namespace CMS.API.Contracts
{
    public interface IPartnerRepository
    {
        Task<IEnumerable<Partner>> GetPartners();
        Task<Partner> GetPartnerById(int id);
        Task<int> CreatePartner(Partner partner);
        Task<int> UpdatePartner(Partner partner);
        Task<int> DeletePartner(int id);
    }
}
