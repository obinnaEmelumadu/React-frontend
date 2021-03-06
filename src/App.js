import React from 'react' 
import 'semantic-ui-css/semantic.min.css'
import logo from './logo.svg';
import PhoneContainer from './components/PhoneContainer/PhoneContainer';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <PhoneContainer></PhoneContainer>
        </header>
      </div>
    );
  }
}

export default App;
