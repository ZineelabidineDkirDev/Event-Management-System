import React from 'react';
import { Link } from 'react-router-dom';
import lax from 'lax.js';
import OwlCarousel from 'react-owl-carousel3';
import PlatinumSponsors from '../LaxButton/PlatinumSponsors';
import GoldSponsors from '../LaxButton/GoldSponsors';
import Footer from '../Common/Footer';
import axios from 'axios';
const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='icofont-rounded-left'></i>",
        "<i class='icofont-rounded-right'></i>"
    ],
    responsive: {
        0: {
            items:2,
        },
        768: {
            items:3,
        },
        1200: {
            items:6,
        }
    }
}
 
class Sponsor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sponsors: [],
            loading: true,
          };
       
     
        lax.setup()
   
        document.addEventListener('scroll', function(x) {
            lax.update(window.scrollY)
        }, false)
   
        lax.update(window.scrollY)
    }
 
    componentDidMount() {
        this.fetchSponsor();
      }
   
      async fetchSponsor() {
        try {
          const response = await axios.get('https://localhost:7062/api/Sponsor');
          this.setState({ sponsors: response.data, loading: false });
        } catch (error) {
          console.error('Error fetching sponsor:', error);
          this.setState({ loading: false });
        }
      }
    render(){
        const {sponsors} =this.state
        return (
            <React.Fragment>
                <div className="page-title-area item-bg2">
                    <div className="container">
                        <h1>Sponsors</h1>
                        <span>Check Who Makes This Event Possible!</span>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>Sponsors</li>
                        </ul>
                    </div>
                </div>
 
                <section className="partner-area ptb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="partner-title platinum-sponsor">
                                    <PlatinumSponsors />
                                </div>
                            </div>
 
                            <OwlCarousel
                                className="platinum-partner-slides owl-carousel owl-theme"
                                {...options}
                            >
                                {sponsors.filter(sp => sp.type === "Platinium").map((sponsor, id) => (
                                <div className="col-lg-12 col-md-12">
                                  
                                  <div className="partner-item m-1" >
                                  
                                  <a href="#" key={id}>
                                      <img src={sponsor.logoName} alt={sponsor.name} width={100} height={100}/>
                                      <h6></h6>
                                  </a>
                                  
                                 </div> 
                                       
                                    </div>
                                    ))}
               
                            </OwlCarousel>
 
                            <div className="col-lg-12">
                                <div className="border"></div>
                            </div>
 
                            <div className="col-lg-12">
                                <div className="partner-title gold-sponsor">
                                    <GoldSponsors />
                                </div>
                            </div>
 
                            <OwlCarousel
                                className="gold-partner-slides owl-carousel owl-theme"
                                {...options}
                            >
                                {sponsors.filter(sp => sp.type === "Gold").map((sponsor, id) => (
                                <div className="col-lg-12 col-md-12">
                                  
                                  <div className="partner-item m-1" >
                                  
                                  <a href="#" key={id}>
                                      <img src={sponsor.logoName} alt={sponsor.name} width={100} height={100}/>
                                      <h6></h6>
                                  </a>
                                  
                                 </div> 
                                       
                                    </div>
                                    ))}
               
                            </OwlCarousel>
                        </div>
                    </div>
                </section>
                <Footer />
            </React.Fragment>
        );
    }
}
 
export default Sponsor;