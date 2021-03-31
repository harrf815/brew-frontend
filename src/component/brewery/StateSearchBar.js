import React from 'react';


const StateSearchBar = ({onSearch}) => {
    
    return (
        <div className="outer-searchbar">
            <div className="ui form container" >
                <div className="ui icon input">
                    <input 
                        style={{width: '500px'}}
                        className="input"
                        onChange={onSearch}
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