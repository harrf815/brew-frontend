import React, { Component } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken =
"pk.eyJ1IjoiYmVlcnByb2plY3QiLCJhIjoiY2ttcDZ0NDFpMmM0azJ1bW5xaGlxbzZ4NCJ9.L45VapIfT54wkoWGJ4wOag";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -122.33,
      lat: 47.6 ,
      zoom: 9,
    };
    this.mapContainer = React.createRef();
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/beerproject/ckmq398od0q8g17s35o4biozs",
      center: [lng, lat],
      zoom: zoom,
    });

    map.on('move', () => {
      this.setState({
      lng: map.getCenter().lng.toFixed(4),
      lat: map.getCenter().lat.toFixed(4),
      zoom: map.getZoom().toFixed(2)
      });
      });
  }

  

  render() {
    const { lng, lat, zoom } = this.state;
    return (
    <div id="mapbox-wrapper">
      <div className="mapboxgl-canvas">
        <div className="sidebar">
             Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
        <div ref={this.mapContainer} className="map-container" />
        </div>
    </div>
    );
    }
}

export default Map
