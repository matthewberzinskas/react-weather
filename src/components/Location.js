import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SET_LOCATION, SET_COORDS } from "../redux/locationSlice";

export default function Location() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  //Get data from REDUX
  const location = useSelector((state) => state.location.data);
  const coords = useSelector((state) => state.location.coords)
  const dispatch = useDispatch();

  useEffect(() => {
    //Retrieve lat/long
    console.log("Getting lat/long...");
    const fetchLocation = () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);

        dispatch(SET_COORDS([position.coords.latitude, position.coords.longitude]));
      });
    };

    fetchLocation();
  }, [dispatch]);

  useEffect(() => {
    const fetchLocation = () => {
      //Fetch location from lat/long
      console.log("Retrieving location data from lat/long...");
      fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${coords.lat}&longitude=${coords.lon}&localityLanguage=en`
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            dispatch(SET_LOCATION(result));
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    };

    if (coords.lat !== "" || coords.lon !== "") {
      //Geolocation promise has resolved, so fetch location
      fetchLocation();
    }
  }, [coords.lat, coords.lon, dispatch]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading location...</div>;
  } else {
    return (
      <div className="location container">
        <div className="row">
          <div className="col">
            Current Location: {location.city}, {location.countryCode}
          </div>
        </div>
      </div>
    );
  }
}
