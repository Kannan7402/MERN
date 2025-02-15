import React, { useState } from "react";
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

    return (
        <div>
            <label htmlFor="userName">Username
                <input name='userName' type="text" value={formData.userName} onChange={handleChange}></input>
            </label>
            <label htmlFor="Email">E-Mail
                <input name='Email' type="text" value={formData.Email} onChange={handleChange}></input>
            </label>
            <label htmlFor="Phone">Phone
                <input name='Phone'
                    type="text" value={formData.Phone} onChange={handleChange}></input>
            </label>
            <label htmlFor="Password">Set-Password
                <input type="text" name='Password' value={formData.Password} onChange={handleChange}></input>
            </label>
            <label htmlFor="Password">Re-enter-Password
                <input type="text" ></input>
            </label>
            <button>Sign-Up</button>
        </div>
    )
}
export default Signup