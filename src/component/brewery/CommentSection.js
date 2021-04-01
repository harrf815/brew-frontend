 
 import React from 'react';
 import Comment from './Comment';

 const CommentSection = ({newFeedback, onDelete}) => {
//! on edit breaks due to missing function
    return (
        newFeedback.map(fb => <Comment onDelete={onDelete} /*onEdit={onEdit} */ key={fb.id} fb={fb} />)
    )
     
 }

 export default CommentSection