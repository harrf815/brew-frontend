import React, { Component } from 'react'
import { api } from '../../services/Api'

export default class BreweryPage extends Component {
    state = {
        brewery: []
    }

    componentDidMount(){
        let id = parseInt(this.props.match.params.id)
        api.breweries.getBrewery(id).then(brewery => this.setState({brewery: brewery}))
    }
    render() {
        return (
            <div>
                {this.state.brewery.name}
            </div>
        )
    }
}


