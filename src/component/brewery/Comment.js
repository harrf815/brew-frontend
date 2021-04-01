 
 import React from 'react';
 

 const Comment = ({fb, onDelete}) => {
    function handleRemove(id){
        onDelete(id)
    }

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
                        <div className="text">
                            {fb.comments}
                        </div>
                        <div className="actions">
                            <a className="reply">Edit</a>
                            <a onClick={() => handleRemove(fb.id)} className="reply">Delete</a>
                        </div>
                    </div>
                </div>
            </div>
        )
        
        
        
        
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