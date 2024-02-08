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
      <section className="schedule-area container speakers-area">
        <div className="row m-5">
        <div className="section-title">
                        <span>One Team One Dream</span>
                        <h2>Speakers</h2>
                        <Link to="/speakers-1" className="btn btn-primary">Join Speakers!</Link>

                        <div className="bar"></div>
                    </div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            speakers.map((speaker) => (

              <div key={speaker.id} className="col-lg-4 col-sm-4 p-0 mb-4">
                        <div className="elkevent-single-speakers">
                        <Link to={`/speaker-detail/${speaker.id}`}>
                          <img src={speaker.imageName} alt={speaker.name} width={450} height={500} style={{borderRadius:'10px'}} />
                        </Link>

                            <div className="speakers-content">
                              <h3>
                                <Link to={`/speaker-detail/${speaker.id}`}>{speaker.name}</Link>
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
                                <Link to={speaker.linkedInProfile} target="_blank" className="linkedin">
                                <FaLinkedin />
                                </Link>
                                </li>
                                <li>
                                <Link to={speaker.twitterProfile} target="_blank" className="twitter">
                                  <FaXTwitter />
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
