import React from 'react';
import mobileIllustration from '../assets/images/illustration-sign-up-mobile.svg';
import icon from '../assets/images/icon-list.svg';
import '../styles/description.css';

const Description = () => (
  <>
    <div className="description-container">
      <img
        src={mobileIllustration}
        alt="mobile illustration"
      />
      <h1 className="desc-header">Stay updated!</h1>
      <p className="descr-text">
        Join 60,000+ product managers receiving monthly updates on:
      </p>
      <ul className="update-list">
        <li>
          <img
            src={icon}
            alt="icon check"
          />
          <p className="update-desc">
            Product discovery and building what matters
          </p>
        </li>
        <li>
          <img
            src={icon}
            alt="icon check"
          />
          <p className="update-desc">
            Measuring to ensure updates are a success
          </p>
        </li>
        <li>
          <img
            src={icon}
            alt="icon check"
          />
          <p className="update-desc">And much more!</p>
        </li>
      </ul>
    </div>
  </>
);

export default Description;
