import React, { useState } from 'react';
import "./signup.css";
import { httpAddNewUser } from './httpRequests';

export default function Signup() {
    const [userInfo, setUserInfo] = useState({
        fName: "",
        lName: "",
        email: "",
        password: ""
    });

    const hanadelSubmit = (e)=>{
        e.preventDefault()
        httpAddNewUser(userInfo);
    }
    const onChange = (e)=>{
        setUserInfo({...userInfo,[e.target.name]: e.target.value})
    }
    return (

        <form onSubmit={hanadelSubmit}>
            <h3>Sign Up</h3>

            <div className="mb-3">
                <label>First name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    name='fName'
                    onChange={onChange}
                />
            </div>

            <div className="mb-3">
                <label>Last name</label>
                <input type="text"
                    className="form-control"
                    placeholder="Last name"
                    name='lName'
                    onChange={onChange}
                />
            </div>

            <div className="mb-3">
                <label>Email address</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    name='email'
                    onChange={onChange}

                />
            </div>

            <div className="mb-3">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    name='password'
                    onChange={onChange}

                />
            </div>

            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    Sign Up
                </button>
            </div>
            <p className="forgot-password text-right">
                Already registered <a href="/sign-in">sign in?</a>
            </p>
        </form>

    )
}
