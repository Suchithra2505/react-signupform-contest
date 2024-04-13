// import React, { useState } from 'react';

// const SignUpForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [emailValid, setEmailValid] = useState(true);
//   const [passwordValid, setPasswordValid] = useState(true);
//   const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);

//   const handleEmailChange = (e) => {
//     const newEmail = e.target.value;
//     setEmail(newEmail);
//     setEmailValid(validateEmail(newEmail));
//   };

//   const handlePasswordChange = (e) => {
//     const newPassword = e.target.value;
//     setPassword(newPassword);
//     setPasswordValid(newPassword.length >= 8);
//   };

//   const handleConfirmPasswordChange = (e) => {
//     const newConfirmPassword = e.target.value;
//     setConfirmPassword(newConfirmPassword);
//     setConfirmPasswordValid(newConfirmPassword === password);
//   };

//   const handleSubmit = () => {
//     if (emailValid && passwordValid && confirmPasswordValid) {
//       alert('Form submitted successfully');
//     } else {
//       alert("Can't submit the form");
//     }
//   };

//   const validateEmail = (email) => {
//     // Basic email format validation using regex
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   };

//   return (
//     <div id="d1">
//       <label>Email:</label>
//       <input
//         type="email"
//         value={email}
//         onChange={handleEmailChange}
//         style={{ border: emailValid ? '1px solid green' : '1px solid red' }}
//       />
//       {!emailValid && <div>Error: Please enter a valid email address.</div>}

//       <label>Password:</label>
//       <input
//         type="password"
//         value={password}
//         onChange={handlePasswordChange}
//       />
//       {!passwordValid && <div>Error: Password must be at least 8 characters long.</div>}

//       <label>Confirm Password:</label>
//       <input
//         type="password"
//         value={confirmPassword}
//         onChange={handleConfirmPasswordChange}
//       />
//       {!confirmPasswordValid && <div>Error: Passwords do not match.</div>}

//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// };

// export default SignUpForm;
import React, { useState } from 'react';
import './SignUpForm.css'; // Import your CSS file

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailValid(validateEmail(newEmail));
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordValid(newPassword.length >= 8);
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    setConfirmPasswordValid(newConfirmPassword === password);
  };

  const handleSubmit = () => {
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert('Form submitted successfully');
    } else {
      alert("Can't submit the form");
    }
  };

  const validateEmail = (email) => {
    // Basic email format validation using regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className="container">
      <h1>Sign Up Form</h1>
      <div id="d1">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className={emailValid ? 'valid' : 'invalid'}
        />
        {!emailValid && <div className="error">Error: Please enter a valid email address.</div>}

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        {!passwordValid && <div className="error">Error: Password must be at least 8 characters long.</div>}

        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        {!confirmPasswordValid && <div className="error">Error: Passwords do not match.</div>}

        <button onClick={handleSubmit}>Sign Up</button>
      </div>
    </div>
  );
};

export default SignUpForm;
