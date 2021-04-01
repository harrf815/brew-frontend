 
 import React from 'react';
 import Comment from './Comment';

 const CommentSection = ({newFeedback, onDelete}) => {

    return (
        newFeedback.map(fb => <Comment onDelete={onDelete} key={fb.id} fb={fb} />)
    )
     
 }

 export default CommentSection