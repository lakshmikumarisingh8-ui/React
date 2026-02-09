import React, { useState } from 'react';
export default App;
import './App.css'; 

function App() {
  return <SignupForm />;
}

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords must match';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Signup data:', formData);
      alert('Signup successful!');
    }
  };

  const handleFocus = (field) => setFocusedField(field);
  const handleBlur = () => setFocusedField('');

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Create Account</h2>
        
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className={`form-input ${errors.name ? 'error' : focusedField === 'name' ? 'focus' : ''}`}
            onFocus={() => handleFocus('name')}
            onBlur={handleBlur}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        <br>
        </br>

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={`form-input ${errors.email ? 'error' : focusedField === 'email' ? 'focus' : ''}`}
            onFocus={() => handleFocus('email')}
            onBlur={handleBlur}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        <br>
        </br>

        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className={`form-input ${errors.password ? 'error' : focusedField === 'password' ? 'focus' : ''}`}
            onFocus={() => handleFocus('password')}
            onBlur={handleBlur}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>
        <br>
        </br>

        <div className="form-group">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`form-input ${errors.confirmPassword ? 'error' : focusedField === 'confirmPassword' ? 'focus' : ''}`}
            onFocus={() => handleFocus('confirmPassword')}
            onBlur={handleBlur}
          />
          {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
        </div>
        <br>
        </br>

        <button type="submit" className="submit-btn">Sign Up</button>
      </form>
    </div>
  );
};