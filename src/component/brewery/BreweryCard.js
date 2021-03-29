import React from 'react'


//basic brewery card will serve as a link to the brewery page
//TODO: 

//get photo working
//link to that brewery's show page
//

function BreweryCard() {
    return (
    
<div className="ui card">
  <div className="content">
    <div className="right floated meta">14h</div>
    <img className="ui avatar image" alt="" src='./images.jpg' /> Elliot
  </div>
 
  
  <div className="content">
    <span className="right floated">
      <i className="heart outline like icon"></i>
      17 likes
    </span>
    <i className="comment icon"></i>
    3 comments
  </div>
  <div className="extra content">
    <div className="ui large transparent left icon input">
      <i className="heart outline icon"></i>
      <input type="text" placeholder="Add Comment..." />
    </div>
  </div>
</div>

       
    )
}

export default BreweryCard
