import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {FaInstagram,FaXTwitter,FaLinkedin} from 'react-icons/fa6'

class SpeakersOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speakers: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchSpeakers();
  }

  async fetchSpeakers() {
    try {
      const response = await axios.get('https://localhost:7062/api/Speaker');
      this.setState({ speakers: response.data, loading: false });
    } catch (error) {
      console.error('Error fetching speakers:', error);
      this.setState({ loading: false });
    }
  }

  render() {
    const { speakers, loading } = this.state;

    return (
      <section className="speakers-area">
        <div className="row m-0">
          {loading ? (
            <p>Loading...</p>
          ) : (
            speakers.map((speaker) => (
              <div key={speaker.id} className="col-lg-4 col-md-6 p-0">
                <div className="single-speakers">
                  <Link to={`/about-3/${speaker.id}`}>
                    <img src={speaker.imageName} alt={speaker.name} width={520} height={550} />
                  </Link>

                  <div className="speakers-content">
                    <h3>
                      <Link to={`/about-3/${speaker.id}`}>{speaker.name}</Link>
                    </h3>
                    <span><b>{speaker.company}</b></span>
                    <p>{speaker.position}</p>
                  </div>
                  <ul>
                  <li>
                      <Link to={speaker.instagramProfile} target="_blank" className="twitter">
                      <FaInstagram />
                      </Link>
                    </li>

                    <li>
                      <Link to={speaker.twitterProfile} target="_blank" className="twitter">
                      <FaXTwitter />
                      </Link>
                    </li>
                    
                    <li>
                      <Link to={speaker.linkedInProfile} target="_blank" className="linkedin">
                      <FaLinkedin />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    );
  }
}

export default SpeakersOne;
