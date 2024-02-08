import React from 'react';
import { Link } from 'react-router-dom';
 
class Footer extends React.Component {
    render(){
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Venue Location</h3>
                                <span>
                                    <i className="icofont-calendar"></i> Rabat - Morocco
                                </span>

                                <p className="location">
                                    <i className="icofont-google-map"></i> Technopark, Rabat
                                </p>

                                <Link to="/contact" className="contact-authority">
                                    <i className="icofont-phone"></i> +212 672828299
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Social Connection</h3>
                                <p>Don't miss Link thing! Receive daily news You should connect social area for Any Proper Updates Anytime.</p>
                                
                                <ul className="social-links">
                                    <li>
                                        <Link to="https://twitter.com/mmc" className="twitter" target="_blank">
                                            <i className="icofont-twitter"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.linkedin.com/mmc" className="linkedin" target="_blank">
                                            <i className="icofont-linkedin"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.instagram.com/mmc" className="instagram" target="_blank">
                                            <i className="icofont-instagram"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="copyright-area">
                                <div className="logo">
                                    <Link to="/">
                                        <img src="logo.png" alt="logo" />
                                    </Link>
                                </div>
                                <ul>
                                    <li><Link to="/schedule-1">Event</Link></li>
                                    <li><Link to="/speakers-1">Speakers</Link></li>
                                    <li><Link to="#">Home</Link></li>
                                    <li><Link to="#">Terms & Conditions</Link></li>
                                </ul>
                                <p>
                                    Copyright <i className="icofont-copyright"></i> 2024 MMC. All rights reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
 
export default Footer;