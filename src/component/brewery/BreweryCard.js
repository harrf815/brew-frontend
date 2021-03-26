import React from 'react'

function BreweryCard() {
    return (
    
<div className="ui special cards">
  <div className="card">
    <div className="blurring dimmable image">
      <div className="ui dimmer">
        <div className="content">
          <div className="center">
            <div className="ui inverted button">Add Friend</div>
          </div>
        </div>
      </div>
      <img src="../photo/brewing.jpg" />
    </div>
    </div>
    <div className="content">
      <a className="header">Team Fu</a>
      <div className="meta">
        <span className="date">Created in Sep 2014</span>
      </div>
    </div>
    <div className="extra content">
      <a>
        <i className="users icon"></i>
        2 Members
      </a>
    </div>
  </div>

       
    )
}

export default BreweryCard
