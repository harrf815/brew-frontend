import "semantic-ui-css/semantic.min.css";
import React from 'react';

const PageList = ({filterBrew}) => {

    const renderedFilterBrew = filterBrew.map((brew) => {   
        return (
            <div key={brew.id} className="item">
                <div className="right floated content">
                    <button className="ui button">
                        Details
                    </button>
                </div>
                <div className="header">
                    {brew.name}
                </div>
                <div>
                    {brew.street}. {brew.city}, {brew.state}
                </div>
            </div>
        )
    })

    return (
        <div className="ui relaxed divided list">
            {renderedFilterBrew}
        </div>
    )
    

}

export default PageList