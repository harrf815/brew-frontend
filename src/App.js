import React from 'react';
import Map from './component/map/Map'
import NavContainer from './component/nav/NavContainer';

const baseUrl = `http://localhost:3000/breweries`

class App extends React.Component {

  state = {
    breweries: []
  }

  componentDidMount() {
    fetch(baseUrl)
    .then(res => res.json())
    .then(data => this.setState({breweries: data}))
  }

  onSearch = () => {

  }

  render () {
    return (
      <div className="App">
        <NavContainer onSearch={this.onSearch}/>
        <header className="App-header">
        </header>
        <Map />
      </div>
   );
  }
}

export default App;
