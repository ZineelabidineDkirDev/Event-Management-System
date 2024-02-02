using CMS.API.Contracts;
using CMS.API.Entities;
using CMS.API.Helpers;
using Microsoft.EntityFrameworkCore;

namespace CMS.API.Repositories
{
    public class PayementRepository : IPayementRepository
    {
        private readonly DataContext _context;

        public PayementRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Payement>> GetPayements()
        {
            return await _context.Payements.ToListAsync();
        }

        public async Task<Payement> GetPayementById(int id)
        {
            return await _context.Payements.FindAsync(id);
        }

        public async Task<int> CreatePayement(Payement payement)
        {
            _context.Payements.Add(payement);
            return await _context.SaveChangesAsync();
        }

        public async Task<int> UpdatePayement(Payement payement)
        {
            var existingEntity = await _context.Payements.FindAsync(payement.Id);

            if (existingEntity == null)
                return 0;

            _context.Entry(existingEntity).CurrentValues.SetValues(payement);
            return await _context.SaveChangesAsync();
        }

        public async Task<int> DeletePayement(int id)
        {
            var existingEntity = await _context.Payements.FindAsync(id);

            if (existingEntity == null)
                return 0;

            _context.Payements.Remove(existingEntity);
            return await _context.SaveChangesAsync();
        }
    }
}
