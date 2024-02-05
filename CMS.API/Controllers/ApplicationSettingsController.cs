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
    public class ApplicationSettingsController : ControllerBase
    {
        private readonly IApplicationSettingsRepository _applicationSettingsRepository;
        private readonly IMapper _mapper;

        public ApplicationSettingsController(IApplicationSettingsRepository applicationSettingsRepository, IMapper mapper)
        {
            _applicationSettingsRepository = applicationSettingsRepository;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetApplicationSettings()
        {
            var applicationSettings = await _applicationSettingsRepository.GetApplicationSettings();
            var applicationSettingsDTO = _mapper.Map<IEnumerable<ApplicationSettingsDTO>>(applicationSettings);
            return Ok(applicationSettingsDTO);
        }

        [HttpPost]
        public async Task<IActionResult> CreateApplicationSettings(ApplicationSettingsDTO applicationSettingsDTO)
        {
            var applicationSettings = _mapper.Map<ApplicationSettings>(applicationSettingsDTO);
            var result = await _applicationSettingsRepository.CreateApplicationSettings(applicationSettings);
            return Ok(result);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateApplicationSettings(ApplicationSettingsDTO applicationSettingsDTO)
        {
            var applicationSettings = _mapper.Map<ApplicationSettings>(applicationSettingsDTO);
            var result = await _applicationSettingsRepository.UpdateApplicationSettings(applicationSettings);
            return Ok(result);
        }

        [HttpDelete("{applicationSettingsId}")]
        public async Task<IActionResult> DeleteApplicationSettings(int applicationSettingsId)
        {
            var result = await _applicationSettingsRepository.DeleteApplicationSettings(applicationSettingsId);
            return Ok(result);
        }
    }
}