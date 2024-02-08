using CMS.API.Entities;

namespace CMS.API.Contracts
{
    public interface IPlannerSpeakerRepository
    {
        Task<IEnumerable<PlannerSpeaker>> GetPlannerSpeakers();
        Task<List<PlannerSpeaker>> GetPlannerSpeakerById(int id);
        Task<int> CreatePlannerSpeaker(PlannerSpeaker plannerSpeaker);
        Task<int> UpdatePlannerSpeaker(PlannerSpeaker plannerSpeaker);
        Task<int> DeletePlannerSpeaker(int id);
    }
}