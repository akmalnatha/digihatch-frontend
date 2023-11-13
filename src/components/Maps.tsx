"use client";

import { useState, ChangeEvent, useCallback } from "react";
import React from "react";
import {
  GoogleMap,
  useLoadScript,
  useJsApiLoader,
  Marker,
} from "@react-google-maps/api";

// import houseData from "@/data/maps.json";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const Maps = ({aspectHeight, aspectWidth}:{aspectHeight:number; aspectWidth:number}) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCIhUtglT6YFezdl6bj0-ttZhcYiHrC90c",
  });

  console.log(aspectHeight)
  console.log(aspectWidth)

//   const [map, setMap] = useState(null);

//   const onLoad = useCallback(function callback(map: any) {
//     // This is just an example of getting and using the map instance!!! don't just blindly copy!
//     const bounds = new window.google.maps.LatLngBounds(center);
//     map.fitBounds(bounds);

//     setMap(map)
// }, [])

// const center = {
//     lat: -6.914744, lng: 107.60981
// }

//   const [deskripsiPribadi, setDeskripsiPribadi] = useState("");
//   const [deskripsiBisnis, setDeskripsiBisnis] = useState("");

//   const handleChange = (currentMarker: any) => {
//     props.onClick(currentMarker);
//   };

  return (
    <div>
      {isLoaded && aspectHeight!=0 && aspectWidth!=0 ? (
        <div className={`w-full h-full rounded-[10px]`} style={{ aspectRatio: `${aspectWidth} / ${aspectHeight}` }}>
          <GoogleMap
            zoom={17}
            center={{ lat: -6.914744, lng: 107.60981 }}
            mapContainerStyle={containerStyle}
            options={{
                mapTypeControl: false
            }}
          >
            {/* {props.currentMap.map((data: any, index: any) => (
              <Marker
                key={index}
                position={{ lat: data.lat_position, lng: data.long_position }}
                onClick={() => handleChange(data)}
              />
            ))} */}
            <Marker position={{ lat: -6.914744, lng: 107.60981 }}></Marker>
          </GoogleMap>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Maps