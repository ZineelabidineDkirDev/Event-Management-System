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
                string folder = Path.Combine(_webHost.WebRootPath, "");
                if (!Directory.Exists(folder))
                {
                    Directory.CreateDirectory(folder);
                }

                string originalFileName = Path.GetFileNameWithoutExtension(speaker.Image.FileName);
                string fileExtension = Path.GetExtension(speaker.Image.FileName);
                string uniqueFileName = $"{originalFileName}_{DateTime.Now:yyyyMMddHHmmssfff}{fileExtension}";

                speaker.ImageName = uniqueFileName;

                speaker.Id = 0;

                _context.Speakers.Add(speaker);
                await _context.SaveChangesAsync();

                string filepath = Path.Combine(folder, uniqueFileName);

                using (FileStream fileStream = new FileStream(filepath, FileMode.Create))
                {
                    await speaker.Image.CopyToAsync(fileStream);
                }

                Console.WriteLine("Uploaded");
                return speaker.Id;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
                return 0;
            }
        }


        public async Task<int> UpdateSpeaker(Speaker speaker)
        {
            var existingEntity = await _context.Speakers.FindAsync(speaker.Id);

            if (existingEntity == null)
                return 0;

            if (!string.IsNullOrEmpty(existingEntity.ImageName))
            {
                string filePath = Path.Combine(_webHost.WebRootPath, "public", existingEntity.ImageName);
                if (File.Exists(filePath))
                {
                    File.Delete(filePath);
                }
            }

            _context.Entry(existingEntity).CurrentValues.SetValues(speaker);

            await _context.SaveChangesAsync();

            if (speaker.Image != null)
            {
                string folder = Path.Combine(_webHost.WebRootPath, "public");
                string originalFileName = Path.GetFileNameWithoutExtension(speaker.Image.FileName);
                string fileExtension = Path.GetExtension(speaker.Image.FileName);
                string uniqueFileName = $"{originalFileName}_{DateTime.Now:yyyyMMddHHmmssfff}{fileExtension}";

                existingEntity.ImageName = uniqueFileName;

                string filePath = Path.Combine(folder, uniqueFileName);

                using (FileStream fileStream = new FileStream(filePath, FileMode.Create))
                {
                    await speaker.Image.CopyToAsync(fileStream);
                }

                await _context.SaveChangesAsync();
            }

            return existingEntity.Id;
        }

        public async Task<int> DeleteSpeaker(int id)
        {
            var existingEntity = await _context.Speakers.FindAsync(id);

            if (existingEntity == null)
                return 0;

            if (!string.IsNullOrEmpty(existingEntity.ImageName))
            {
                string filePath = Path.Combine(_webHost.WebRootPath, "public", existingEntity.ImageName);
                if (File.Exists(filePath))
                {
                    File.Delete(filePath);
                }
            }

            _context.Speakers.Remove(existingEntity);
            return await _context.SaveChangesAsync();
        }
    }
}
