import React, { useEffect, useState } from 'react';
import { Link, useHistory, Redirect } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [state, setState] = useState({
        email: "",
        password: "",
        loggedIn: false
    });
    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post("https://localhost:7062/Accounts/authenticate", state)
            .then((res) => {
                console.log(res.data);
                localStorage.setItem('user-data', res.data.email);
                localStorage.setItem('user-fname', res.data.firstName);
                localStorage.setItem('user-lname', res.data.lastName);
                // Redirection vers la page /home si l'authentification réussit
                history.push('/');
                window.location.reload()
            })
            .catch(error => {
                console.error("Erreur lors de l'authentification :", error);
                // Gérer les erreurs d'authentification ici
            });
    };

    useEffect(() => {
        if (state.loggedIn) {
            return <Redirect to="/" />;
        }
    }, [state.loggedIn]);

    return (
        <section className="login-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="login-form">
                        <h3>Welcome Back!</h3>

                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email Address"
                                    value={state.email}
                                    onChange={e => setState({ ...state, email: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    value={state.password}
                                    onChange={e => setState({ ...state, password: e.target.value })}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">Login</button>

                            <p>
                                <Link to="/signup" className="pull-left">Create a new account</Link>

                                <Link to="#" className="pull-right">Forgot your password?</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
