import React from 'react';


const StateSearchBar = ({filterState}) => {
    
    return (
        <div className="outer-searchbar">
            <div className="ui form container" id="state-search-bar-div" >
                <div className="ui icon input">
                    <input 
                        id="filter-state-input"
                        className="input"
                        onChange={filterState}
                        type="text"
                        placeholder="Sort by State Name"
                    />
                    <i className="search link icon"></i>
                </div>
            </div>
        </div>
    )
}

export default StateSearchBar