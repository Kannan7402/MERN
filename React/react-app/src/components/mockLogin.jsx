import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function MockLogin() {
    const [user, setUser] = useState('');
    const [formData, setFormData] = useState({
        userName: '',
        password: '',
    });
    const [error, setError] = useState('');
    const users = [
        { name: 'user1', password: '12345' },
        { name: 'user2', password: '67890' },
    ];
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const user = users.find((u) => u.name === formData.userName && u.password === formData.password);
        if (user) {
            setUser(formData.userName);
            handleLogin(formData.userName);
        } else {
            setError('Invalid username or password');
        }
    };

    const handleLogin = (user) => {
        navigate(`/posts/${user}`);
    };

    return (
        <div>
            <h1>Login</h1>
            <label htmlFor='userName'>
                Username:
                <input
                    value={formData.userName}
                    name='userName'
                    onChange={handleChange}
                />
            </label>
            <br />
            <label htmlFor='password'>
                Password:
                <input
                    type='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                />
            </label>
            <br />
            <button onClick={validate}>Login</button>
            <p>{error}</p>
            {user && <p>Welcome, {user}</p>}
        </div>
    );
}

export default MockLogin;
