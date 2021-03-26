import React from 'react';
import Map from './component/map/Map'
import NavContainer from './component/nav/NavContainer';

const baseUrl = `http://localhost:3000/breweries/state`

class App extends React.Component {

  state = {
    breweries: [], 
    searchTerm: ''
  }

  componentDidMount() {
    fetch(baseUrl)
    .then(res => res.json())
    .then(data => this.setState({breweries: data}))
  }

  onSearch = (e) => {
    // console.log(e.target.value)
    e.preventDefault()
    this.setState({ searchTerm: e.target.value})
  }

  onSearchSubmit(){

  }

  //! trying to get this console.log to produce the searhterm
  render () {
    console.log(this.state.breweries.filter(brew => {
      brew.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    }))
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
