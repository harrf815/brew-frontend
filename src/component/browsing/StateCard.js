import React from "react";
import { Link } from "react-router-dom";

export default function StateCard(props) {
  // const handleClick = () =>{
  //   props.targetState(props.state)
  // }
  return (
    <div className="column" id="state-column">
      <div className="ui fluid image card" id="state-card">
        <div className="blurring dimmable image">
          <img src={props.pic.default} />
        </div>
        <div className="content">
          <div className="header">
            <Link
              key={props.state + "u"}
              to={`/breweries/state/${props.state}`}
            >
              {props.state === "District of Columbia" ? "DC" : props.state}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// onClick={() => handleClick()}
