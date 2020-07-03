import React from 'react';
import './SearchContainer.css';

class SearchContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {minprice: 0};
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    render(props) {
      return (
        <div className="Search-container two wide column">
            <p>Price filter</p>
            <form onSubmit={this.props.handle} className="ui input">
                <input type="number" id="minprice" name="minprice" placeholder="min"></input>
                <br></br>
                <input type="number" id="maxprice" name="maxprice" placeholder="max"></input>
                <br></br>
                <input type="submit" className="ui primary button" value="Submit"></input>
            </form>
        </div>
      );
    }
  }

export default SearchContainer;