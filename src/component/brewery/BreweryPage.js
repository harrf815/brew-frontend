import React from 'react'
import { Link } from 'react-router-dom';

const BreweryPage = (props) => {
    console.log(props)
    return (
        <div >
            {props.brew.name}
      </div>
    )
}

export default BreweryPage;