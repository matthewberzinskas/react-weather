import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SET_WEATHER } from "../redux/weatherSlice";

export default function Weather() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const coords = useSelector((state) => state.location.coords);
  const temp = useSelector((state) => state.weather.temp);
  const loaded = useSelector((state) => state.location.loaded);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchWeather = () => {
      //Fetch location from lat/long
      console.log(
        `Retrieving weather data for lat/long...[${coords.lat}, ${coords.lon}]`
      );

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            dispatch(SET_WEATHER(result));
            console.log(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    };

    if (loaded) {
      //fetchWeather();
    } else {
      console.log("Coords not loaded, don't fetch weather.");
    }
  }, [coords.lat, coords.lon, dispatch, loaded]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (<div className="temp">
      65<span className="degree">&deg;</span>
    </div>
    );
  } else {
    return <div>Current Temperature: {temp} </div>;
  }
}
