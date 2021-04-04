import React, { Component } from 'react'
import { api } from "../../services/Api";
import LargeSearchBar from '../brewery/LargeSearchBar'
import BreweriesContainer from '../browsing/BreweriesContainer'
import Map from '../map/Map'

export default class Breweries extends Component {

    state = {
        state: this.props.match.params.state,
        breweries:[],
        searchTerm: ""
    }
    
    componentDidMount(){
        let state = this.props.match.params.state
        console.log(state)
        api.breweries.getBreweries(state).then(brew => {
        this.setState({
         breweries:brew
        })
       })
    }

    onSearch = (e) => {
        e.preventDefault();
        this.setState({ searchTerm: e.target.value.toLowerCase() });
      };

    render() {
        const filterBrew = this.state.breweries.filter((brew) =>
        brew.name.toLowerCase().includes(this.state.searchTerm)
      );

        return (
            <div>
                <h1>{this.state.state} breweries</h1>
                <Map />
                <div id="browse-brew-search">
                <LargeSearchBar onSearch={this.onSearch} id="browse-brew-search"/>
                </div>
                <div className="ui grid" id="brew-ui">
                <BreweriesContainer filterBrew={filterBrew} />
                </div>
            </div>
        )
    }
}
