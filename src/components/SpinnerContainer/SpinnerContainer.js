import React from 'react';
import spinner from './spinner.gif';
import './SpinnerContainer.css';

function SpinnerContainer() {
  return (
    <div className="Spinner-container">
        <img src={spinner} alt="spinner"></img>
    </div>
  );
}

export default SpinnerContainer;
