import { useState, useEffect } from "react";

const SportUpdate = () => {
  let [sport, setSport] = useState([]);

  useEffect(() => {
    fetch("https://weatherapi-com.p.rapidapi.com/sports.json?q=London", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
        "x-rapidapi-key": "9585f8a376mshf08929124c822fep1573b4jsnf2b630ebc68b",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setSport(data.football);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="updates">
     {sport.slice(0, 5).map(({match, start, tournament}) => (
       <div className="box">
         <h4 id="match">{match}</h4>
         <span id="startTime">{start}</span>
         <h4>{tournament}</h4>
       </div>
     ))}
    </div>
  );
};

export default SportUpdate;
