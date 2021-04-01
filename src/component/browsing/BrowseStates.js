import React, { Component } from 'react'
import { api } from '../../services/Api'
import StateSearchBar from './StateSearchBar'
import SideMenu from './SideMenu'
import StateCard from './StateCard'

export default class BrowseStates extends Component {
    state = {
        states: []
    }

     getPic = (name) => {
        let morphedName = name.split(' ').join('').toLowerCase();
        let pic = require(`../../photo/states/${morphedName}.jpg`)
        return pic
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
                    {this.state.states.map(state => <StateCard pic={this.getPic(state)} state={state}/>)} 
                </div>
                
                </>
            
        )
    }
}
