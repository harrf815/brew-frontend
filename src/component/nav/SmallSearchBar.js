import React from 'react'

/* eslint-disable */ 

function SmallSearchBar(props) {
    return (
        <div className="small-search-bar">
            <input onChange={props.onSearch} />
        </div>
    )
}


export default SmallSearchBar

