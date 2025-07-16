import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
const DataPanel = ({ lat, long }) => {
  const [forecastList, setForecastList] = useState([]);
  const [filteredForecast, setFilteredForecast] = useState([])
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [weatherInput, setWeatherInput] = useState('');
  useEffect(() => {
    const fetchForecasts = async () => {
      const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&appid=${API_KEY}&exclude=hourly`;
      try {
        const response = await axios.get(url);
        console.log(response);
        setForecastList(response.data.daily);
        setFilteredForecast(response.data.daily);
      } catch (error) {
        console.log(error);
      }
    };
    fetchForecasts();
  }, []);
  const filterForecast = (e) => {
    const currentInput = e.target.value.toLowerCase();
    setWeatherInput(currentInput);
    if (filteredForecast){
      if (currentInput === ''){
        setFilteredForecast(forecastList);
      }
      else{
        let filteredForecastList = forecastList.filter((forecast) =>
          forecast.weather[0].main.toLowerCase().startsWith(currentInput)
        );
        setFilteredForecast(filteredForecastList);
      }
    }
  }
  return (
    <>
      <div className="container">
        <div className="data-filters m-3">
          <div className="search-bar">
            <form>
              <input
                type="text"
                placeholder="Search weather..."
                value={weatherInput}
                onChange={filterForecast}
              />
            </form>
          </div>
          <div className="range-filter"></div>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Weather</th>
              <th>Description</th>
              <th>Humidity</th>
            </tr>
          </thead>
          <tbody>
            {forecastList &&
              filteredForecast.map((forecast) => (
                <tr key={filteredForecast.indexOf(forecast)}>
                  <td>{`Day ${filteredForecast.indexOf(forecast) + 1}`}</td>
                  <td>{forecast.weather[0].main}</td>
                  <td>{forecast.summary}</td>
                  <td>{forecast.humidity}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};
export default DataPanel;
