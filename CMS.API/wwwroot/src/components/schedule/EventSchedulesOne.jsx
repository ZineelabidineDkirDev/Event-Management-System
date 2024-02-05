import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

 
class EventSchedulesOne extends Component {
        constructor(props) {
          super(props);
          this.state = {
            events: [],
            loading: true,
          };
        }
    // openTabSection = (evt, tabNmae) => {
    //     let i, tabcontent, tablinks;
    //     tabcontent = document.getElementsByClassName("tabs_item");
    //     for (i = 0; i < tabcontent.length; i++) {
    //         tabcontent[i].style.display = "none";
    //     }

    //     tablinks = document.getElementsByTagName("li");
    //     for (i = 0; i < tablinks.length; i++) {
    //         tablinks[i].className = tablinks[i].className.replace("current", "");
    //     }

    //     document.getElementById(tabNmae).style.display = "block";
    //     evt.currentTarget.className += "current";
    // }
    async componentDidMount() {
        try {
          const response = await axios.get('https://localhost:7062/api/Event');
          this.setState({ events: response.data, loading: false });
        } catch (error) {
          console.error('Error fetching events:', error);
          this.setState({ loading: false });
        }
      }
      async componentDidMount2() {
        try {
          const response = await axios.get('https://localhost:7062/api/Planner');
          this.setState({ events: response.data, loading: false });
        } catch (error) {
          console.error('Error fetching events:', error);
          this.setState({ loading: false });
        }
      }
    render(){
        const { events, loading } = this.state;
        console.log(events);
        return (
            <>
            {/* <section className="schedule-area bg-image ptb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tab">
                                <ul className="tabs active">
                                    <li
                                        onClick={(e) => this.openTabSection(e, 'tab1')}
                                        className="current"
                                    >
                                        <Link to="#">
                                            First Day
                                            <span>4 April 2020</span>
                                        </Link>
                                    </li>

                                    <li onClick={(e) => this.openTabSection(e, 'tab2')}>
                                        <Link to="#">
                                            Second Day
                                            <span>5 April 2020</span>
                                        </Link>
                                    </li>

                                    <li onClick={(e) => this.openTabSection(e, 'tab3')}>
                                        <Link to="#">
                                            Third Day
                                            <span>6 April 2020</span>
                                        </Link>
                                    </li>

                                    <li onClick={(e) => this.openTabSection(e, 'tab4')}>
                                        <Link to="#">
                                            Fourth Day
                                            <span>7 April 2020</span>
                                        </Link> 
                                    </li>
                                </ul>

                                <div className="tab_content">
                                    <div id="tab1" className="tabs_item">
                                        <ul className="accordion">
                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                    <div className="author">
                                                        <img 
                                                            src={require("../../assets/images/author1.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Steven Smith" 
                                                            alt="Author" 
                                                        />
                                                    </div>
                                                    
                                                    <div className="schedule-info">
                                                        <h3>Digital Marketing Theory</h3>

                                                        <ul>
                                                            <li><i className="icofont-user-suited"></i> By <span>Riley</span> CEO of EnvyTheme</li>
                                                            <li><i className="icofont-wall-clock"></i> 13:00AM - 20:00PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                                
                                                <div className="accordion-content">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book.</p>

                                                    <div className="row h-100 align-items-center">
                                                        <div className="col-lg-6 col-md-7">
                                                            <div className="location">
                                                                <b>Location:</b> Hall 1, Building C , King Street , <span>USA</span>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6 col-md-5 text-right">
                                                            <Link to="#" className="btn btn-primary">View Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                    <div className="author author-multi">
                                                        <img 
                                                            src={require("../../assets/images/author5.jpg")} 
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Steven Lucy" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author2.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Jonaton Smith" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author3.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="John Smith" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author4.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="John Doe" 
                                                            alt="Author"
                                                        />
                                                    </div>
                                                    
                                                    <div className="schedule-info">
                                                        <h3>Digital World Event Information</h3>

                                                        <ul>
                                                            <li><i className="icofont-user-suited"></i> By <span>EnvyTheme Team</span> of USA Inc</li>
                                                            <li><i className="icofont-wall-clock"></i> 13:00AM - 20:00PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                                
                                                <div className="accordion-content">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book.</p>

                                                    <div className="row h-100 align-items-center">
                                                        <div className="col-lg-6 col-md-7">
                                                            <div className="location">
                                                                <b>Location:</b> Hall 1, Building C , King Street , <span>USA</span>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6 col-md-5 text-right">
                                                            <Link to="#" className="btn btn-primary">View Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                    <div className="author author-multi">
                                                        <img 
                                                            src={require("../../assets/images/author6.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Steven Lucy" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author7.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Jonaton Smith" 
                                                            alt="Author"
                                                        />
                                                    </div>
                                                    
                                                    <div className="schedule-info">
                                                        <h3>HTML, CSS and Bootstrap Introduction</h3>

                                                        <ul>
                                                            <li><i className="icofont-user-suited"></i> By <span>EnvyTheme Team</span> of USA Inc</li>
                                                            <li><i className="icofont-wall-clock"></i> 13:00AM - 20:00PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                                
                                                <div className="accordion-content">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book.</p>

                                                    <div className="row h-100 align-items-center">
                                                        <div className="col-lg-6 col-md-7">
                                                            <div className="location">
                                                                <b>Location:</b> Hall 1, Building C , King Street , <span>USA</span>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6 col-md-5 text-right">
                                                            <Link to="#" className="btn btn-primary">View Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                    <div className="author author-multi">
                                                        <img 
                                                            src={require("../../assets/images/author8.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Steven Lucy" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author9.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Jonaton Smith" 
                                                            alt="Author" 
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author3.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="John Smith" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author4.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="John Doe" 
                                                            alt="Author"
                                                        />
                                                    </div>
                                                    
                                                    <div className="schedule-info">
                                                        <h3>Digital World Event Information</h3>

                                                        <ul>
                                                            <li><i className="icofont-user-suited"></i> By <span>EnvyTheme Team</span> of USA Inc</li>
                                                            <li><i className="icofont-wall-clock"></i> 13:00AM - 20:00PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                                
                                                <div className="accordion-content">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book.</p>

                                                    <div className="row h-100 align-items-center">
                                                        <div className="col-lg-6 col-md-7">
                                                            <div className="location">
                                                                <b>Location:</b> Hall 1, Building C , King Street , <span>USA</span>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6 col-md-5 text-right">
                                                            <Link to="#" className="btn btn-primary">View Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>	
                                    </div>

                                    <div id="tab2" className="tabs_item">
                                        <ul className="accordion">
                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                    <div className="author">
                                                        <img 
                                                            src={require("../../assets/images/author1.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Steven Smith" 
                                                            alt="Author"
                                                        />
                                                    </div>
                                                    
                                                    <div className="schedule-info">
                                                        <h3>Digital Marketing Theory</h3>

                                                        <ul>
                                                            <li><i className="icofont-user-suited"></i> By <span>Gilbert</span> CEO of EnvyTheme</li>
                                                            <li><i className="icofont-wall-clock"></i> 13:00AM - 20:00PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                                
                                                <div className="accordion-content">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book.</p>

                                                    <div className="row h-100 align-items-center">
                                                        <div className="col-lg-6 col-md-7">
                                                            <div className="location">
                                                                <b>Location:</b> Hall 1, Building C , King Street , <span>USA</span>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6 col-md-5 text-right">
                                                            <Link to="#" className="btn btn-primary">View Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                    <div className="author author-multi">
                                                        <img 
                                                            src={require("../../assets/images/author5.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Steven Lucy" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author2.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Jonaton Smith" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author3.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="John Smith" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author4.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="John Doe" 
                                                            alt="Author"
                                                        />
                                                    </div>
                                                    
                                                    <div className="schedule-info">
                                                        <h3>Digital World Event Information</h3>

                                                        <ul>
                                                            <li><i className="icofont-user-suited"></i> By <span>EnvyTheme Team</span> of USA Inc</li>
                                                            <li><i className="icofont-wall-clock"></i> 13:00AM - 20:00PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                                
                                                <div className="accordion-content">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book.</p>

                                                    <div className="row h-100 align-items-center">
                                                        <div className="col-lg-6 col-md-7">
                                                            <div className="location">
                                                                <b>Location:</b> Hall 1, Building C , King Street , <span>USA</span>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6 col-md-5 text-right">
                                                            <Link to="#" className="btn btn-primary">View Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                    <div className="author author-multi">
                                                        <img 
                                                            src={require("../../assets/images/author6.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Steven Lucy" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author7.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Jonaton Smith" 
                                                            alt="Author"
                                                        />
                                                    </div>
                                                    
                                                    <div className="schedule-info">
                                                        <h3>HTML, CSS and Bootstrap Introduction</h3>

                                                        <ul>
                                                            <li><i className="icofont-user-suited"></i> By <span>EnvyTheme Team</span> of USA Inc</li>
                                                            <li><i className="icofont-wall-clock"></i> 13:00AM - 20:00PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                                
                                                <div className="accordion-content">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book.</p>

                                                    <div className="row h-100 align-items-center">
                                                        <div className="col-lg-6 col-md-7">
                                                            <div className="location">
                                                                <b>Location:</b> Hall 1, Building C , King Street , <span>USA</span>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6 col-md-5 text-right">
                                                            <Link to="#" className="btn btn-primary">View Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>	
                                    </div>

                                    <div id="tab3" className="tabs_item">
                                        <ul className="accordion">
                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                    <div className="author">
                                                        <img 
                                                            src={require("../../assets/images/author1.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Steven Smith" 
                                                            alt="Author"
                                                        />
                                                    </div>
                                                    
                                                    <div className="schedule-info">
                                                        <h3>Digital Marketing Theory</h3>

                                                        <ul>
                                                            <li><i className="icofont-user-suited"></i> By <span>Brian</span> CEO of EnvyTheme</li>
                                                            <li><i className="icofont-wall-clock"></i> 13:00AM - 20:00PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                                
                                                <div className="accordion-content">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book.</p>

                                                    <div className="row h-100 align-items-center">
                                                        <div className="col-lg-6 col-md-7">
                                                            <div className="location">
                                                                <b>Location:</b> Hall 1, Building C , King Street , <span>USA</span>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6 col-md-5 text-right">
                                                            <Link to="#" className="btn btn-primary">View Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                    <div className="author author-multi">
                                                        <img 
                                                            src={require("../../assets/images/author5.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Steven Lucy" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author2.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Jonaton Smith" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author3.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="John Smith" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author4.jpg")} 
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="John Doe" 
                                                            alt="Author"
                                                        />
                                                    </div>
                                                    
                                                    <div className="schedule-info">
                                                        <h3>Digital World Event Information</h3>

                                                        <ul>
                                                            <li><i className="icofont-user-suited"></i> By <span>EnvyTheme Team</span> of USA Inc</li>
                                                            <li><i className="icofont-wall-clock"></i> 13:00AM - 20:00PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                                
                                                <div className="accordion-content">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book.</p>

                                                    <div className="row h-100 align-items-center">
                                                        <div className="col-lg-6 col-md-7">
                                                            <div className="location">
                                                                <b>Location:</b> Hall 1, Building C , King Street , <span>USA</span>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6 col-md-5 text-right">
                                                            <Link to="#" className="btn btn-primary">View Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                    <div className="author author-multi">
                                                        <img 
                                                            src={require("../../assets/images/author6.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Steven Lucy" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author7.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Jonaton Smith" 
                                                            alt="Author"
                                                        />
                                                    </div>
                                                    
                                                    <div className="schedule-info">
                                                        <h3>HTML, CSS and Bootstrap Introduction</h3>

                                                        <ul>
                                                            <li><i className="icofont-user-suited"></i> By <span>EnvyTheme Team</span> of USA Inc</li>
                                                            <li><i className="icofont-wall-clock"></i> 13:00AM - 20:00PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                                
                                                <div className="accordion-content">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book.</p>

                                                    <div className="row h-100 align-items-center">
                                                        <div className="col-lg-6 col-md-7">
                                                            <div className="location">
                                                                <b>Location:</b> Hall 1, Building C , King Street , <span>USA</span>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6 col-md-5 text-right">
                                                            <Link to="#" className="btn btn-primary">View Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                    <div className="author author-multi">
                                                        <img 
                                                            src={require("../../assets/images/author8.jpg")} 
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Steven Lucy" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author9.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Jonaton Smith" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author3.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="John Smith" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author4.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="John Doe" 
                                                            alt="Author"
                                                        />
                                                    </div>
                                                    
                                                    <div className="schedule-info">
                                                        <h3>Digital World Event Information</h3>

                                                        <ul>
                                                            <li><i className="icofont-user-suited"></i> By <span>EnvyTheme Team</span> of USA Inc</li>
                                                            <li><i className="icofont-wall-clock"></i> 13:00AM - 20:00PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                                
                                                <div className="accordion-content">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book.</p>

                                                    <div className="row h-100 align-items-center">
                                                        <div className="col-lg-6 col-md-7">
                                                            <div className="location">
                                                                <b>Location:</b> Hall 1, Building C , King Street , <span>USA</span>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6 col-md-5 text-right">
                                                            <Link to="#" className="btn btn-primary">View Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>	
                                    </div>

                                    <div id="tab4" className="tabs_item">
                                        <ul className="accordion">
                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                    <div className="author">
                                                        <img 
                                                            src={require("../../assets/images/author1.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Steven Smith" 
                                                            alt="Author"
                                                        />
                                                    </div>
                                                    
                                                    <div className="schedule-info">
                                                        <h3>Digital Marketing Theory</h3>

                                                        <ul>
                                                            <li><i className="icofont-user-suited"></i> By <span>Roberto</span> CEO of EnvyTheme</li>
                                                            <li><i className="icofont-wall-clock"></i> 13:00AM - 20:00PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                                
                                                <div className="accordion-content">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book.</p>

                                                    <div className="row h-100 align-items-center">
                                                        <div className="col-lg-6 col-md-7">
                                                            <div className="location">
                                                                <b>Location:</b> Hall 1, Building C , King Street , <span>USA</span>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6 col-md-5 text-right">
                                                            <Link to="#" className="btn btn-primary">View Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                    <div className="author author-multi">
                                                        <img 
                                                            src={require("../../assets/images/author5.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Steven Lucy" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author2.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Jonaton Smith" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author3.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="John Smith" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author4.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="John Doe" 
                                                            alt="Author"
                                                        />
                                                    </div>
                                                    
                                                    <div className="schedule-info">
                                                        <h3>Digital World Event Information</h3>

                                                        <ul>
                                                            <li><i className="icofont-user-suited"></i> By <span>EnvyTheme Team</span> of USA Inc</li>
                                                            <li><i className="icofont-wall-clock"></i> 13:00AM - 20:00PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                                
                                                <div className="accordion-content">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book.</p>

                                                    <div className="row h-100 align-items-center">
                                                        <div className="col-lg-6 col-md-7">
                                                            <div className="location">
                                                                <b>Location:</b> Hall 1, Building C , King Street , <span>USA</span>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6 col-md-5 text-right">
                                                            <Link to="#" className="btn btn-primary">View Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                    <div className="author author-multi">
                                                        <img 
                                                            src={require("../../assets/images/author6.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Steven Lucy" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author7.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Jonaton Smith" 
                                                            alt="Author"
                                                        />
                                                    </div>
                                                    
                                                    <div className="schedule-info">
                                                        <h3>HTML, CSS and Bootstrap Introduction</h3>

                                                        <ul>
                                                            <li><i className="icofont-user-suited"></i> By <span>EnvyTheme Team</span> of USA Inc</li>
                                                            <li><i className="icofont-wall-clock"></i> 13:00AM - 20:00PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                                
                                                <div className="accordion-content">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book.</p>

                                                    <div className="row h-100 align-items-center">
                                                        <div className="col-lg-6 col-md-7">
                                                            <div className="location">
                                                                <b>Location:</b> Hall 1, Building C , King Street , <span>USA</span>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6 col-md-5 text-right">
                                                            <Link to="#" className="btn btn-primary">View Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                    <div className="author author-multi">
                                                        <img 
                                                            src={require("../../assets/images/author8.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Steven Lucy" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author9.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="Jonaton Smith" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author3.jpg")}
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="John Smith" 
                                                            alt="Author"
                                                        />
                                                        <img 
                                                            src={require("../../assets/images/author4.jpg")} 
                                                            data-toggle="tooltip" 
                                                            data-placement="top" 
                                                            title="John Doe" 
                                                            alt="Author"
                                                        />
                                                    </div>
                                                    
                                                    <div className="schedule-info">
                                                        <h3>Digital World Event Information</h3>

                                                        <ul>
                                                            <li><i className="icofont-user-suited"></i> By <span>EnvyTheme Team</span> of USA Inc</li>
                                                            <li><i className="icofont-wall-clock"></i> 13:00AM - 20:00PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                                
                                                <div className="accordion-content">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book.</p>

                                                    <div className="row h-100 align-items-center">
                                                        <div className="col-lg-6 col-md-7">
                                                            <div className="location">
                                                                <b>Location:</b> Hall 1, Building C , King Street , <span>USA</span>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6 col-md-5 text-right">
                                                            <Link to="#" className="btn btn-primary">View Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>	
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="btn-box">
                                <Link to="#" className="btn btn-primary">Download Schedule (PDF)</Link>
                                <Link to="#" className="btn btn-secondary">Connect Via Instagram</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shape1"><img src={require("../../assets/images/shapes/1.png")} alt="shape1" /></div>
                <div className="shape2 rotateme"><img src={require("../../assets/images/shapes/2.png")} alt="shape2" /></div>
                <div className="shape3 rotateme"><img src={require("../../assets/images/shapes/3.png")} alt="shape3" /></div>
                <div className="shape4"><img src={require("../../assets/images/shapes/4.png")} alt="shape4" /></div>
            </section>
             */}
            
            <section className="blog-area ptb-120 bg-image">
                    <div className="container">
                    {loading ? (
            <p>Loading...</p>
          ) : (
            events.map((event) => (
                        <div className="row" key={event.id}>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">
                                    <div className="blog-image">
                                        <Link to="#">
                                        <img src={event.imageName} alt={event.name} width={520} height={550} />
                                        </Link>

                                        <div className="post-tag">
                                            <Link to="#">
                                                {event.name}
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="blog-post-content">
                                        <span className="date">25 Feb, 2020</span>
                                        <h3><Link to="#">How To Setup Redux In React Next Application</Link></h3>
                                        <p>{event.description}</p>
                                        <Link to="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></Link>
                                    </div>
                                </div>
                            </div>

                        </div>
            )))}
                    </div>
                </section>
            </>
            
        );
    }
}
 
export default EventSchedulesOne;