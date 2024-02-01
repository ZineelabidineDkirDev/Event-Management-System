using CMS.API.Contracts;
using CMS.API.Entities;
using CMS.API.Helpers;
using Microsoft.EntityFrameworkCore;

namespace CMS.API.Repositories
{
    public class SponsorRepository : ISponsorRepository
    {
        private readonly DataContext _context;

        public SponsorRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Sponsor>> GetSponsors()
        {
            return await _context.Sponsors.ToListAsync();
        }

        public async Task<Sponsor> GetSponsorById(int id)
        {
            return await _context.Sponsors.FindAsync(id);
        }

        public async Task<int> CreateSponsor(Sponsor sponsor)
        {
            _context.Sponsors.Add(sponsor);
            return await _context.SaveChangesAsync();
        }

        public async Task<int> UpdateSponsor(Sponsor sponsor)
        {
            var existingEntity = await _context.Sponsors.FindAsync(sponsor.Id);

            if (existingEntity == null)
                return 0; 

            _context.Entry(existingEntity).CurrentValues.SetValues(sponsor);
            return await _context.SaveChangesAsync();
        }

        public async Task<int> DeleteSponsor(int id)
        {
            var existingEntity = await _context.Sponsors.FindAsync(id);

            if (existingEntity == null)
                return 0;

            _context.Sponsors.Remove(existingEntity);
            return await _context.SaveChangesAsync();
        }
    }
}
