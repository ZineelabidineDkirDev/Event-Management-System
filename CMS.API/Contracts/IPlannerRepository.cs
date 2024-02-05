using CMS.API.Entities;

namespace CMS.API.Contracts
{
    public interface IPlannerRepository
    {
        Task<IEnumerable<Planner>> GetPlanners();
        Task<IEnumerable<Planner>> GetPlannersActive();
        Task<IEnumerable<Planner>> GetPlannersNonActive();
        Task<Planner> GetPlannerById(int id);
        Task<int> CreatePlanner(Planner planner);
        Task<int> UpdatePlanner(Planner planner);
        Task<int> DeletePlanner(int id);
        Task<int> DuplicatePlanner(int id);
        Task<bool> ClosePlanner(int id);
    }
}