using CMS.API.Contracts;
using CMS.API.Entities;
using CMS.API.Helpers;
using Microsoft.EntityFrameworkCore;

namespace CMS.API.Repositories
{
    public class SpeakerRepository : ISpeakerRepository
    {
        private readonly DataContext _context;
        private readonly IWebHostEnvironment _webHost;

        public SpeakerRepository(DataContext context, IWebHostEnvironment webHost)
        {
            _context = context;
            _webHost = webHost;
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
            try
            {
                string folder = Path.Combine(_webHost.WebRootPath, "public");
                if (!Directory.Exists(folder))
                {
                    Directory.CreateDirectory(folder);
                }

                string originalFileName = Path.GetFileNameWithoutExtension(speaker.Image.FileName);
                string fileExtension = Path.GetExtension(speaker.Image.FileName);
                string uniqueFileName = $"{originalFileName}_{DateTime.Now:yyyyMMddHHmmssfff}{fileExtension}";

                speaker.ImageName = uniqueFileName;

                _context.Speakers.Add(speaker);
                await _context.SaveChangesAsync();

                string filepath = Path.Combine(folder, uniqueFileName);

                using (FileStream fileStream = new FileStream(filepath, FileMode.Create))
                {
                    await speaker.Image.CopyToAsync(fileStream);
                }
                Console.WriteLine("Uploaded");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
            }
            return speaker.Id;
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
