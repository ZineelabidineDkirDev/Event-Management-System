using AutoMapper;
using CMS.API.Contracts;
using CMS.API.DTOs;
using CMS.API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace CMS.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlannerController : ControllerBase
    {
        private readonly IPlannerRepository _plannerRepository;
        private readonly IMapper _mapper;

        public PlannerController(IPlannerRepository plannerRepository, IMapper mapper)
        {
            _plannerRepository = plannerRepository;
            _mapper = mapper;
        }

        [HttpGet("Planners")]
        public async Task<IActionResult> GetPlanners()
        {
            var planners = await _plannerRepository.GetPlanners();
            var plannersDTO = _mapper.Map<IEnumerable<PlannerDTO>>(planners);
            return Ok(plannersDTO);
        }

        [HttpGet("PlannersActive")]
        public async Task<IActionResult> GetPlannersActive()
        {
            var planners = await _plannerRepository.GetPlannersActive();
            var plannersDTO = _mapper.Map<IEnumerable<PlannerDTO>>(planners);
            return Ok(plannersDTO);
        }

        [HttpGet("PlannersNonActive")]
        public async Task<IActionResult> GetPlannersNonActive()
        {
            var planners = await _plannerRepository.GetPlannersNonActive();
            var plannersDTO = _mapper.Map<IEnumerable<PlannerDTO>>(planners);
            return Ok(plannersDTO);
        }

        [HttpGet("{plannerId}")]
        public async Task<IActionResult> GetPlannerById(int plannerId)
        {
            var planner = await _plannerRepository.GetPlannerById(plannerId);
            var plannerDTO = _mapper.Map<PlannerDTO>(planner);
            return Ok(plannerDTO);
        }

        [HttpPost]
        public async Task<IActionResult> CreatePlanner(PlannerDTO plannerDTO)
        {
            var planner = _mapper.Map<Planner>(plannerDTO);
            var result = await _plannerRepository.CreatePlanner(planner);
            return Ok(result);
        }

        [HttpPut]
        public async Task<IActionResult> UpdatePlanner(PlannerDTO plannerDTO)
        {
            var planner = _mapper.Map<Planner>(plannerDTO);
            var result = await _plannerRepository.UpdatePlanner(planner);
            return Ok(result);
        }

        [HttpDelete("{plannerId}")]
        public async Task<IActionResult> DeletePlanner(int plannerId)
        {
            var result = await _plannerRepository.DeletePlanner(plannerId);
            return Ok(result);
        }
        [HttpPost("duplicate/{id}")]
        public async Task<IActionResult> DuplicatePlanner(int id)
        {
            var result = await _plannerRepository.DuplicatePlanner(id);

            if (result > 0)
                return Ok(result);
            else
                return NotFound();
        }

        [HttpPost("close/{id}")]
        public async Task<IActionResult> ClosePlanner(int id)
        {
            var result = await _plannerRepository.ClosePlanner(id);

            if (result)
                return Ok(result);
            else
                return NotFound("Planner with ID: " + id + " not found.");
        }
    }
}
