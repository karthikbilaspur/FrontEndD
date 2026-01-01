import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    length: '',
    uppercase: '',
    lowercase: '',
    number: '',
    specialChar: '',
  });
  const [isValid, setIsValid] = useState(false);

  const validatePassword = (password) => {
    const errors = {};

    // Check length
    if (password.length < 8) {
      errors.length = 'Password must be at least 8 characters long';
    } else {
      errors.length = '';
    }

    // Check uppercase
    if (!/[A-Z]/.test(password)) {
      errors.uppercase = 'Password must contain at least one uppercase letter';
    } else {
      errors.uppercase = '';
    }

    // Check lowercase
    if (!/[a-z]/.test(password)) {
      errors.lowercase = 'Password must contain at least one lowercase letter';
    } else {
      errors.lowercase = '';
    }

    // Check number
    if (!/\d/.test(password)) {
      errors.number = 'Password must contain at least one number';
    } else {
      errors.number = '';
    }

    // Check special character
    if (!/[^A-Za-z0-9]/.test(password)) {
      errors.specialChar = 'Password must contain at least one special character';
    } else {
      errors.specialChar = '';
    }

    // Check if password is valid
    if (Object.values(errors).every((error) => error === '')) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }

    return errors;
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setPassword(password);
    setErrors(validatePassword(password));
  };

  return (
    <div className="app">
      <h1>Password Validator</h1>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter password"
        className="password-input"
      />
      <div className="error-messages">
        {errors.length && <p className="error">{errors.length}</p>}
        {errors.uppercase && <p className="error">{errors.uppercase}</p>}
        {errors.lowercase && <p className="error">{errors.lowercase}</p>}
        {errors.number && <p className="error">{errors.number}</p>}
        {errors.specialChar && <p className="error">{errors.specialChar}</p>}
      </div>
      {isValid && <p className="success">Password is valid!</p>}
    </div>
  );
}

export default App;
