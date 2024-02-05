import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import '../../../node_modules/leaflet/dist/leaflet.css'

const Map = (props) => {
  const mapRef = useRef(null);
  const markersRef = useRef([]);
  const [position,setposition]=useState({lat:"",lng:""})
  useEffect(() => {
    const map = L.map(mapRef.current, {
      center: [34.02022581858034,-6.833855795704044],
      zoom: 13,
      minZoom: 9,
      maxZoom: 18,
    });
    L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: '',
      maxZoom: 18,
    }).addTo(map);

    map.on('click', (e) => {
      const { lat, lng } = e.latlng;
      markersRef.current.forEach((marker) => {
        map.removeLayer(marker);
      });
      props.position(e.latlng)
      
      const newMarker = L.marker([lat, lng]).addTo(map);
      markersRef.current = [newMarker, ...markersRef.current];
    });

    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapRef} style={{ height: '400px' ,zIndex:3}} />;
};

export default Map;
