
import React from 'react';


const LargeSearchBar = ({onSearch}) => {
    
    return (
        <div>
            <div className="ui form container" >
                <div className="ui icon input">
                    <input 
                        style={{width: '500px'}}
                        className="input"
                        onChange={onSearch}
                        type="text"
                        placeholder="Find By Brewery Name"
                    />
                    <i className="search link icon"></i>
                </div>
            </div>
        </div>
    )
}

export default LargeSearchBar

