import React, { Component } from 'react'
import { api } from '../../services/Api'
import CommentSection from './CommentSection'
// import image from '../../photo/brew.jpg'
import Map from '../map/Map'
import Carousels from './Carousels'


export default class BreweryPage extends Component {
    state = {
        brewery: {},
        comment: '',
        rating: 0,
        newFeedback: []
    }

    componentDidMount() {
        let id = parseInt(this.props.match.params.id)
        api.breweries.getBrewery(id).then(brewery => {
            this.setState({ brewery: brewery, newFeedback: brewery.feed_backs })
        })
    }

    createFeedback = e => {
        e.preventDefault()
        const feedback = {
            comments: this.state.comment,
            rating: this.state.rating,
            brewery_id: this.state.brewery.id,
            user_id: this.props.user.user_id
        }

        api.breweries.addComment(feedback).then(res => {
            const newFeed = [...this.state.newFeedback, res]
            this.setState({ newFeedback: newFeed })
        })
        e.target.reset()
    }


    onComment = comment => this.setState({ comment: comment })

    onDelete = id => {
        const del = this.state.newFeedback.filter((item) => item.id !== id)
        api.breweries.delFeedBack(id)
        this.setState({ newFeedback: del })
    }

    onEdit = (e, comments, id) => {
        e.preventDefault()

        let div = document.getElementById(id)
        div.innerText = comments.comments
        api.breweries.editComment(id, comments)
    }

    render() {

        const { name, phone, brewery_type, street, city, state, website_url, rating, zip } = this.state.brewery

        return (
            <>
                {/* <ShowPageHeader /> */}
                <div className="landing-container">
                    <h1 id="landing-title"> {name}</h1>
                    < Carousels />

                    <div className="ui container">
                        <div id='text' className="ui rsmall header">
                            {street}. {city}, {state} {zip}
                        </div>
                        <div id='text' className="ui small header">
                            Phone Number: {phone}
                        </div>
                        <div id='text' className="ui small header">
                            <a href={`${website_url}`}>{website_url}</a>
                        </div>
                        <div>
                            {rating}
                        </div>
                    </div>

                </div>
                <div className="contianer">
                    <div className="ui four column doubling stackable grid container">
                        <div className="ui row">
                            <div id="small-search-map" className="five wide column">
                                <div className="five wide column">
                                    <div>
                                        <h2 id='text' className="ui dividing header">Comments</h2>
                                        <CommentSection onDelete={this.onDelete} onEdit={this.onEdit} newFeedback={this.state.newFeedback} />
                                        <br />
                                        <div className="ui container" >
                                            <form onSubmit={e => this.createFeedback(e)} className="ui form">
                                                <div className="field">
                                                    <label id='text' >Add a Comment</label>
                                                    <input
                                                        type="text"
                                                        onChange={(e) => this.onComment(e.target.value)}
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="eleven wide column">
                                <Map />
                            </div>
                        </div>
                    </div>
                </div>
            </>








        )
    }
}


