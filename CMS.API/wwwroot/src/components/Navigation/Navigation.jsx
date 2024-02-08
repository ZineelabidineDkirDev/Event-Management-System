import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { FaDoorClosed, FaKey, FaKeycdn, FaUser } from 'react-icons/fa6';
import { Link, withRouter, NavLink ,Redirect } from 'react-router-dom';
// import logo from '../../assets/images/logo.png';
 
class Navigation extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
        collapsed: true,
        isOpen: false,
        username: '',
        loggedOut:false
    };
};

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
                window.history.pushState("", document.title, window.location.pathname);
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }

    componentDidMount() {
        const userData = localStorage.getItem('user-fname','user-lname');
        if (userData) {
            this.setState({ username: userData });
        }

    }

    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

    componentDidUpdate(nextProps) {
        if (this.props.match.path !== nextProps.match.path) {
            console.log('OK')
        }

    }

    logout = () => {
        localStorage.removeItem('user-fname');
        localStorage.removeItem('user-lname');
        this.setState({ loggedOut: true });
    }

    onRouteChanged = () => {
        this.setState({ isOpen: !this.state.isOpen });
        
    }

    

    render(){
        const { loggedOut } = this.state;
        if (loggedOut) {
            window.location.reload()
            return <Redirect to="/" />;
        }
        const { collapsed } = this.state;
        const { username } = this.state;
        const Sign=()=>{
            if(username.length>0){
                                return           <ul className="navbar-nav ms-auto">
                                            <li className="{menuClass} nav-item">
                                                <Link 
                                                    exact="true" 
                                                    to="#" 
                                                    className="nav-link text-white"
                                                    onClick={this.toggleOpen}
                                                >
                                                    <FaUserCircle style={{fontSize:'1.5em'}}/> HI : {username}
                                                </Link>
                                            
                                                    <ul className={`${menuClass} text-black`} style={{backgroundColor:'#1A223E'}}>
                                                        <li className="nav-item">
                                                            <NavLink 
                                                                exact
                                                                to="/profile" 
                                                                className="nav-link" 
                                                                onClick={this.toggleNavbar}
                                                            >
                                                                Profile
                                                            </NavLink>
                                                        </li>
                                                        <li className="nav-item">
                                                            <NavLink 
                                                                to="/event-history" 
                                                                className="nav-link" 
                                                                onClick={this.toggleNavbar}
                                                            >
                                                                Event History
                                                            </NavLink>
                                                        </li>
                                                        <li className="nav-item">
                                                            <NavLink 
                                                                to="#" 
                                                                className="nav-link" 
                                                                onClick={this.logout}
                                                            >
                                                               <FaKey/> LogOut
                                                            </NavLink>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            
             } else {
                     return                       <ul className="navbar-nav ms-auto">
                                            <li>
                                                <NavLink to="/login" className="btn btn-primary">
                                                    Login
                                                </NavLink> 
                                            </li>
                                            </ul>
             }
        }
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
        return (
            <header id="header" className="header-area">
                <div id="navbar" className="elkevent-nav">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <div className="container">
                            <Link className="navbar-brand" to="/">
                                <img src="logo.png" style={{scale:"0.7",borderRadius:"5PX"}} alt="logo" />
                            </Link>

                            <button 
                                onClick={this.toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" 
                                aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className={classOne}  id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <Link 
                                            exact="true" 
                                            to="/" 
                                            onClick={this.toggleOpen} 
                                            className="nav-link"
                                        >
                                            Home
                                        </Link>

                                    </li>
                                    
                                    

                                    <li className="{menuClass} nav-item">
                                        <Link 
                                            to="/speakers-1" 
                                            className="nav-link"
                                            onClick={this.toggleOpen}
                                        >
                                            Speakers
                                        </Link>
                                        
                                    </li>

                                    <li className="nav-item">
                                        <Link 
                                            to="/schedule-1" 
                                            className="nav-link"
                                            onClick={this.toggleOpen}
                                        >
                                            Events
                                        </Link>
                                        
                                    </li>

                                    <li className="nav-item">
                                        <NavLink 
                                            to="/sponsors" 
                                            className="nav-link" 
                                            onClick={this.toggleNavbar}
                                        >
                                            Sponsor
                                        </NavLink>
                                    </li>



                                    <li className="nav-item">
                                        <NavLink 
                                            to="/contact" 
                                            className="nav-link" 
                                            onClick={this.toggleNavbar}
                                        >
                                            Contact
                                        </NavLink>
                                    </li>
                                </ul>

                                <div className="others-option">
                                            <Sign/>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}
 
export default withRouter(Navigation);