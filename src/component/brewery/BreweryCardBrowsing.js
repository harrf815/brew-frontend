import React from "react";
import { Link } from "react-router-dom";

//basic brewery card will serve as a link to the brewery page
//TODO:

//link to that brewery's show page
const BreweryCardBrowsing = (props) => {
  // console.log(props.brew.id)
  return (
    <div id="landing-card" className="ui fluid image card">
      <div className="image" id="brew-pic-div">
      <img className="image" alt="" src={props.brewpic.default} id="brew-pic"/>
      </div>
      <div className="">
<Link
  id="brew-link" key={props.brewery.id + "u"}
  to={`/breweries/brewery/${props.brewery.id}`}
>
  {props.brewery.name.length > 30 ? `${props.brewery.name.slice(0,30)}....` : props.brewery.name}
</Link>
</div>
<div className="description" id="brew-description-card">
{props.brewery.city}, {props.brewery.state}
</div>
<div id="rating-div"className="content" >
<span className="left floated">
  {props.brewery.rating} rating here
</span>
</div>
    </div>
  );
};

export default BreweryCardBrowsing;
