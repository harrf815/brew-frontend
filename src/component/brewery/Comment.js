 
 import React from 'react';
 import Input from './Input'
 
class Comment extends React.Component {
//  const Comment = ({fb, onDelete, onEdit}) => 

    state = {
        isHidden: true
    }

    toggleHidden() {
        this.setState({ isHidden: !this.state.isHidden})
    }

    

    handleRemove = (id)=>{
        this.props.onDelete(id)
    }
        render() {
            const showInput = () => (
                <div>
                    <input/>
                </div>
            )

            const {fb, onEdit} = this.props

            return (
                <div key={fb.id} className="ui comments">
                    <div className="comment">
                        <a className="avatar">
                            <img src=""/>
                        </a>
                        <div className="content">
                            <a className="author">{fb.user.username}</a>
                            <div className="metadata">
                                <span className="date">Today at 5:42PM</span>
                            </div>
                            <div id={fb.id} className="text">
                                {fb.comments}
                            </div>
                            <div className="actions">
                                <a onClick={this.toggleHidden.bind(this)} className="reply">Edit</a>
                                <a onClick={() => this.handleRemove(fb.id)} className="reply">Delete</a>
                            </div>
                            {!this.state.isHidden && <Input fb={fb} onEdit={onEdit}/>}
                        </div>
                    </div>
                </div>
            )
        }  
        
        
        
    }
    
    export default Comment
    {/* // <div className="ui comments">
    //    <h5 className="ui dividing header"> Comments</h5>
    //    <div className="comment">
    //        <a className='avatar'>
    //            <img src=''/>
    //        </a>
    //        <div className="content">
    //            <a className="author">{fb.user.username}</a>
    //            <div className="metadata">
    //                <span className="date">Today at 5:00pm</span>
    //            </div>
    //        </div>
    //    </div>
    // </div> */}