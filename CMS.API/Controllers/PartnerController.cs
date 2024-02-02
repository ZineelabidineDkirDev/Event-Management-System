using AutoMapper;
using CMS.API.Contracts;
using CMS.API.DTOs;
using CMS.API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace CMS.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PartnerController : ControllerBase
    {
        private readonly IPartnerRepository _partnerRepository;
        private readonly IMapper _mapper;

        public PartnerController(IPartnerRepository partnerRepository, IMapper mapper)
        {
            _partnerRepository = partnerRepository;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetPartners()
        {
            var partners = await _partnerRepository.GetPartners();
            var partnersDTO = _mapper.Map<IEnumerable<PartnerDTO>>(partners);
            return Ok(partnersDTO);
        }

        [HttpGet("{partnerId}")]
        public async Task<IActionResult> GetPartnerById(int partnerId)
        {
            var partner = await _partnerRepository.GetPartnerById(partnerId);
            var partnerDTO = _mapper.Map<PartnerDTO>(partner);
            return Ok(partnerDTO);
        }

        [HttpPost]
        public async Task<IActionResult> CreatePartner(PartnerDTO partnerDTO)
        {
            var partnerEntity = _mapper.Map<Partner>(partnerDTO);
            var result = await _partnerRepository.CreatePartner(partnerEntity);
            return Ok(result);
        }

        [HttpPut]
        public async Task<IActionResult> UpdatePartner(PartnerDTO partnerDTO)
        {
            var partnerEntity = _mapper.Map<Partner>(partnerDTO);
            var result = await _partnerRepository.UpdatePartner(partnerEntity);
            return Ok(result);
        }

        [HttpDelete("{partnerId}")]
        public async Task<IActionResult> DeletePartner(int partnerId)
        {
            var result = await _partnerRepository.DeletePartner(partnerId);
            return Ok(result);
        }
    }
}
