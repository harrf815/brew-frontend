import React from 'react'


function SmallSearchBar(props) {
    return (
        <div className="small-search-bar">
            <input onChange={props.onSearch} />
        </div>
    )
}


export default SmallSearchBar

