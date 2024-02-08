using Microsoft.AspNetCore.Mvc;
using CMS.API.Contracts;
using CMS.API.Entities;
using CMS.API.DTOs;
using CMS.API.Repositories;
using AutoMapper;

namespace CMS.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventCategoryController : ControllerBase
    {
        private readonly IEventCategoryRepository _eventCategoryRepository;
        private readonly IMapper _mapper;

        public EventCategoryController(IEventCategoryRepository eventCategoryRepository, IMapper mapper)
        {
            _eventCategoryRepository = eventCategoryRepository ?? throw new ArgumentNullException(nameof(eventCategoryRepository));
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetEventCategories()
        {
            try
            {
                var eventCatg = await _eventCategoryRepository.GetEventCategories();
                var categoriesDTO = _mapper.Map<IEnumerable<EventCategoryDTO>>(eventCatg);
                return Ok(categoriesDTO);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error: {ex.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<EventCategory>> GetEventCategoryById(int id)
        {
            try
            {
                var eventCategory = await _eventCategoryRepository.GetEventCategoryById(id);

                if (eventCategory == null)
                    return NotFound();

                return Ok(eventCategory);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error: {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<ActionResult<int>> CreateEventCategory([FromBody] EventCategoryDTO eventCategoryDto)
        {
            try
            {
                var eventEntity = _mapper.Map<EventCategory>(eventCategoryDto);
                var result = await _eventCategoryRepository.CreateEventCategory(eventEntity);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error: {ex.Message}");
            }
        }

        [HttpPut]
        public async Task<ActionResult<int>> UpdateEventCategory([FromBody] EventCategory eventCategory)
        {
            try
            {
                var result = await _eventCategoryRepository.UpdateEventCategory(eventCategory);

                if (result == 0)
                    return NotFound();

                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<int>> DeleteEventCategory(int id)
        {
            try
            {
                var result = await _eventCategoryRepository.DeleteEventCategory(id);

                if (result == 0)
                    return NotFound();

                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error: {ex.Message}");
            }
        }
    }
}