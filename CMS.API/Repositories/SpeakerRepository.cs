using CMS.API.Contracts;
using CMS.API.Entities;
using CMS.API.Helpers;
using Microsoft.EntityFrameworkCore;

namespace CMS.API.Repositories
{
    public class SpeakerRepository : ISpeakerRepository
    {
        private readonly DataContext _context;

        public SpeakerRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Speaker>> GetSpeakers()
        {
            return await _context.Speakers.ToListAsync();
        }

        public async Task<Speaker> GetSpeakerById(int id)
        {
            return await _context.Speakers.FindAsync(id);
        }

        public async Task<int> CreateSpeaker(Speaker speaker)
        {
            _context.Speakers.Add(speaker);
            return await _context.SaveChangesAsync();
        }

        public async Task<int> UpdateSpeaker(Speaker speaker)
        {
            var existingEntity = await _context.Speakers.FindAsync(speaker.Id);

            if (existingEntity == null)
                return 0; 

            _context.Entry(existingEntity).CurrentValues.SetValues(speaker);
            return await _context.SaveChangesAsync();
        }

        public async Task<int> DeleteSpeaker(int id)
        {
            var existingEntity = await _context.Speakers.FindAsync(id);

            if (existingEntity == null)
                return 0;

            _context.Speakers.Remove(existingEntity);
            return await _context.SaveChangesAsync();
        }
    }
}
