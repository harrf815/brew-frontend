import React, { Component } from 'react'
import { api } from "../../services/Api";
import BreweryCardBrowsing from '../brewery/BreweryCardBrowsing'

export default class Breweries extends Component {

    state = {}
    
    componentDidMount(){
        console.log(this.props)
        // api.breweries.getBreweries().then(console.log)
    }
    render() {

        return (
            <div>
                <h1>Here</h1>
                {/* <BreweryCardBrowsing /> */}
            </div>
        )
    }
}
