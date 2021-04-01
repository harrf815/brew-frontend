import React, { Component } from 'react'
import { api } from '../../services/Api'
import CommentSection from './CommentSection'

export default class BreweryPage extends Component {
    state = { 
        brewery: [],
        comment: '',
        rating: 0,
        newFeedback: []
     }

    componentDidMount(){
        let id = parseInt(this.props.match.params.id)
        api.breweries.getBrewery(id).then(brewery => this.setState({brewery: brewery}))   
        api.breweries.getFeedBack(id).then(data => this.setState({newFeedback: data})) 
    
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
            this.setState({newFeedback: newFeed})
        })
        e.target.reset()
    }

    // editTheDamnComment = () => {
    //     api.breweries.editComment().then(res => {
    //         console.log()
    //     })
    // }

    // renderedComments = feedback => { 
    //     console.log(feedback.comments)
    //     return (
    //         <div>
    //             {feedback.user.username}: {feedback.comments}
    //         </div>
    //     )
    // }

    onComment = comment => {
        this.setState({comment: comment})
    }

    onDelete = id => {
        const del = this.state.newFeedback.filter((item) => item.id !== id)
        api.breweries.delFeedBack(id)
        this.setState({newFeedback: del})
    }
  
    render() {

        const {name, phone, brewery_type, street, city, state, website_url, rating, zip} = this.state.brewery

        return (
            <div>
                <div id="Tab" className="ui centered aligned container border-1">
                    <h2 className="ui header">
                        {name}
                    </h2>
                    <div >
                        {street}. {city}, {state} {zip}
                    </div>
                    <div>
                        Phone Number: {phone}
                    </div>
                    <div>
                        {website_url}
                    </div>
                    <div>
                        {rating}
                    </div>        
                </div>

                <div>
                    <h2 className="ui dividing header">Comments</h2>
                    <CommentSection onDelete={this.onDelete} newFeedback={this.state.newFeedback}/>
                </div>
                <br/>
                <div className="ui container">
                    <form onSubmit={e => this.createFeedback(e)}className="ui form">
                        <div className="field">
                            <label>Add Comments</label>
                            <input
                                type="text"
                                onChange={(e) => this.onComment(e.target.value)}
                            />
                        </div>
                    </form>
                </div>

            </div>
        
        )
    }
}


