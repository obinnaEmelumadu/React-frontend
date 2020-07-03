import React from 'react';
import './PhoneContainer.css';
import SpinnerContainer from '../SpinnerContainer/SpinnerContainer';
import LoadContainer from '../LoadContainer/LoadContainer';
import SearchContainer from '../SearchContainer/SearchContainer';
import NameSearchContainer from '../NameSearchContainer/NameSearchContainer';

/**
 * 
 * #6 extra add animations for new stuff
 * 
 * #7  hos app on heroku
 */

class PhoneContainer extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
            page: 1,
            search: "",
            min: 0,
            max: 0,
            data: []
        };
        this.fetchData = this.fetchData.bind(this);
        this.fetchDataSearch = this.fetchDataSearch.bind(this);
        this.fetchDataMinMax = this.fetchDataMinMax.bind(this);
        this.reloadData = this.reloadData.bind(this);
      }
    
      componentDidMount() {
        this.fetchData("https://mongodb-express-backend.herokuapp.com/api/products");
      }

      fetchDataMinMax(event){
        event.preventDefault();
        const min = event.target.minprice.value ? event.target.minprice.value : 0 ;
        const max = event.target.maxprice.value ? event.target.maxprice.value : 9999999;

        this.setState({ data: [] });
        this.fetchData(`https://mongodb-express-backend.herokuapp.com/api/products?min=${min}&max=${max}`);
    }
    fetchDataSearch(event){
        event.preventDefault();
        const search = event.target.search.value;

        this.setState({ data: [] });
        this.fetchData(`https://mongodb-express-backend.herokuapp.com/api/products?search=${search}`);
    }

    reloadData(event){
        event.preventDefault();
        this.setState({ 
            page: 1,
            search: "",
            min: 0,
            max: 0,
            data: []
        });
        this.fetchData(`https://mongodb-express-backend.herokuapp.com/api/products?`);
    }
    
    fetchData(uri){
        fetch(uri)
        .then(res => res.json())
        .then(
          (result) => {
              if(result.length === 0){
                result = {empty:true};
              } 
              this.setState({ data: result });
          }
        );
    }

    render(props) {
        const containers = this.state.data;
        
        if (containers.length === 0){
            return(
                <SpinnerContainer></SpinnerContainer>
            );
        }
        
        else if (containers.empty){
            return(
                <div className="Phone-container">
                    <NameSearchContainer handle={this.fetchDataSearch}></NameSearchContainer>
                    <p>Sorry no results</p>
                    <LoadContainer handle={this.reloadData}></LoadContainer>
                </div>
            );
        }

        return (
            <div className="Phone-container">
                <NameSearchContainer handle={this.fetchDataSearch}></NameSearchContainer>
                <div className="grid-collection">
                    <SearchContainer handle={this.fetchDataMinMax}></SearchContainer>
                    <div className="Phone-collection">
                        {containers.map((container, key) =>
                            <SinglePhoneContainer 
                                key={key}
                                phoneName={container.phoneName} 
                                condition={container.condition} 
                                storageSize={container.storageSize} 
                                price={container.price}
                                image={container.image} >
                            </SinglePhoneContainer>
                        )}
                    </div>
                </div>
                <LoadContainer handle={this.reloadData}></LoadContainer>
            </div>  
          );
    }
}

class SinglePhoneContainer extends React.Component {
    render() {
        return (
            <div className="Phone-Single-container">
              <img src={"./images/"+this.props.image} alt={this.props.phoneName}></img>
              <p className="name">Phone name: {this.props.phoneName}</p>
              <p>Storage: {this.props.storageSize } GB</p>
              <p>Condition: {this.props.condition }</p>
              <p className="price">Price: ${this.props.price }</p>      
            </div>
          
          );
    }
}

export default PhoneContainer;