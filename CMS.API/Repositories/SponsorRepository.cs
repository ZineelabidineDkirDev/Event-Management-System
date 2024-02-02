using CMS.API.Contracts;
using CMS.API.Entities;
using CMS.API.Helpers;
using Microsoft.EntityFrameworkCore;

namespace CMS.API.Repositories
{
    public class SponsorRepository : ISponsorRepository
    {
        private readonly DataContext _context;
        private readonly IWebHostEnvironment _webHost;

        public SponsorRepository(DataContext context, IWebHostEnvironment webHost)
        {
            _context = context;
            _webHost = webHost;
        }

        public async Task<IEnumerable<Sponsor>> GetSponsors()
        {
            return await _context.Sponsors.ToListAsync();
        }

        public async Task<Sponsor> GetSponsorById(int id)
        {
            return await _context.Sponsors.FindAsync(id);
        }

        public async Task<int> CreateSponsor(Sponsor sponsor)
        {

            try
            {
                string folder = Path.Combine(_webHost.WebRootPath, "public");
                if (!Directory.Exists(folder))
                {
                    Directory.CreateDirectory(folder);
                }

                string originalFileName = Path.GetFileNameWithoutExtension(sponsor.Logo.FileName);
                string fileExtension = Path.GetExtension(sponsor.Logo.FileName);
                string uniqueFileName = $"{originalFileName}_{DateTime.Now:yyyyMMddHHmmssfff}{fileExtension}";

                sponsor.LogoName = uniqueFileName;

                _context.Sponsors.Add(sponsor);
                await _context.SaveChangesAsync();

                string filepath = Path.Combine(folder, uniqueFileName);

                using (FileStream fileStream = new FileStream(filepath, FileMode.Create))
                {
                    await sponsor.Logo.CopyToAsync(fileStream);
                }
                Console.WriteLine("Uploaded");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
            }
            return sponsor.Id;
        }

        public async Task<int> UpdateSponsor(Sponsor sponsor)
        {
            var existingEntity = await _context.Sponsors.FindAsync(sponsor.Id);

            if (existingEntity == null)
                return 0; 

            _context.Entry(existingEntity).CurrentValues.SetValues(sponsor);
            return await _context.SaveChangesAsync();
        }

        public async Task<int> DeleteSponsor(int id)
        {
            var existingEntity = await _context.Sponsors.FindAsync(id);

            if (existingEntity == null)
                return 0;

            _context.Sponsors.Remove(existingEntity);
            return await _context.SaveChangesAsync();
        }
    }
}
