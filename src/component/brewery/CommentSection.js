 
 import React from 'react';
 import Comment from './Comment';

 const CommentSection = ({newFeedback}) => {


        return (
            newFeedback.map(fb => <Comment fb={fb} />)
        )
  


    
 }

 export default CommentSection