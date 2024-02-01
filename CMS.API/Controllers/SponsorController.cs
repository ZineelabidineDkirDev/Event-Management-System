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
    public class SponsorController : ControllerBase
    {
        private readonly ISponsorRepository _sponsorRepository;
        private readonly IMapper _mapper;

        public SponsorController(ISponsorRepository sponsorRepository, IMapper mapper)
        {
            _sponsorRepository = sponsorRepository;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetSponsors()
        {
            var sponsors = await _sponsorRepository.GetSponsors();
            var sponsorsDTO = _mapper.Map<IEnumerable<SponsorDTO>>(sponsors);
            return Ok(sponsorsDTO);
        }

        [HttpGet("{sponsorId}")]
        public async Task<IActionResult> GetSponsorById(int sponsorId)
        {
            var sponsor = await _sponsorRepository.GetSponsorById(sponsorId);
            var sponsorDTO = _mapper.Map<SponsorDTO>(sponsor);
            return Ok(sponsorDTO);
        }

        [HttpPost]
        public async Task<IActionResult> CreateSponsor(SponsorDTO sponsorDTO)
        {
            var sponsorEntity = _mapper.Map<Sponsor>(sponsorDTO);
            var result = await _sponsorRepository.CreateSponsor(sponsorEntity);
            return Ok(result);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateSponsor(SponsorDTO sponsorDTO)
        {
            var sponsorEntity = _mapper.Map<Sponsor>(sponsorDTO);
            var result = await _sponsorRepository.UpdateSponsor(sponsorEntity);
            return Ok(result);
        }

        [HttpDelete("{sponsorId}")]
        public async Task<IActionResult> DeleteSponsor(int sponsorId)
        {
            var result = await _sponsorRepository.DeleteSponsor(sponsorId);
            return Ok(result);
        }
    }
}
