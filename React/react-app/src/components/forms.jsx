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
      e.preventDefault();
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
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
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          aria-describedby={usernameId}
          ref={usernameRef}
        />
        {/* <p id={usernameId}>should enter atleast one character</p> */}
        {errors.username && <span>{errors.username}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>phone:</label>
        <input
          type="phone"  
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
        {errors.phone && <span>{errors.phone}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};
export default FormComponent;
