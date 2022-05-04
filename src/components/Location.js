import { useEffect } from 'react';

export default function Location () {
  
  useEffect(() => {

    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
    
  }, [])
}