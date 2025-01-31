import React, { useId, useRef, useState } from 'react';
const FormComponent = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone : ''
  });
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    phone : '',
  });

  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
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
      newErrors.username = 'username required';
      e.preventDefault();
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
      emailRef.current.focus();
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      emailRef.current.focus();
      newErrors.email = 'email validation is incorrect';

    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
      phoneRef.current.focus();
    } else if (!/^\d{10}$/.test(formData.phone)) {
      phoneRef.current.focus();
      newErrors.phone = 'Phone number must be 10 digits';
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
    <form onSubmit={handleSubmit} id='form'>
      <div>
        <label className='formlabel'>Username:</label>
        <input
          type="text"
          name="username" className='forminput'
          value={formData.username}
          onChange={handleInputChange}
          aria-describedby={usernameId}
          ref={usernameRef}
        />
        {/* <p id={usernameId}>should enter atleast one character</p> */}
        {errors.username && <span>{errors.username}</span>}
      </div>
      <div>
        <label className='formlabel'>Email:</label>
        <input
          type="email" className='forminput'
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          ref={emailRef}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label className='formlabel'>phone:</label>
        <input
          type="phone"  
          name="phone" className='forminput'
          value={formData.phone}
          onChange={handleInputChange}
          ref={phoneRef}
        />
        {errors.phone && <span>{errors.phone}</span>}
      </div>

      <button type="submit" className='formbutton'>Submit</button>
    </form>
  );
};
export default FormComponent;
