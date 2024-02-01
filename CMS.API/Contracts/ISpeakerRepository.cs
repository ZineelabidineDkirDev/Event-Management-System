using CMS.API.Entities;

namespace CMS.API.Contracts
{
    public interface ISpeakerRepository
    {
        Task<IEnumerable<Speaker>> GetSpeakers();
        Task<Speaker> GetSpeakerById(int id);
        Task<int> CreateSpeaker(Speaker speaker);
        Task<int> UpdateSpeaker(Speaker speaker);
        Task<int> DeleteSpeaker(int id);
    }
}
