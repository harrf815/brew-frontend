import React from "react";

export default function StateCard(props) {
  return (
    <div className="column" id="state-column">
      <div className="ui fluid card blurring dimmable image" id="state-card">
        <div className="blurring dimmable image ">
          <img src={props.pic.default} />
        </div>
        <div className="content">
          <a className="header">{props.state}</a>
        </div>
      </div>
    </div>
  );
}
