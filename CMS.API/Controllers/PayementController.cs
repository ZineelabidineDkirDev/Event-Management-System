using AutoMapper;
using CMS.API.Contracts;
using CMS.API.DTOs;
using CMS.API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace CMS.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PayementController : ControllerBase
    {
        private readonly IPayementRepository _payementRepository;
        private readonly IMapper _mapper;

        public PayementController(IPayementRepository payementRepository, IMapper mapper)
        {
            _payementRepository = payementRepository;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetPayements()
        {
            var payements = await _payementRepository.GetPayements();
            var payementsDTO = _mapper.Map<IEnumerable<PaymentDTO>>(payements);
            return Ok(payementsDTO);
        }

        [HttpGet("{payementId}")]
        public async Task<IActionResult> GetPayementById(int payementId)
        {
            var payement = await _payementRepository.GetPayementById(payementId);
            var payementDTO = _mapper.Map<PaymentDTO>(payement);
            return Ok(payementDTO);
        }

        [HttpPost]
        public async Task<IActionResult> CreatePayement(PaymentDTO payementDTO)
        {
            var payement = _mapper.Map<Payement>(payementDTO);
            var result = await _payementRepository.CreatePayement(payement);
            return Ok(result);
        }

        [HttpPut]
        public async Task<IActionResult> UpdatePayement(PaymentDTO payementDTO)
        {
            var payement = _mapper.Map<Payement>(payementDTO);
            var result = await _payementRepository.UpdatePayement(payement);
            return Ok(result);
        }

        [HttpDelete("{payementId}")]
        public async Task<IActionResult> DeletePayement(int payementId)
        {
            var result = await _payementRepository.DeletePayement(payementId);
            return Ok(result);
        }
    }
}
