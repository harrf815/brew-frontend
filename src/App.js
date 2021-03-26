/* eslint-disable */ 
import React from 'react';
import Map from './component/map/Map'
import NavContainer from './component/nav/NavContainer';

const baseUrl = `http://localhost:3000/breweries/state`

class App extends React.Component {

  state = {
    breweries: []
  }

  componentDidMount() {
    fetch(baseUrl)
    .then(res => res.json())
    .then(data => this.setState({breweries: data}))
  }

  render () {
    return (
      <div className="App">
        <NavContainer />
        <header className="App-header">
        </header>
        <Map />
      </div>
   );
  }
}

export default App;
