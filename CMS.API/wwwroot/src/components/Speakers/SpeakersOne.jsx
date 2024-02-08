import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaInstagram, FaXTwitter, FaLinkedin } from 'react-icons/fa6';
import './spk.css'

class SpeakersOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speakers: [],
      loading: true,
      currentPage: 1,
      speakersPerPage: 6,
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

  handleClick = (event) => {
    this.setState({
      currentPage: Number(event.target.id),
    });
  };

  render() {
    const { speakers, loading, currentPage, speakersPerPage } = this.state;

    const indexOfLastSpeaker = currentPage * speakersPerPage;
    const indexOfFirstSpeaker = indexOfLastSpeaker - speakersPerPage;
    const currentSpeakers = speakers.slice(indexOfFirstSpeaker, indexOfLastSpeaker);

    const renderSpeakers = currentSpeakers.map((speaker) => (
      <div key={speaker.id} className="col-lg-4 col-sm-4 p-0 mb-4">
        <div className="elkevent-single-speakers">
          <Link to={`/speaker-detail/${speaker.id}`}>
            <img src={speaker.imageName} alt={speaker.name} width={450} height={500} style={{ borderRadius: '10px' }} />
          </Link>
          <div className="speakers-content">
            <h3>
              <Link to={`/speaker-detail/${speaker.id}`}>{speaker.name}</Link>
            </h3>
            <span>
              <b>{speaker.company}</b>
            </span>
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
    ));

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(speakers.length / speakersPerPage); i++) {
      pageNumbers.push(
        <li key={i} id={i} onClick={this.handleClick} className={currentPage === i ? 'active' : ''}>
          {i}
        </li>
      );
    }

    return (
      <section className="schedule-area container speakers-area">
        <div className="row m-5">
          <div className="section-title">
            <span>One Team One Dream</span>
            <h2>Speakers</h2>
            <div className="bar"></div>
          </div>
          {loading ? <p>Loading...</p> : renderSpeakers}
        </div>
        <ul id="page-numbers">{pageNumbers}</ul>
      </section>
    );
  }
}

export default SpeakersOne;

