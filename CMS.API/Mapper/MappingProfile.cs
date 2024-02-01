using AutoMapper;
using CMS.API.DTOs;
using CMS.API.Entities;

namespace CMS.API.Mapper
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<ApplicationSettingsDTO, ApplicationSettings>();
            CreateMap<CategoryDTO, Category>();
            CreateMap<EventDTO, Event>();
            CreateMap<PartnerDTO, Partner>();
            CreateMap<SpeakerDTO, Speaker>();
            CreateMap<SponsorDTO, Sponsor>();

            CreateMap<ApplicationSettings, ApplicationSettingsDTO>();
            CreateMap<Category, CategoryDTO>();
            CreateMap<Event, EventDTO>();
            CreateMap<Partner, PartnerDTO>();
            CreateMap<Speaker, SpeakerDTO>();
            CreateMap<Sponsor, SponsorDTO>();

        }
    }
}
