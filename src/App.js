import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://covid-19-data.p.rapidapi.com/totals?format=json", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "b927e5c4d7msh05ee8c5fc379ee9p1e330ejsnbe342d959e70",
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true);
        setItems(result[0]);
      });
  }, []);

  return (
    <div className="App">
      <div className="card">
        <h1 className="card-title">COVID-19 TOTAL'S</h1>
        <ul className="list-group list-group-flush">
          <li className="list-group-item bg-warning">
            <label>Confirmed : </label>
            {items.confirmed}
          </li>
          <li className="list-group-item ">
            <label>Recovered : </label>
            {items.recovered}
          </li>
          <li className="list-group-item ">
            <label>Critical : </label>
            {items.critical}
          </li>
          <li className="list-group-item bg-secondary">
            <label>Deaths : </label>
            {items.deaths}
          </li>
        </ul>
        <p>
          Last Update : <strong>{items.lastUpdate}</strong>
        </p>
      </div>
    </div>
  );
}

export default App;
