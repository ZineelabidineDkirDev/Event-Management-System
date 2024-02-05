using CMS.API.Contracts;
using CMS.API.Entities;
using CMS.API.Helpers;
using Microsoft.EntityFrameworkCore;

namespace CMS.API.Repositories
{
    public class PartnerRepository : IPartnerRepository
    {
        private readonly DataContext _context;

        public PartnerRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Partner>> GetPartners()
        {
            return await _context.Partners.ToListAsync();
        }

        public async Task<Partner> GetPartnerById(int id)
        {
            return await _context.Partners.FindAsync(id);
        }

        public async Task<int> CreatePartner(Partner partner)
        {
            _context.Partners.Add(partner);
            return await _context.SaveChangesAsync();
        }

        public async Task<int> UpdatePartner(Partner partner)
        {
            var existingEntity = await _context.Partners.FindAsync(partner.Id);

            if (existingEntity == null)
                return 0;

            _context.Entry(existingEntity).CurrentValues.SetValues(partner);
            return await _context.SaveChangesAsync();
        }

        public async Task<int> DeletePartner(int id)
        {
            var existingEntity = await _context.Partners.FindAsync(id);

            if (existingEntity == null)
                return 0;

            _context.Partners.Remove(existingEntity);
            return await _context.SaveChangesAsync();
        }
    }
}