import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class EventHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planner: null, // Initialiser le planner à null
      loading: true,
    };
  }

  async componentDidMount() {
    const plannerId = this.props.match.params.plannerId; // Récupérer l'ID du planner depuis les paramètres de l'URL
    try {
      // Récupérer les données du planner en fonction de l'ID
      const plannerResponse = await axios.get(`https://localhost:7062/api/Planner/${plannerId}`);
      const planner = plannerResponse.data;

      // Enregistrer les données du planner dans le state
      this.setState({ planner, loading: false });
    } catch (error) {
      console.error('Error fetching planner:', error);
      this.setState({ loading: false });
    }
  }

  render() {
    const { planner, loading } = this.state;
    const data=localStorage.getItem("reserved")
    const event=JSON.parse(data)
    return (
      <div>
        <div className="page-title-area item-bg5">
          <div className="container">
            <h1>Event History</h1>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li>Speakers</li>
            </ul>
          </div>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
<></>
        )}
        <div className="col-lg-4 col-md-6" key={event.id}>
                      <div className="single-blog-post">
                        <div className="blog-image">
                          <Link to="#">
                            <img src={event.imageName} alt={event.name} width={520} height={350} />
                          </Link>

                          <div className="post-tag">
                            
                          </div>
                        </div>

                        <div className="blog-post-content">
                          <h6 className='text-secondary'>
                            Location: <small className='text-uppercase'>
                            </small>
                          </h6>
                          <span className="date">
                          </span>
                          <h3><Link to={`/event-detail/${event.id}`}>{event.name}</Link></h3>
                          <Link  className="read-more-btn" to={`/event-detail`}>
                            Read More <i className="icofont-double-right"></i>
                          </Link>
                          <br />
                          
                        </div>
                      </div>
                    </div>
      </div>
    );
  }
}

export default EventHistory;
