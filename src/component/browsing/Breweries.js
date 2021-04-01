import React, { Component } from 'react'
import { api } from "../../services/Api";
import BreweryCardBrowsing from '../brewery/BreweryCardBrowsing'

export default class Breweries extends Component {

    state = {}
    
    componentDidMount(){
        api.breweries.getBreweries("washington").then(console.log)
    }
    render() {

        return (
            <div>
                {/* <BreweryCardBrowsing /> */}
            </div>
        )
    }
}
