import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import React, { Component } from "react";

const style = {
  width: "100%",
  height: "100%",
};
export class Location extends Component {
  render() {
    return (
      <div className="location">
        <Map
          className="location__map"
          google={this.props.google}
          zoom={14}
          style={style}
          initialCenter={{
            lat: 47.9179598893389,
            lng: 106.9131562422629,
          }}
        >
          <Marker onClick={this.onMarkerClick} name={"Current location"} />

          <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyB7nFE0x3wiaEXLc5pFsrD8jhW8ABRoInI",
})(Location);
