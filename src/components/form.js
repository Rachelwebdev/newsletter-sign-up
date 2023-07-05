import React from 'react';
import '../styles/form.css';

const Form = () => (
  <Form className="form-container">
    <p className="email-label">Email address</p>
    <input
      className="email-input"
      type="text"
      id="email"
      placeholder="email@company.com"
    />
    <button type="submit">Subscribe to monthly newsletter</button>
  </Form>
);

export default Form;
