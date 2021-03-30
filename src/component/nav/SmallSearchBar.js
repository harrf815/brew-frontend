import React from 'react'

/* eslint-disable */ 

function SmallSearchBar({onSearch}) {
    return (
        <div className="item">
        <div className="ui icon input">
          <input onChange={onSearch} type="text" placeholder="Search..." />
          <i className="search link icon"></i>
        </div>
      </div>
    )
}


export default SmallSearchBar

