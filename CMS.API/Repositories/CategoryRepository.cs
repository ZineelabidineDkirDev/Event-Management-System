using CMS.API.Contracts;
using CMS.API.Entities;
using CMS.API.Helpers;
using Microsoft.EntityFrameworkCore;

namespace CMS.API.Repositories
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly DataContext _context;

        public CategoryRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Category>> GetCategories()
        {
            return await _context.Categories.ToListAsync();
        }

        public async Task<Category> GetCategoryById(int id)
        {
            return await _context.Categories.FindAsync(id);
        }

        public async Task<int> CreateCategory(Category category)
        {
            _context.Categories.Add(category);
            return await _context.SaveChangesAsync();
        }

        public async Task<int> UpdateCategory(Category category)
        {
            var existingEntity = await _context.Categories.FindAsync(category.Id);

            if (existingEntity == null)
                return 0; 

            _context.Entry(existingEntity).CurrentValues.SetValues(category);
            return await _context.SaveChangesAsync();
        }

        public async Task<int> DeleteCategory(int id)
        {
            var existingEntity = await _context.Categories.FindAsync(id);

            if (existingEntity == null)
                return 0; 

            _context.Categories.Remove(existingEntity);
            return await _context.SaveChangesAsync();
        }
    }
}
