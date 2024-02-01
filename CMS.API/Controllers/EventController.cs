using AutoMapper;
using CMS.API.Contracts;
using CMS.API.DTOs;
using CMS.API.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CMS.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : ControllerBase
    {
        private readonly IEventRepository _eventRepository;
        private readonly IMapper _mapper;

        public EventController(IEventRepository eventRepository, IMapper mapper)
        {
            _eventRepository = eventRepository;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetEvents()
        {
            var events = await _eventRepository.GetEvents();
            var eventsDTO = _mapper.Map<IEnumerable<EventDTO>>(events);
            return Ok(eventsDTO);
        }

        [HttpGet("{eventId}")]
        public async Task<IActionResult> GetEventById(int eventId)
        {
            var eventEntity = await _eventRepository.GetEventById(eventId);
            var eventDTO = _mapper.Map<EventDTO>(eventEntity);
            return Ok(eventDTO);
        }

        [HttpPost, DisableRequestSizeLimit]
        public async Task<IActionResult> CreateEvent(EventDTO eventDTO)
        {
            var eventEntity = _mapper.Map<Event>(eventDTO);
            var result = await _eventRepository.CreateEvent(eventEntity);
            return Ok(result);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateEvent(EventDTO eventDTO)
        {
            var eventEntity = _mapper.Map<Event>(eventDTO);
            var result = await _eventRepository.UpdateEvent(eventEntity);
            return Ok(result);
        }

        [HttpDelete("{eventId}")]
        public async Task<IActionResult> DeleteEvent(int eventId)
        {
            var result = await _eventRepository.DeleteEvent(eventId);
            return Ok(result);
        }
    }
}
