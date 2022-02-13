import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [weather, setweather] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getweather() {
      try {
        let response = await fetch(
          "https://weatherapi-com.p.rapidapi.com/current.json?q=102.89.34.220",
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
              "x-rapidapi-key":
                "9585f8a376mshf08929124c822fep1573b4jsnf2b630ebc68b",
            },
          }
        );

        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }

        let data = await response.json();
        setweather(data);
        console.log(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    getweather();
  }, []);

  return (
    <div className="App">
      {/* {[weather].map(({current, location}) => (
     <h1>{location.name}</h1>
   ))} */}

      <div className="theBody">
        
      </div>
    </div>
  );
}

export default App;
