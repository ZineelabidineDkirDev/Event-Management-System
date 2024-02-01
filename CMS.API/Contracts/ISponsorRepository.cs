using CMS.API.Entities;

namespace CMS.API.Contracts
{
    public interface ISponsorRepository
    {
        Task<IEnumerable<Sponsor>> GetSponsors();
        Task<Sponsor> GetSponsorById(int id);
        Task<int> CreateSponsor(Sponsor sponsor);
        Task<int> UpdateSponsor(Sponsor sponsor);
        Task<int> DeleteSponsor(int id);
    }
}
