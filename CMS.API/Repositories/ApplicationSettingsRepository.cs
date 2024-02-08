using CMS.API.Contracts;
using CMS.API.Entities;
using CMS.API.Helpers;
using Microsoft.EntityFrameworkCore;

namespace CMS.API.Repositories
{
    public class ApplicationSettingsRepository : IApplicationSettingsRepository
    {
        private readonly DataContext _context;

        public ApplicationSettingsRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<ApplicationSettings> GetApplicationSettings()
        {
            return await _context.ApplicationSettings.FirstOrDefaultAsync();
        }

        public async Task<int> CreateApplicationSettings(ApplicationSettings applicationSettings)
        {
            _context.ApplicationSettings.Add(applicationSettings);
            return await _context.SaveChangesAsync();
        }

        public async Task<int> UpdateApplicationSettings(ApplicationSettings applicationSettings)
        {
            var existingEntity = await _context.ApplicationSettings.FindAsync(applicationSettings.Id);

            if (existingEntity == null)
                return 0; 

            _context.Entry(existingEntity).CurrentValues.SetValues(applicationSettings);
            return await _context.SaveChangesAsync();
        }

        public async Task<int> DeleteApplicationSettings(int id)
        {
            var existingEntity = await _context.ApplicationSettings.FindAsync(id);

            if (existingEntity == null)
                return 0;

            _context.ApplicationSettings.Remove(existingEntity);
            return await _context.SaveChangesAsync();
        }

        Task<IEnumerable<ApplicationSettings>> IApplicationSettingsRepository.GetApplicationSettings()
        {
            throw new NotImplementedException();
        }
    }
}
