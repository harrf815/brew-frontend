import React from "react";
import { Link } from "react-router-dom";

//basic brewery card will serve as a link to the brewery page
//TODO:

//link to that brewery's show page
const BreweryCard = (props) => {
  // console.log(props.brew.id)
  return (
    <div id="landing-card" className="ui fluid image card">
      <div className="image" id="brew-pic-div">
        <img className="image" alt="" src={props.pic.default} id="brew-pic"/>
      </div>
      <div className="">
        <Link
          id="brew-link" key={props.brew.id + "u"}
          to={`/breweries/brewery/${props.brew.id}`}
        >
          {props.brew.name.length > 30 ? `${props.brew.name.slice(0,30)}....` : props.brew.name}
        </Link>
      </div>
      <div className="description" id="brew-description-card">
        {props.brew.city}, {props.brew.state}
      </div>
      <div id="rating-div"className="content" >
        <span className="left floated">
          {props.brew.rating} rating here
        </span>
      </div>

    </div>
  );
};

export default BreweryCard;
