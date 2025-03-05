import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';  // Correct import for useNavigate
import './css/signUp.css';

function Signup() {
    const [formData, setFormdata] = useState({
        userName: '',
        Email: '',
        Phone: '',
        Password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({
        userName: '',
        Email: '',
        Phone: '',
        Password: '',
        confirmPassword: ''
    });
    const [users, setUsers] = useState([]); 

    const navigate = useNavigate();  // Initialize navigate

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
        if (!formData.Email) newErrors.Email = "Email is required";
        if (!formData.Phone) newErrors.Phone = "Phone number is required";
        if (!formData.Password) newErrors.Password = "Password is required";
        if (!formData.confirmPassword) newErrors.confirmPassword = "Confirm Password is required";

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (formData.Email && !emailRegex.test(formData.Email)) {
            newErrors.Email = "Please enter a valid email address";
        }
        if (formData.Password && formData.Password.length < 6) {
            newErrors.Password = "Password must be at least 6 characters long";
        }

        if (formData.Password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInput = (event) => {
        setFormdata({
            ...formData,
            confirmPassword: event.target.value
        });
    };

    const handleClick = () => {
        if (validateForm()) {
            console.log("Form submitted successfully");
            setUsers([
                ...users,
                { ...formData }
            ]);
            setFormdata({
                userName: '',
                Email: '',
                Phone: '',
                Password: '',
                confirmPassword: ''
            });
            localStorage.setItem('User', JSON.stringify(formData));

            console.log(users);  

            navigate('/login');  
        } else {
            console.log("Form contains errors, please fix them");
        }
    };

    return (
        <>
            <h1>Sign Up</h1>
            <div id="signup">
                <label htmlFor="userName">Username
                    <input
                        className="input"
                        name='userName'
                        type="text"
                        value={formData.userName}
                        onChange={handleChange}
                    />
                    {errors.userName && <p className="error">{errors.userName}</p>}
                </label>
                <label htmlFor="Email">E-Mail
                    <input
                        className="input"
                        name='Email'
                        type="text"
                        value={formData.Email}
                        onChange={handleChange}
                    />
                    {errors.Email && <p className="error">{errors.Email}</p>}
                </label>
                <label htmlFor="Phone">Phone
                    <input
                        className="input"
                        name='Phone'
                        type="text"
                        value={formData.Phone}
                        onChange={handleChange}
                    />
                    {errors.Phone && <p className="error">{errors.Phone}</p>}
                </label>
                <label htmlFor="Password">Set-Password
                    <input
                        className="input"
                        type="password"
                        name='Password'
                        value={formData.Password}
                        onChange={handleChange}
                    />
                    {errors.Password && <p className="error">{errors.Password}</p>}
                </label>
                <label htmlFor="Password">Re-enter-Password
                    <input
                        className="input"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleInput}
                    />
                    {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                </label>
                <button onClick={handleClick}>Sign-Up</button>
            </div>
        </>
    );
}
export default Signup;
