using AutoMapper;
using CMS.API.DTOs;
using CMS.API.Entities;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMS.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventAttendanceController : ControllerBase
    {
        private static List<EventAttendance> eventAttendances = new List<EventAttendance>
        {
            new EventAttendance
            {
                Id = 1,
                UserId = 101,
                PlannerId = 201,
                RegistrationDate = DateTime.Now.AddDays(-10),
                HasAttended = true
            },
            new EventAttendance
            {
                Id = 2,
                UserId = 102,
                PlannerId = 202,
                RegistrationDate = DateTime.Now.AddDays(-8),
                HasAttended = false
            },
            new EventAttendance
            {
                Id = 3,
                UserId = 103,
                PlannerId = 203,
                RegistrationDate = DateTime.Now.AddDays(-6),
                HasAttended = true
            },
            new EventAttendance
            {
                Id = 4,
                UserId = 104,
                PlannerId = 204,
                RegistrationDate = DateTime.Now.AddDays(-4),
                HasAttended = false
            },
            new EventAttendance
            {
                Id = 5,
                UserId = 105,
                PlannerId = 205,
                RegistrationDate = DateTime.Now.AddDays(-2),
                HasAttended = true
            }
        };


        private readonly IMapper _mapper;

        public EventAttendanceController(IMapper mapper)
        {
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult GetEventAttendance()
        {
            var eventAttendDTOs = _mapper.Map<IEnumerable<EventAttendanceDTO>>(eventAttendances);
            return Ok(eventAttendDTOs);
        }

        [HttpGet("{id}")]
        public IActionResult GetEventAttendanceById(int id)
        {
            var eventAttendance = eventAttendances.FirstOrDefault(e => e.Id == id);
            if (eventAttendance == null)
                return NotFound();

            var eventAttendanceDTO = _mapper.Map<EventAttendanceDTO>(eventAttendance);
            return Ok(eventAttendanceDTO);
        }

        [HttpPost]
        public IActionResult CreateEventAttendance(EventAttendanceDTO eventAttendanceDTO)
        {
            var eventAttendance = _mapper.Map<EventAttendance>(eventAttendanceDTO);
            eventAttendance.Id = eventAttendances.Count + 1; 
            eventAttendance.RegistrationDate = DateTime.Now; 
            eventAttendances.Add(eventAttendance);
            var createdEventAttendanceDTO = _mapper.Map<EventAttendanceDTO>(eventAttendance);
            return Ok(createdEventAttendanceDTO);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateEventAttendance(int id, EventAttendanceDTO eventAttendanceDTO)
        {
            var eventAttendance = eventAttendances.FirstOrDefault(e => e.Id == id);
            if (eventAttendance == null)
                return NotFound();

            eventAttendance.UserId = eventAttendanceDTO.UserId;
            eventAttendance.PlannerId = eventAttendanceDTO.PlannerId;
            eventAttendance.HasAttended = eventAttendanceDTO.HasAttended;

            var updatedEventAttendanceDTO = _mapper.Map<EventAttendanceDTO>(eventAttendance);
            return Ok(updatedEventAttendanceDTO);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteEventAttendance(int id)
        {
            var eventAttendance = eventAttendances.FirstOrDefault(e => e.Id == id);
            if (eventAttendance == null)
                return NotFound();

            eventAttendances.Remove(eventAttendance);
            return Ok();
        }
    }
}
