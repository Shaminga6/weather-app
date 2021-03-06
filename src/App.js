import { useState, useEffect } from "react";
import SportUpdate from "./components/SportUpdate";
import loader from "./loader.gif"
// import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [weather, setweather] = useState(null);

  useEffect(() => {
    async function getMovies() {
      try {
        let response = await fetch("https://weatherapi-com.p.rapidapi.com/current.json?q=uturu", {
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
            "x-rapidapi-key": "9585f8a376mshf08929124c822fep1573b4jsnf2b630ebc68b"
          }
        })

        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }

        let data = await response.json();
        setweather(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }
    getMovies();
  }, []);

  return (
    <div className="App">
      <div className="theBody">
        {loading && <h1>loading...</h1>}

        {error && <div>{error}</div>}

        {!loading && !error && weather && <WeatherDisplay data={weather} />}

        {/* ======================================================= */}
      </div>
    </div>
  );
}


function WeatherDisplay(props) {
  let { location, current } = props.data;

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <span id="state">{location.name} </span>
          <span id="country">{location.country}</span>
          <span id="date">{location.localtime}</span>
          <img src={current.condition.icon} id="icon" />
          <span id="iconText">{current.condition.text}</span>
        </div>

        <div className="col">
          <span id="temperature">{Math.floor(current.temp_c)}&deg; </span>
          <span id="subTemp">
            {Math.floor(current.feelslike_c)}&deg; /{" "}
            {Math.floor(current.feelslike_f)}&deg;
          </span>
        </div>
      </div>

      <SportUpdate />
    </div>
  );
}

export default App;
