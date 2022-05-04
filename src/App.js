import "./App.css";

import Location from "./components/Location";
import Weather from "./components/Weather";

function App() {

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="container min-vh-100 d-flex align-items-center">
        <div className="location-wrapper container text-center border">
          <Location/>
          <Weather/>
        </div>
      </div>
    </div>
  );
}

export default App;
