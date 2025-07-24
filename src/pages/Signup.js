import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../stylesheets/Signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  
  const { signup, signInWithGoogle, signInWithFacebook } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });

    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const errors = {};
    
    // Validate first name
    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
    }
    
    // Validate last name
    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
    }
    
    // Validate email
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }
    
    // Validate password
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      errors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
    }
    
    // Validate password confirmation
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    
    // Validate terms agreement
    if (!formData.agreeTerms) {
      errors.agreeTerms = 'You must agree to the terms and conditions';
    }
    
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate the form
    const errors = validateForm();
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    // Reset error and set loading state
    setError('');
    setLoading(true);
    
    try {
      // Create user with email and password
      await signup(formData.email, formData.password);
      setSuccessMessage('Account created successfully! Redirecting to login...');
      
      // After successful signup, redirect to login after a brief delay
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      setError('Failed to create an account: ' + err.message);
    } finally {
      setLoading(false);
    }
  };
  
  const handleGoogleSignup = async () => {
    setError('');
    setLoading(true);
    
    try {
      await signInWithGoogle();
      navigate('/');
    } catch (err) {
      setError('Failed to sign in with Google: ' + err.message);
    } finally {
      setLoading(false);
    }
  };
  
  const handleFacebookSignup = async () => {
    setError('');
    setLoading(true);
    
    try {
      await signInWithFacebook();
      navigate('/');
    } catch (err) {
      setError('Failed to sign in with Facebook: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-header">
          <h1>Create Your Account</h1>
          <p>Join Nimantran to start planning your events</p>
        </div>
        
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={formErrors.firstName ? 'error' : ''}
                placeholder="First name"
              />
              {formErrors.firstName && <div className="error-message">{formErrors.firstName}</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={formErrors.lastName ? 'error' : ''}
                placeholder="Last name"
              />
              {formErrors.lastName && <div className="error-message">{formErrors.lastName}</div>}
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={formErrors.email ? 'error' : ''}
              placeholder="Your email address"
            />
            {formErrors.email && <div className="error-message">{formErrors.email}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={formErrors.password ? 'error' : ''}
              placeholder="Create a password"
            />
            {formErrors.password && <div className="error-message">{formErrors.password}</div>}
            <div className="password-hint">
              Password must be at least 8 characters with 1 uppercase letter, 1 lowercase letter, and 1 number.
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={formErrors.confirmPassword ? 'error' : ''}
              placeholder="Confirm your password"
            />
            {formErrors.confirmPassword && <div className="error-message">{formErrors.confirmPassword}</div>}
          </div>
          
          <div className="terms-agreement">
            <input
              type="checkbox"
              id="agreeTerms"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              className={formErrors.agreeTerms ? 'error' : ''}
            />
            <label htmlFor="agreeTerms">
              I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>
            </label>
            {formErrors.agreeTerms && <div className="error-message">{formErrors.agreeTerms}</div>}
          </div>
          
          <button 
            type="submit" 
            className="signup-button" 
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Create Account'}
          </button>
          
          <div className="signup-footer">
            <p>Already have an account? <Link to="/login">Log in</Link></p>
          </div>
        </form>
        
        {error && <div className="error-alert">{error}</div>}
        {successMessage && <div className="success-alert">{successMessage}</div>}
        
        <div className="social-signup">
          <p>Or sign up with</p>
          <div className="social-buttons">
            <button 
              className="social-button google" 
              onClick={handleGoogleSignup}
              disabled={loading}
            >
              <img src="/images/icons/social/google.svg" alt="Google" className="icon-google" />
              Google
            </button>
            <button 
              className="social-button facebook" 
              onClick={handleFacebookSignup}
              disabled={loading}
            >
              <img src="/images/icons/social/facebook.svg" alt="Facebook" className="icon-facebook" />
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
