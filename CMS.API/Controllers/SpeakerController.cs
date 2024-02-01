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
    public class SpeakerController : ControllerBase
    {
        private readonly ISpeakerRepository _speakerRepository;
        private readonly IMapper _mapper;

        public SpeakerController(ISpeakerRepository speakerRepository, IMapper mapper)
        {
            _speakerRepository = speakerRepository;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetSpeakers()
        {
            var speakers = await _speakerRepository.GetSpeakers();
            var speakersDTO = _mapper.Map<IEnumerable<SpeakerDTO>>(speakers);
            return Ok(speakersDTO);
        }

        [HttpGet("{speakerId}")]
        public async Task<IActionResult> GetSpeakerById(int speakerId)
        {
            var speaker = await _speakerRepository.GetSpeakerById(speakerId);
            var speakerDTO = _mapper.Map<SpeakerDTO>(speaker);
            return Ok(speakerDTO);
        }

        [HttpPost]
        public async Task<IActionResult> CreateSpeaker(SpeakerDTO speakerDTO)
        {
            var speakerEntity = _mapper.Map<Speaker>(speakerDTO);
            var result = await _speakerRepository.CreateSpeaker(speakerEntity);
            return Ok(result);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateSpeaker(SpeakerDTO speakerDTO)
        {
            var speakerEntity = _mapper.Map<Speaker>(speakerDTO);
            var result = await _speakerRepository.UpdateSpeaker(speakerEntity);
            return Ok(result);
        }

        [HttpDelete("{speakerId}")]
        public async Task<IActionResult> DeleteSpeaker(int speakerId)
        {
            var result = await _speakerRepository.DeleteSpeaker(speakerId);
            return Ok(result);
        }
    }
}
