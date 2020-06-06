import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';
import { Map as MapContainer, Marker, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Leaflet from 'leaflet';

import MarkerImage from '../../../assets/marker-fim.png';
import { Container } from './styles';

export default function Map({ height, name, center, zoom }) {
  const markerRef = useRef(null);

  const [mapCenter, setMapCenter] = useState(center);
  const [markerPoint, setMarketPoint] = useState({
    lat: center[0],
    lng: center[1],
  });

  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      clearValue(_, value) {
        setMarketPoint(null);
      },
      getValue(_, value) {
        return markerPoint;
      },
      setValue(_, value) {
        setMarketPoint(JSON.parse(value));
        setMapCenter(JSON.parse(value));
      },
    });
  }, [fieldName, markerPoint, registerField]);

  const iconMarker = new Leaflet.Icon({
    iconUrl: MarkerImage,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  function updatePosition() {
    const marker = markerRef.current;
    if (marker != null) {
      setMarketPoint(marker.leafletElement.getLatLng());
    }
  }

  return (
    <Container style={{ height }}>
      <MapContainer
        center={mapCenter}
        zoom={zoom}
        style={{ width: '100%', height: '100%' }}
        animate>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          draggable
          onDragend={updatePosition}
          position={markerPoint}
          icon={iconMarker}
          ref={markerRef}
        />
      </MapContainer>
      {error && (
        <span className="error" style={{ color: 'red', fontSize: '0.8rem' }}>
          {error}
        </span>
      )}
    </Container>
  );
}

Map.propTypes = {
  name: PropTypes.string.isRequired,
  center: PropTypes.arrayOf(PropTypes.number),
  zoom: PropTypes.number,
  height: PropTypes.number,
};

Map.defaultProps = {
  center: [-15.791672, -47.883388],
  zoom: 11,
  height: 200,
};
