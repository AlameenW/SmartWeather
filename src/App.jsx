import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./App.css";
import DataPanel from "./components/DataPanel";
import axios from "axios";
import SummaryItems from "./components/SummaryItems";

function App() {
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const API_KEY = import.meta.env.VITE_API_KEY;
  const city = "Houston";
  useEffect(() => {
    const fetchCoordinates = async (cityName) => {
      try {
        const response = await axios.get(
          `http://api.openweathermap.org/geo/1.0/direct?q=Houston&limit=5&appid=${API_KEY}`
        );
        setLatitude(response.data[0].lat);
        setLongitude(response.data[0].lon);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCoordinates(city);
  }, []);

  return (
    <div>
      <div className="container app-container">
        <header>
          <h1>SmartWeather</h1>
          <h3>
            Predicted weather information for the next week in {city}, USA
          </h3>
        </header>
        <nav>
          <div>
            <a href="/">Dashboard</a>
          </div>
          <div>
            <a href="/">Hourly Forecast</a>
          </div>
          <div>
            <a href="">Minutely Forecase</a>
          </div>
        </nav>
        <main>
          <section className="summary m-5">
            <SummaryItems
              location={city}
              duration="8 Day Forecast"
              coordinates={[longitude.toFixed(2), latitude.toFixed(2)]}
            />
          </section>
          <div className="data-panel">
            {latitude != 0 && longitude != 0 && (
              <DataPanel
                lat={latitude.toFixed(2)}
                long={longitude.toFixed(2)}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
