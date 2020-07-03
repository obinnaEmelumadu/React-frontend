import React from 'react';
import './LoadContainer.css';

class LoadContainer extends React.Component {
    render(props) {
      return (
        <div className="Load-container">
            <button onClick={this.props.handle} className="ui primary button">Load iPhones</button>
        </div>
      );
    }
  }

export default LoadContainer;