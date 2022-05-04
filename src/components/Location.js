import { useEffect, useState } from "react";

export default function Location() {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);

      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });

    fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result);
          console.log(JSON.stringify(result, null, 3));
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading location...</div>;
  } else {
    return (
      <div className="location container">
        <div class="row">
          <div class="col">Current Location: {data.city}, {data.countryCode}</div>
        </div>
      </div>
    );
  }
}
