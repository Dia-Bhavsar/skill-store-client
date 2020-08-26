import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Layout from '../core/Layout';
import axios from 'axios';
import { authenticate, isAuth } from './helpers';
import { ToastContainer, toast } from 'react-toastify';
import Google from './Google';
import 'react-toastify/dist/ReactToastify.min.css';
import './Signin.css';

const Signin = ({ history }) => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        buttonText: 'Submit'
    });

    const SignUp = () =>{
        history.push('/signup')
    }

    const { email, password, buttonText } = values;

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const informParent = response => {
        authenticate(response, () => {
            isAuth() ? history.push('/') : history.push('/signin');
        });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, buttonText: 'Submitting' });
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/signin`,
            data: { email, password }
        })
            .then(response => {
                console.log('SIGNIN SUCCESS', response);
                // save the response (user, token) localstorage/cookie
                authenticate(response, () => {
                    setValues({ ...values, name: '', email: '', password: '', buttonText: 'Submitted' });
                    toast.success(`Hey ${response.data.user.name}, Welcome back!`);
                    // isAuth() && isAuth().role === 'admin' ? history.push('/admin') : history.push('/private');
                });
            })
            .catch(error => {
                console.log('SIGNIN ERROR', error.response.data);
                setValues({ ...values, buttonText: 'Submit' });
                toast.error(error.response.data.error);
            });
    };

    const signinForm = () => (
        <div className = "signin">
            <div className="signin__container">
            <h1>Sign In</h1>
            <form>
                <h5>E-mail</h5>
                <input onChange={handleChange('email')} value={email} type="email" className="form-control" />
                <h5>Password</h5>
                <input onChange={handleChange('password')} value={password} type="password" className="form-control" />
                <button onClick={clickSubmit} className="signin__signInButton">Sign In</button>
            </form>
            <p>
                By signing-in you agree to Amazon's Conditions of Use &amp; Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>
            <button onClick = {SignUp}  className="signin__registerButton">Create your Skill Store Account</button>
            <Google informParent={informParent} />
        </div>
        </div>
        
    );

    return (
        <Layout>
            <div className="col-md-6 offset-md-3">
                <ToastContainer />
                {isAuth() ? <Redirect to="/" /> : null}
                {signinForm()}
            </div>
        </Layout>
    );
};

export default Signin;
