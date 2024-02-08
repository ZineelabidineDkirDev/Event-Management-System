import React, { Component, useState } from 'react';
import { Link, Redirect } from 'react-router-dom'; // Ajout de Redirect
import axios from 'axios';

class EventSchedulesOne extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      planner: [],
      eventCategories: [],
      categories: [],
      loading: true,
      currentDate: new Date(),
      showButton: false, // Initialisé à false car on le définira en fonction des données chargées
      bookedEvent: null,
      redirect:''
    };
  }

  async componentDidMount() {
    try {
      const [
        eventsResponse,
        plannerResponse,
        eventCategoriesResponse,
        categoriesResponse,
      ] = await Promise.all([
        axios.get('https://localhost:7062/api/Event'),
        axios.get('https://localhost:7062/api/Planner/Planners'),
        axios.get('https://localhost:7062/api/EventCategory'),
        axios.get('https://localhost:7062/api/Category'),
      ]);

      this.setState({
        events: eventsResponse.data,
        planner: plannerResponse.data,
        eventCategories: eventCategoriesResponse.data,
        categories: categoriesResponse.data,
        loading: false,
      });

      const systemDate = new Date();
      const showButton = this.state.planner.some(plannerItem =>
        new Date(plannerItem.endDateTime) > systemDate // Modifié ici pour vérifier si la date du planner est supérieure à la date système
      );
      this.setState({ showButton });

    } catch (error) {
      console.error('Error fetching data:', error);
      this.setState({ loading: false });
    }
    
  }


  getCategoryName(eventId) {
    const eventCategory = this.state.eventCategories.find(
      (eventCategoryItem) => eventCategoryItem.eventId === eventId
    );

    if (eventCategory) {
      const category = this.state.categories.find(
        (categoryItem) => categoryItem.id === eventCategory.categoryId
      );

      return category ? category.name : 'N/A';
    }

    return 'N/A';
  }

  // Fonction pour réserver un événement
  bookEvent = (event) => {
    const correspondingPlanner = this.state.planner.find(plannerItem => plannerItem.id === event.id);
    const plannerId = correspondingPlanner ? correspondingPlanner.id : null;
    this.setState({ bookedEvent: { ...event, plannerId } });
    // Rediriger vers la page EventHistory avec l'ID du planner en tant que paramètre
    this.setState({ redirect: true, plannerId: plannerId });
    
  }
  
  render() {
    const Img=({id})=>{
      const [img,setimg]=useState("");
      axios.get(`https://localhost:7062/api/Event/${id}`).then((res)=>{
        setimg(res.data.imageName)
    })
      return <img src={img} alt={"eventimage"} width={520} height={350} />
  }
    const Name=({id})=>{
      const [name,setname]=useState("");
      axios.get(`https://localhost:7062/api/Event/${id}`).then((res)=>{
        setname(res.data.name)
    })
    console.log(name)
      return <>{name}</>
  }
    const { events, loading, planner, showButton, bookedEvent ,redirect} = this.state;

    return (
      
      <>
        <section className="blog-area ptb-120 bg-image">
          <div className="container">
            <div className="row">
              {loading ? (
                <p>Loading...</p>
              ) : (
                planner.map((event) => {
                  const correspondingPlanner = planner.find(
                    (plannerItem) => plannerItem.id === event.id
                  );

                  return (
                    <div className="col-lg-4 col-md-6" key={event.id}>
                      <div className="single-blog-post">
                        <div className="blog-image">
                          <Link to="#">
                            <Img id={event.id}/>
                          </Link>

                          <div className="post-tag">
                            <Link to={`/event-detail/${event.id}`}>
                              {this.getCategoryName(event.id)}
                            </Link>
                          </div>
                        </div>

                        <div className="blog-post-content">
                          <h6 className='text-secondary'>
                            Location: <small className='text-uppercase'>
                              {correspondingPlanner ? correspondingPlanner.location : 'N/A'}
                            </small>
                          </h6>
                          <span className="date">
                            {correspondingPlanner ? correspondingPlanner.startDateTime.substring(0, 10) : 'N/A'}
                          </span>
                          <h3><Link to={`/event-detail/${event.id}`}><Name id={event.id}/></Link></h3>
                          <p>{correspondingPlanner ? correspondingPlanner.description.substring(0, 70) : 'N/A'}...</p>
                          <Link  className="read-more-btn" to={`/event-detail/${event.id}`}>
                            Read More <i className="icofont-double-right"></i>
                          </Link>
                          <br />
                          { showButton && (
                            <Link to="/event-history" onClick={() =>{
                              localStorage.setItem('reserved',JSON.stringify(event))
                            }} 
                            className="bg-success px-3 py-2 text-white rounded justify-between-center reverse w-5" style={{marginLeft:'60%'}}>
                              Book event
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </section>

        {/* Affichage de l'événement réservé */}
        
          {redirect && <Redirect to={`/event-history/${this.state.plannerId}`} />}
        
      </>
    );
  }
}

export default EventSchedulesOne;
