import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; 
import './css/signUp.css';

function Login({ setIsAuthenticated }) {
    const [formData, setFormdata] = useState({
        userName: '',
        Password: ''
    });
    const [errors, setErrors] = useState({
        userName: '',
        Password: ''
    });
    const navigate = useNavigate(); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.userName) newErrors.userName = "Username is required";
        if (!formData.Password) newErrors.Password = "Password is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleLogin = () => {
        if (validateForm()) {
            const savedUser = JSON.parse(localStorage.getItem('User'));

            if (savedUser && savedUser.userName === formData.userName && savedUser.Password === formData.Password) {
                console.log("Login successful");
                setIsAuthenticated(true);  // Set the authentication state
                navigate('/dashboard'); 
            } else {
                // If the credentials don't match
                setErrors({
                    userName: "Invalid username",
                    Password: "Invalid password"
                });
            }
        }
    };

    const handleSignUp = () => {
        navigate('/signup');
    };

    return (
        <>
            <h1>Login</h1>
            <div id="login">
                <label htmlFor="userName">Username
                    <input
                        className="input"
                        name="userName"
                        type="text"
                        value={formData.userName}
                        onChange={handleChange}
                    />
                    {errors.userName && <p className="error">{errors.userName}</p>}
                </label>
                <label htmlFor="Password">Password
                    <input
                        className="input"
                        type="password"
                        name="Password"
                        value={formData.Password}
                        onChange={handleChange}
                    />
                    {errors.Password && <p className="error">{errors.Password}</p>}
                </label>
                <button onClick={handleLogin}>Login</button>
                <button onClick={handleSignUp}>Back to Sign Up</button>
            </div>
        </>
    );
}

export default Login;
