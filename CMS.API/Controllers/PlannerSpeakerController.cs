using AutoMapper;
using CMS.API.Contracts;
using CMS.API.DTOs;
using CMS.API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace CMS.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlannerSpeakerController : ControllerBase
    {
        private readonly IPlannerSpeakerRepository _plannerSpeakerRepository;
        private readonly IMapper _mapper;

        public PlannerSpeakerController(IPlannerSpeakerRepository plannerSpeakerRepository, IMapper mapper)
        {
            _plannerSpeakerRepository = plannerSpeakerRepository;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetPlannerSpeakers()
        {
            var plannerSpeakers = await _plannerSpeakerRepository.GetPlannerSpeakers();
            var plannerSpeakersDTO = _mapper.Map<IEnumerable<PlannerSpeakerDTO>>(plannerSpeakers);
            return Ok(plannerSpeakersDTO);
        }

        [HttpGet("{plannerSpeakerId}")]
        public async Task<IActionResult> GetPlannerSpeakerById(int plannerSpeakerId)
        {
            var plannerSpeaker = await _plannerSpeakerRepository.GetPlannerSpeakerById(plannerSpeakerId);
            var plannerSpeakerDTO = _mapper.Map<PlannerSpeakerDTO>(plannerSpeaker);
            return Ok(plannerSpeakerDTO);
        }

        [HttpPost]
        public async Task<IActionResult> CreatePlannerSpeaker(PlannerSpeakerDTO plannerSpeakerDTO)
        {
            var plannerSpeaker = _mapper.Map<PlannerSpeaker>(plannerSpeakerDTO);
            var result = await _plannerSpeakerRepository.CreatePlannerSpeaker(plannerSpeaker);
            return Ok(result);
        }

        [HttpPut]
        public async Task<IActionResult> UpdatePlannerSpeaker(PlannerSpeakerDTO plannerSpeakerDTO)
        {
            var plannerSpeaker = _mapper.Map<PlannerSpeaker>(plannerSpeakerDTO);
            var result = await _plannerSpeakerRepository.UpdatePlannerSpeaker(plannerSpeaker);
            return Ok(result);
        }

        [HttpDelete("{plannerSpeakerId}")]
        public async Task<IActionResult> DeletePlannerSpeaker(int plannerSpeakerId)
        {
            var result = await _plannerSpeakerRepository.DeletePlannerSpeaker(plannerSpeakerId);
            return Ok(result);
        }
    }
}