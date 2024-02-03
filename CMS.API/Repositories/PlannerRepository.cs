using CMS.API.Contracts;
using CMS.API.Entities;
using CMS.API.Helpers;
using Microsoft.EntityFrameworkCore;

namespace CMS.API.Repositories
{
    public class PlannerRepository : IPlannerRepository
    {
        private readonly DataContext _context;

        public PlannerRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Planner>> GetPlanners()
        {
            return await _context.Planners.ToListAsync();
        }

        public async Task<IEnumerable<Planner>> GetPlannersActive()
        {
            return await _context.Planners.Where(planner => planner.IsActive == true).ToListAsync();
        }

        public async Task<IEnumerable<Planner>> GetPlannersNonActive()
        {
            return await _context.Planners.Where(planner => planner.IsActive == false).ToListAsync();
        }

        public async Task<Planner> GetPlannerById(int id)
        {
            return await _context.Planners.FindAsync(id);
        }

        public async Task<int> CreatePlanner(Planner planner)
        {
            _context.Planners.Add(planner);
            return await _context.SaveChangesAsync();
        }

        public async Task<int> UpdatePlanner(Planner planner)
        {
            var existingEntity = await _context.Planners.FindAsync(planner.Id);

            if (existingEntity == null)
                return 0;

            _context.Entry(existingEntity).CurrentValues.SetValues(planner);
            return await _context.SaveChangesAsync();
        }

        public async Task<int> DeletePlanner(int id)
        {
            var existingEntity = await _context.Planners.FindAsync(id);

            if (existingEntity == null)
                return 0;

            _context.Planners.Remove(existingEntity);
            return await _context.SaveChangesAsync();
        }

        public async Task<int> DuplicatePlanner(int id)
        {
            var plannerToDuplicate = await _context.Planners.FindAsync(id);

            if (plannerToDuplicate == null)
                return 0;

            var duplicatedPlanner = new Planner
            {
                StartDateTime = plannerToDuplicate.StartDateTime,
                EndDateTime = plannerToDuplicate.EndDateTime,
                Location = plannerToDuplicate.Location,
                Horizontal = plannerToDuplicate.Horizontal,
                Vertical = plannerToDuplicate.Vertical,
                Description = plannerToDuplicate.Description,
                IsOnline = plannerToDuplicate.IsOnline,
                MaxAttendees = plannerToDuplicate.MaxAttendees,
                IsActive = plannerToDuplicate.IsActive,
                OrganizerId = plannerToDuplicate.OrganizerId,
                EventId = plannerToDuplicate.EventId,
                Event = plannerToDuplicate.Event,
                Presentations = plannerToDuplicate.Presentations,
                PartnerEvents = plannerToDuplicate.PartnerEvents,
                SponsorEvents = plannerToDuplicate.SponsorEvents,
                EventCategories = plannerToDuplicate.EventCategories,
                Attendances = plannerToDuplicate.Attendances,
                PlannerSpeakers = plannerToDuplicate.PlannerSpeakers
            };

            _context.Planners.Add(duplicatedPlanner);
            return await _context.SaveChangesAsync();
        }

        public async Task<bool> ClosePlanner(int id)
        {
            try
            {
                var plannerToClose = await _context.Planners.FindAsync(id);

                if (plannerToClose == null)
                {
                    return false;
                }

                if (plannerToClose.EndDateTime <= DateTime.UtcNow || plannerToClose.IsActive == true)
                {
                    plannerToClose.IsActive = false;

                    _context.Planners.Update(plannerToClose);
                    await _context.SaveChangesAsync();

                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch (Exception ex)
            {
                throw; 
            }
        }
    }
}
