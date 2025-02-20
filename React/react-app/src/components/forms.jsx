import React, { useId, useRef, useState } from 'react';
const FormComponent = () => {
 
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '' 
  });
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    phone: '',
    password: '', // Add password validation
  });

  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null); // Reference for password field
  const usernameId = useId();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = (e) => {
    const newErrors = {};
    if (!formData.username) {
      usernameRef.current.focus();
      newErrors.username = 'Username is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
      emailRef.current.focus();
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email format is incorrect';
      emailRef.current.focus();
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
      phoneRef.current.focus();
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
      phoneRef.current.focus();
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
      passwordRef.current.focus();
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(e)) {
      alert('Form submitted successfully');
    }
  };

  return (
    <form onSubmit={handleSubmit} id="form">
      <div>
        <label className="formlabel">Username:</label>
        <input
          type="text"
          name="username"
          className="forminput"
          value={formData.username}
          onChange={handleInputChange}
          aria-describedby={usernameId}
          ref={usernameRef}
        />
        {errors.username && <span>{errors.username}</span>}
      </div>
      <div>
        <label className="formlabel">Email:</label>
        <input
          type="email"
          name="email"
          className="forminput"
          value={formData.email}
          onChange={handleInputChange}
          ref={emailRef}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label className="formlabel">Phone:</label>
        <input
          type="text" // Fixed from "phone" to "text" for proper handling
          name="phone"
          className="forminput"
          value={formData.phone}
          onChange={handleInputChange}
          ref={phoneRef}
        />
        {errors.phone && <span>{errors.phone}</span>}
      </div>
      <div>
        <label className="formlabel">Password:</label>
        <input
          type="password"
          name="password"
          className="forminput"
          value={formData.password}
          onChange={handleInputChange}
          ref={passwordRef}
        />
        {errors.password && <span>{errors.password}</span>}
      </div>

      <button type="submit" className="formbutton">Submit</button>
     
    </form>
  );
};

export default FormComponent;
