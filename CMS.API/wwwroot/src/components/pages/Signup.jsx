import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
const Signup =() => {
    const [state,setState] =useState( {
        title: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms: true
    });
    
        const[verify,setverify]=useState(true)
        const[msg,setMsg] = useState("");
        const onSubmit = (e) => {

            e.preventDefault();
            axios.post("https://localhost:7062/Accounts/register",state).then((res)=>{
                
                console.log(res.data.message);
                setMsg(res.data.message);
                if(res.data.message ==! "Your Email is already exist")
                {
                    setverify(false)
                }
                
            })
        }

        return (
            <section className="signup-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="signup-form">
                            <h3>Create your Account</h3>

                            <form onSubmit={onSubmit}>
                            {verify && msg==!"Your Email is already exist"? <>
                                <div className="from-group" style={{marginLeft:"7px"}}>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="title" id="inlineRadio1" value="Male" onClick={e => setState({...state, title: e.target.value })}/>
                                    <label className="form-check-label" htmlFor="inlineRadio1">Mr</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="title" id="inlineRadio2" value="Female" onClick={e => setState({...state, title: e.target.value })}/>
                                    <label className="form-check-label" htmlFor="inlineRadio2">Mrs</label>
                                </div>
                                </div>

                                <div className="form-group" style={{margin:"8px"}}>
                                    <input 
                                        type="text" 
                                        className="form-control" style={{padding:"10px", height:"45px"}}
                                        placeholder="First name" 
                                        value={state.firstName}
                                        onChange={e => setState({...state, firstName: e.target.value })}
                                    />
                                </div>

                                <div className="form-group" style={{margin:"8px"}}>
                                    <input 
                                        type="text" 
                                        className="form-control" style={{padding:"10px", height:"45px"}}
                                        placeholder="Last name" 
                                        value={state.lastName}
                                        onChange={e => setState({...state, lastName: e.target.value })}
                                    />
                                </div>

                                <div className="form-group" style={{margin:"8px"}}>
                                    <input 
                                        type="email" 
                                        className="form-control" style={{padding:"10px", height:"45px"}}
                                        placeholder="Email Address" 
                                        value={state.email}
                                        onChange={e => setState({...state, email: e.target.value })}
                                    />
                                </div>

                                <div className="form-group" style={{margin:"8px"}}>
                                    <input 
                                        type="password" 
                                        className="form-control" style={{padding:"10px", height:"45px"}}
                                        placeholder="Password" 
                                        value={state.password}
                                        onChange={e => setState({...state, password: e.target.value })}
                                    />
                                </div>
                                
                                <div className="form-group" style={{margin:"8px"}}>
                                    <input 
                                        type="password" 
                                        className="form-control" style={{padding:"10px", height:"45px"}}
                                        placeholder="confirm password" 
                                        value={state.confirmPassword}
                                        onChange={e => setState({...state, confirmPassword: e.target.value })}
                                    />
                                </div>
                                <span className='text-primary'>{msg}</span>
                                <button type="submit"  className="btn btn-primary">Signup</button>

                                <p>Already a registered user? <Link to="/login">Login!</Link></p></>
                                :<a className="btn btn-primary" href="https://gmail.com/">check your email</a>}
                                </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

 
export default Signup;