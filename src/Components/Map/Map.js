import React from "react";
import { compose, withProps } from "recompose"
import { withGoogleMap, GoogleMap, DirectionsRenderer } from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `600px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withGoogleMap,
)((props) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 28.675723, lng: 77.112812 }}
    ref={(node) => props.getMapNode(node)}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
);

export default MyMapComponent;