import React from "react";
import LargeSearchBar from "./LargeSearchBar";
import Photo from "../../photo/testbg1.jpg";

export default function MainHeader(props) {
  return (
    <div id="mast" className="ui masthead center aligned">
      {/* <img id="bg1" className="ui fluid image" src={Photo}></img> */}
      <div className="ui text container">
      <LargeSearchBar onSearch={props.onSearch} />
    </div>
    </div>
  );
}
