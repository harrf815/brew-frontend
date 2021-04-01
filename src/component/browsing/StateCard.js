import React from "react";
import { Link } from "react-router-dom";

export default function StateCard(props) {
  return (
    <div className="column" id="state-column">
      <Link state={props.state} key={props.state + "u"} to={`/${props.state}`}>
      <div className="ui fluid image card" id="state-card">
        <div className="blurring dimmable image ">
          <img src={props.pic.default} />
        </div>
        <div className="content">
          <div className="header">{props.state === "District of Columbia" ? "DC" : props.state}</div>
        </div>
      </div>
        </Link>
    </div>
  );
}


