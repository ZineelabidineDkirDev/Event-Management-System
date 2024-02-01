using CMS.API.Entities;

namespace CMS.API.Contracts
{
    public interface IEventRepository
    {
        Task<IEnumerable<Event>> GetEvents();
        Task<Event> GetEventById(int id);
        Task<int> CreateEvent(Event eventEntity);
        Task<int> UpdateEvent(Event eventEntity);
        Task<int> DeleteEvent(int id);
    }
}
