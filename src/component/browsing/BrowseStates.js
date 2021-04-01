import React, { Component } from 'react'
import { api } from '../../services/Api'
import StateSearchBar from './StateSearchBar'
import SideMenu from './SideMenu'
import StateCard from './StateCard'

export default class BrowseStates extends Component {
    state = {
        states: []
    }

    componentDidMount(){
        api.breweries.getStates().then(data => this.setState({states: data}))
        // .then(states => this.setState({states: states}))
    }
    render() {
        return (
                <>
                <StateSearchBar />
                {/* <SideMenu /> */}
                <div className="ui five column doubling stackable grid" id="states-div">
                    {this.state.states.map(st => <StateCard st={st}/>)} 
                </div>
                
                </>
            
        )
    }
}
