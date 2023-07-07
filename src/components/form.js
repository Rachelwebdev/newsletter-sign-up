import React, { useState } from 'react';
import '../styles/form.css';

const Form = () => {
  const [email, setEmail] = useState('');

  const handleFormSubmit = (event) => {
    // to prevent a full page reload on submission

    event.preventDefault();

    setEmail('');
  };

  return (
    <form
      className="form-container"
      onSubmit={handleFormSubmit}
    >
      <p className="email-label">Email address</p>
      <input
        className="email-input"
        type="text"
        id="email"
        placeholder="email@company.com"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <button
        type="submit"
        className="btn-form"
      >
        Subscribe to monthly newsletter
      </button>
    </form>
  );
};

export default Form;
