import React from 'react'
import BreweryCardBrowsing from '../brewery/BreweryCardBrowsing'

const BreweriesContainer =({filterBrew}, props )=> {
    const renderedFilterBrew = filterBrew.map((brew) => {
    return (
        <BreweryCardBrowsing key={brew.id} brewery={brew}/>  
        )
    })
        return <div className="ui five column doubling stackable grid" id="breweries-div">{renderedFilterBrew}</div>
}

export default BreweriesContainer;
