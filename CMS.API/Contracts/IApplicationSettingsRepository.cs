using CMS.API.Entities;

namespace CMS.API.Contracts
{
    public interface IApplicationSettingsRepository
    {
        Task<IEnumerable<ApplicationSettings>> GetApplicationSettings();
        Task<int> CreateApplicationSettings(ApplicationSettings applicationSettings);
        Task<int> UpdateApplicationSettings(ApplicationSettings applicationSettings);
        Task<int> DeleteApplicationSettings(int id);
    }
}
