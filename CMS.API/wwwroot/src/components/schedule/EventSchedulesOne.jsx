import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class EventSchedulesOne extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      planner: [],
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      const [eventsResponse, plannerResponse] = await Promise.all([
        axios.get('https://localhost:7062/api/Event'),
        axios.get('https://localhost:7062/api/Planner/Planners'),
      ]);

      this.setState({
        events: eventsResponse.data,
        planner: plannerResponse.data,
        loading: false,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      this.setState({ loading: false });
    }
  }

  render() {
    const { events, loading, planner } = this.state;
    console.log(events);

    return (
      <>
        <section className="blog-area ptb-120 bg-image">
          <div className="container ">
            <div className="row">
              {loading ? (
                <p>Loading...</p>
              ) : (
                events.map((event) => {
                  // Find corresponding planner using event.id
                  const correspondingPlanner = planner.find(
                    (plannerItem) => plannerItem.id === event.id
                  );

                  return (
                    <div className="col-lg-4 col-md-6" key={event.id}>
                      <div className="single-blog-post">
                        <div className="blog-image">
                          <Link to="#">
                            <img src={event.imageName} alt={event.name} width={520} height={450} />
                          </Link>

                          <div className="post-tag">
                            <Link to="#">{event.name}</Link>
                          </div>
                        </div>

                        <div className="blog-post-content">
                        <h6 className='text-secondary'>Location: <small className='text-uppercase'> {correspondingPlanner ? correspondingPlanner.location : 'N/A'}</small></h6>
                          <span className="date"> {correspondingPlanner ? correspondingPlanner.startDateTime : 'N/A'}</span>
                          <h3><Link to="#">{event.name} </Link></h3>
                          <p> {correspondingPlanner ? correspondingPlanner.description.substring(0, 70) : 'N/A'}...</p>
                          <Link to={`/about-1/${event.id}`} className="read-more-btn">Read More <i className="icofont-double-right"></i></Link>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default EventSchedulesOne;
