import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaLinkedin, FaArrowLeft } from 'react-icons/fa';

const About = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState({});
  const [planners, setPlanners] = useState([]);
  const [eventCategories, setEventCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [plannerSpeakers, setPlannerSpeakers] = useState([]);
  const [speakers, setSpeakers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEventData() {
      try {
        const [
          eventsResponse,
          plannersResponse,
          eventCategoriesResponse,
          categoriesResponse,
          plannerSpeakerResponse,
          speakerResponse,
        ] = await Promise.all([
          axios.get(`https://localhost:7062/api/Event/${eventId}`),
          axios.get('https://localhost:7062/api/Planner/Planners'),
          axios.get('https://localhost:7062/api/EventCategory'),
          axios.get('https://localhost:7062/api/Category'),
          axios.get('https://localhost:7062/api/PlannerSpeaker'),
          axios.get('https://localhost:7062/api/Speaker'),
        ]);

        setEvent(eventsResponse.data);
        setPlanners(plannersResponse.data);
        setEventCategories(eventCategoriesResponse.data);
        setCategories(categoriesResponse.data);
        setPlannerSpeakers(plannerSpeakerResponse.data);
        setSpeakers(speakerResponse.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchEventData();
  }, [eventId]);

  return (
    <section className="about-area-two ptb-120 bg-image">
      <div className="container">
        {loading ? (
          <p>Loading events...</p>
        ) : (
          <div className="row h-100 align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <span><b>Category : </b>{getCategory(event.id)}</span>
                <h2>{event.name}</h2>
                <h6>{getDatePlanning(event.id)}</h6>

                <p><b>Description:</b> {getDescriptionNamePlanning(event.id)}</p>
                <span><b>Location:</b> {getLocationPlanning(event.id)}</span>
                <p><b>Speaker:</b> {getSpeaker(event.id)}</p>
             
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-image">
                <div className='p-3 about-content flex align-items-center' style={{marginLeft:'20px'}}> 
                  <h5>Max Attendances : <b>{getAttendance(event.id)}</b></h5> 
                </div>
                <img src={`/${event.imageName}`} alt={event.name} className="about-img1" 
                style={{marginLeft:'30px'}} height={550} width={500}/>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );

  // Helpers functions 

  function getDatePlanning(plannerId) {
    const correspondingPlanner = planners.find(planner => planner.id === plannerId);
    return correspondingPlanner ? `${correspondingPlanner.startDateTime.substring(0,10)} to ${correspondingPlanner.endDateTime.substring(0,10)}`: 'N/A';
  }

  function getDescriptionNamePlanning(plannerId) {
    const correspondingPlanner = planners.find(planner => planner.id === plannerId);
    return correspondingPlanner ? `${correspondingPlanner.description}`: 'N/A';
  }
  function getLocationPlanning(plannerId) {
    const correspondingPlanner = planners.find(planner => planner.id === plannerId);
    return correspondingPlanner ? `${correspondingPlanner.location}`: 'N/A';
  }
  function getCategory(categoryId) {
    const correspondingCategory = categories.find(category => category.id === categoryId);
    return correspondingCategory ? correspondingCategory.name : 'N/A';
  }

  function getAttendance(attendanceId) {
    const correspondingAttendance = planners.find(attendance => attendance.id === attendanceId);
    return correspondingAttendance ? correspondingAttendance.maxAttendees : 'N/A';
  }

  function getSpeaker(plannerId) {
    const plannerSpeaker = plannerSpeakers.find(ps => ps.plannerId === plannerId);
    if (plannerSpeaker) {
        const speaker = speakers.find(s => s.id === plannerSpeaker.speakerId);
        return speaker ? <div className='flex align-items-center'><p><img className='shadow' src={`/${speaker.imageName}`} 
        width={80} height={80} 
        style={{borderRadius:'100%'}}/></p><h6>Mr. {speaker.name} - <small style={{color:'#53B60D'}}>{speaker.company}</small></h6> <p></p></div> : 'N/A';
    }
    return 'N/A';
}
};

export default About;
