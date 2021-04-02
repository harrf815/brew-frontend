import React from 'react'
import BreweryCardBrowsing from '../brewery/BreweryCardBrowsing'


const BreweriesContainer =({filterBrew}, props )=> {

    
    const assignPic = (name) => {
        let picName = name + `${Math.floor(Math.random() * 23) + 1}`
        let pic = require(`../../photo/brewerycard/${picName}.jpg`)
        return pic
      }
    const renderedFilterBrew = filterBrew.map((brew) => {
    return (
        <BreweryCardBrowsing key={brew.id} brewery={brew} brewpic={assignPic("beer")}/>  
        )
    })
        return <div className="ui five column doubling stackable grid" id="breweries-div">{renderedFilterBrew}</div>
}

export default BreweriesContainer;
