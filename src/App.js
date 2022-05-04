import "./App.css";
import Location from "./components/Location";

function App() {

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="container min-vh-100 d-flex align-items-center">
        <div className="location-wrapper container text-center border">
          <Location/>
        </div>
      </div>
    </div>
  );
}

export default App;
