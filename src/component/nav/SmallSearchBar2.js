import React from "react";

/* eslint-disable */

function SmallSearchBar2({ onSearch }) {
  return (
    <div className="item" id="search-div2">
      <div id="small-input2" className="ui icon input">
        <input onChange={onSearch} type="text" placeholder="Search..." />
        <i className="search link icon"></i>
      </div>
    </div>
  );
}

export default SmallSearchBar2;
