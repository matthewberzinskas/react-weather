import "./styles/App.css";

import Location from "./components/Location";
import Weather from "./components/Weather";

function App() {

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="container min-vh-100 d-flex align-items-center">
        <div className="wrapper container text-center w-75">
          <Location/>
          <Weather/>
        </div>
      </div>
    </div>
  );
}

export default App;
