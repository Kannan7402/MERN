import React, { useState } from "react";
import './css/signUp.css'
function Signup() {
    const [formData, setFormdata] = useState({
        userName: '',
        Email: '',
        Phone: '',
        Password: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({
          ...formData,
          [name]: value,
        });
      };
      function handleClick()
      {
        console.log('submit');
      }

    return (
        <>
        <h1>Sign Up</h1>
        <div id="signup">
            <label htmlFor="userName">Username
                <input className="input" name='userName' type="text" value={formData.userName} onChange={handleChange}></input>
            </label>
            <label htmlFor="Email">E-Mail
                <input className="input" name='Email' type="text" value={formData.Email} onChange={handleChange}></input>
            </label>
            <label htmlFor="Phone">Phone
                <input className="input" name='Phone'
                    type="text" value={formData.Phone} onChange={handleChange}></input>
            </label>
            <label htmlFor="Password">Set-Password
                <input className="input" type="text" name='Password' value={formData.Password} onChange={handleChange}></input>
            </label>
            <label htmlFor="Password">Re-enter-Password
                <input className="input" type="text" ></input>
            </label>
            <button onClick={handleClick}>Sign-Up</button>
        </div>
        </>
    )
}
export default Signup