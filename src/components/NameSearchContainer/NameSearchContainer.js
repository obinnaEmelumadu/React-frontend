import React from 'react';
import devices from './devices.png';
import './NameSearchContainer.css';

class NameSearchContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {minprice: 0};
    }
  
    render(props) {
      return (
        <div className="Name-Search-container ui two column stackable grid">
          <div className="Name-Search-section column">
            <h1> SHOP OUR LATEST AVAILABLE STOCK HERE</h1>
            <form className="ui input" onSubmit={this.props.handle}>
              <input type="text" id="search" name="search" placeholder="Enter Search Term (e.g iPhone x)"></input>
              <span></span>
              <input id="submit" className="ui primary button" type="submit" value="SEARCH →"></input>
            </form>
          </div>
          <div className="Name-Search-images column">
            <img src={devices} alt="apple devices"></img>
          </div>
        </div>
      );
    }
  }

export default NameSearchContainer;