import React, { Component } from 'react'
import { api } from '../../services/Api'

export default class BrowseStates extends Component {
    state = {
        states: []
    }

    componentDidMount(){
        api.breweries.getStates().then(console.log)
        // .then(states => this.setState({states: states}))
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
