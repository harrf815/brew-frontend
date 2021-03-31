import React, { Component } from 'react'

export default class BreweryPage extends Component {

    componentDidMount(){
        let id = parseInt(this.props.match.params.id)
        console.log(this.props)
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}


