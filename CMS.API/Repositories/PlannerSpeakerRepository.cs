using CMS.API.Contracts;
using CMS.API.Entities;
using CMS.API.Helpers;
using Microsoft.EntityFrameworkCore;

namespace CMS.API.Repositories
{
    public class PlannerSpeakerRepository : IPlannerSpeakerRepository
    {
        private readonly DataContext _context;

        public PlannerSpeakerRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<PlannerSpeaker>> GetPlannerSpeakers()
        {
            return await _context.PlannerSpeakers.ToListAsync();
        }

        public async Task<PlannerSpeaker> GetPlannerSpeakerById(int id)
        {
            return await _context.PlannerSpeakers.FindAsync(id);
        }

        public async Task<int> CreatePlannerSpeaker(PlannerSpeaker plannerSpeaker)
        {
            _context.PlannerSpeakers.Add(plannerSpeaker);
            return await _context.SaveChangesAsync();
        }

        public async Task<int> UpdatePlannerSpeaker(PlannerSpeaker plannerSpeaker)
        {
            var existingEntity = await _context.PlannerSpeakers.FindAsync(plannerSpeaker.Id);

            if (existingEntity == null)
                return 0;

            _context.Entry(existingEntity).CurrentValues.SetValues(plannerSpeaker);
            return await _context.SaveChangesAsync();
        }

        public async Task<int> DeletePlannerSpeaker(int id)
        {
            var existingEntity = await _context.PlannerSpeakers.FindAsync(id);

            if (existingEntity == null)
                return 0;

            _context.PlannerSpeakers.Remove(existingEntity);
            return await _context.SaveChangesAsync();
        }
    }
}
