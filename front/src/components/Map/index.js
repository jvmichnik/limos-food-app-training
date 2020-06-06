import React from 'react';
import PropTypes from 'prop-types';
import { Map as MapContainer, Marker, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Leaflet from 'leaflet';

import MarkerImage from '../../assets/marker-fim.png';
import { Container } from './styles';

export default function Map({ height, points, center, zoom }) {
  const iconMarker = new Leaflet.Icon({
    iconUrl: MarkerImage,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  function renderMarker() {
    if (points.length === 0) {
      return null;
    }

    return points.map(x => <Marker position={x} icon={iconMarker} />);
  }

  return (
    <Container style={{ height }}>
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ width: '100%', height: '100%' }}
        animate>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {renderMarker()}
      </MapContainer>
    </Container>
  );
}

Map.propTypes = {
  points: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  center: PropTypes.arrayOf(PropTypes.number),
  zoom: PropTypes.number,
  height: PropTypes.number,
};

Map.defaultProps = {
  center: [-15.791672, -47.883388],
  zoom: 11,
  height: 200,
};
