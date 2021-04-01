import React from "react";
import { Link } from "react-router-dom";

//basic brewery card will serve as a link to the brewery page
//TODO:

//link to that brewery's show page
const BreweryCard = (props) => {
  // console.log(props.brew.id)
  return (
    <div id="landing-card" className="ui card">
      <div className="content">
        <div className="right floated meta">14h</div>
        <img className="ui avatar image" alt="" src="./images.jpg" /> Elliot
      </div>
      <div className="content">
        <Link key={props.brew.id + "u"} to={`/breweries/brewery/${props.brew.id}`}>
          {props.brew.name}
        </Link>
      </div>
      <div className="description">{props.brew.city}, {props.brew.state} </div>
      <div className="content">
        <span className="right floated">
          <i className="heart outline like icon"></i>
          17 likes
        </span>
        <i className="comment icon"></i>3 comments
      </div>
      <div className="extra content">
        <div className="ui large transparent left icon input">
          <i className="heart outline icon"></i>
          <input type="text" placeholder="Add Comment..." />
        </div>
      </div>
    </div>
  );
};

export default BreweryCard;
