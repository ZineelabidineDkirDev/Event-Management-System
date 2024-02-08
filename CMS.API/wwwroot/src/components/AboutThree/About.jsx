import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import LaxButton from '../Shared/LaxButton';
import {FaInstagram,FaXTwitter,FaLinkedin,FaArrowLeft} from 'react-icons/fa6'
 

const About = () => {
  const { id } = useParams();
  const [speaker, setSpeaker] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchSpeaker() {
      try {
        const response = await axios.get(`https://localhost:7062/api/Speaker/${id}`);
        setSpeaker(response.data);
        setLoading(false); // Corrected the loading state
        console.log(speaker.imageName);
      } catch (error) {
        console.error('Error fetching speaker:', error);
        setLoading(false);
      }
    }

    fetchSpeaker();
  }, [id]);

  return (

<section className="about-area-three ptb-120 bg-image">
<div className="container">
    <div className='mb-5'>
    <Link to="/speakers-1">
    <button type="button" class="btn btn-primary">
    <FaArrowLeft style={{fontSize:'1.5em'}}/> Return to speackers<span class="badge badge-light">
        </span>
    </button>
    </Link>
    </div>
{loading ? (
              <p>Loading speaker...</p>
            ) : (
                
    <div className="row h-100 align-items-center">
        <div className="col-lg-6">
            <div className="about-image">
            <img
                  src={`/${speaker.imageName} `}
                  alt={speaker.name}
                  height={600}
                  width={550}
                  className="speaker-image rounded-3 shadow"
                />
                
            </div>
        </div>

        <div className="col-lg-6">
            <div className="about-content">
                <span><b>{speaker.position}</b></span>
                <h2>{speaker.name}</h2>
                <h5><span>Company</span>{speaker.company}</h5>
                <hr />
                <p>{speaker.bio}</p>
                
                <ul style={{display:'inline-flex'}}>
                    
                    <li>
                      <Link to={speaker.instagramProfile} target="_blank" className="twitter">
                        <FaLinkedin style={{fontSize:'2em'}}/>
                      </Link>
                    </li>
                    <li>
                      <Link to={speaker.instagramProfile} target="_blank" className="twitter">
                        <FaInstagram style={{fontSize:'2em',color:'brown'}}/>
                      </Link>
                    </li>

                    <li>
                      <Link to={speaker.instagramProfile} target="_blank" className="twitter">
                        <FaXTwitter style={{fontSize:'2em',color:'black'}}/>
                      </Link>
                    </li>
                    
                </ul>

               
            </div>
        </div>
    </div>
            )}
</div>
</section>

  );
};

export default About;
