import React, { Component } from 'react'
import BreweryCard from './BreweryCard'


export default class LandingBreweries extends Component {
    state = {
       
    }

    render() {
        return (
            <div className="ui four column doubling stackable grid container">
                <div className="column">
                    <p><BreweryCard/></p>
                </div>
                <div className="column">
                    <p><BreweryCard/></p>
                 
                </div>
                <div className="column">
                    <p><BreweryCard/></p>
                </div>
                <div className="column">
                    <p><BreweryCard/></p>
                </div>
                </div>
        )
    }
}
