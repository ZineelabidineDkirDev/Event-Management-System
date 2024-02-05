import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
class Signup extends React.Component {
    state = {
        title: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms: true
    };

    onSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5164/Accounts/register",this.state).then((res)=>{
            console.log(res.data.message)
        })
    }
    render(){
        return (
            <section className="signup-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="signup-form">
                            <h3>Create your Account</h3>

                            <form onSubmit={this.onSubmit}>

                                <div className="from-group" style={{marginLeft:"7px"}}>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="title" id="inlineRadio1" value="Male" onClick={e => this.setState({ title: e.target.value })}/>
                                    <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="title" id="inlineRadio2" value="Female" onClick={e => this.setState({ title: e.target.value })}/>
                                    <label className="form-check-label" htmlFor="inlineRadio2">female</label>
                                </div>
                                </div>

                                <div className="form-group" style={{margin:"8px"}}>
                                    <input 
                                        type="text" 
                                        className="form-control" style={{padding:"10px", height:"45px"}}
                                        placeholder="First name" 
                                        value={this.state.firstName}
                                        onChange={e => this.setState({ firstName: e.target.value })}
                                    />
                                </div>

                                <div className="form-group" style={{margin:"8px"}}>
                                    <input 
                                        type="text" 
                                        className="form-control" style={{padding:"10px", height:"45px"}}
                                        placeholder="Last name" 
                                        value={this.state.lastName}
                                        onChange={e => this.setState({ lastName: e.target.value })}
                                    />
                                </div>

                                <div className="form-group" style={{margin:"8px"}}>
                                    <input 
                                        type="email" 
                                        className="form-control" style={{padding:"10px", height:"45px"}}
                                        placeholder="Email Address" 
                                        value={this.state.email}
                                        onChange={e => this.setState({ email: e.target.value })}
                                    />
                                </div>

                                <div className="form-group" style={{margin:"8px"}}>
                                    <input 
                                        type="password" 
                                        className="form-control" style={{padding:"10px", height:"45px"}}
                                        placeholder="Password" 
                                        value={this.state.password}
                                        onChange={e => this.setState({ password: e.target.value })}
                                    />
                                </div>
                                
                                <div className="form-group" style={{margin:"8px"}}>
                                    <input 
                                        type="password" 
                                        className="form-control" style={{padding:"10px", height:"45px"}}
                                        placeholder="confirm password" 
                                        value={this.state.confirmPassword}
                                        onChange={e => this.setState({ confirmPassword: e.target.value })}
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary">Signup</button>

                                <p>Already a registered user? <Link to="/login">Login!</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Signup;