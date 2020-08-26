import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Layout from '../core/Layout';
import axios from 'axios';
import { isAuth } from './helpers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import './Signup.css';

const Signup = ({history}) => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        number: '',
        password: '',
        buttonText: 'Submit'
    });

    const { name, email, number, password, buttonText } = values;

    const handleChange = name => event => {
        // console.log(event.target.value);
        setValues({ ...values, [name]: event.target.value });
    };

    const signIn = () =>{
        history.push('/signin');
    }

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, buttonText: 'Submitting' });
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/signup`,
            data: { name, email, number, password }
        })
            .then(response => {
                console.log('SIGNUP SUCCESS', response);
                setValues({ ...values, name: '', email: '', number:'', password: '', buttonText: 'Submitted' });
                toast.success(response.data.message);
            })
            .catch(error => {
                // console.log('SIGNUP ERROR', error.response.data);
                setValues({ ...values, buttonText: 'Submit' });
                toast.error(error.response.data.error);
            });
    };

    const signupForm = () => (
        <div className = "signup">
        <div className="signup__container">
        <h1>Sign Up</h1>
        <form>
            <h5>Name</h5>
            <input onChange={handleChange('name')} value={name} type="text" className="form-control" />

            <h5>Email</h5>
            <input onChange={handleChange('email')} value={email} type="email" className="form-control" />

            <h5>Phone Number</h5>
            <input onChange={handleChange('number')} value={number} type="text" className="form-control" />

            <h5>Password</h5>
                <input onChange={handleChange('password')} value={password} type="password" className="form-control" />

                <button className="btn signup__registerButton" onClick={clickSubmit}>
                    {buttonText}
                </button>
                 <p>
                Already have an account with us? Please Sign-in!!
                </p>
            <button onClick = {signIn} className="signup__signInButton">Sign In</button>
        </form>
        </div>
        </div>
    );

    return (
        <Layout>
            <div className="col-md-6 offset-md-3">
                <ToastContainer />
                {isAuth() ? <Redirect to="/" /> : null}
                {signupForm()}
                <br />
            </div>
        </Layout>
    );
};

export default Signup;