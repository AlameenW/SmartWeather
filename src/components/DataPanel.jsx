import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from 'axios';
const DataPanel = ({lat, long}) => {
    const [forecastList, setForecastList] = useState([]);
    const API_KEY = import.meta.env.VITE_API_KEY;
    useEffect(() => {
        const fetchForecasts = async() => {
            const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&appid=${API_KEY}&exclude=hourly`;
            try{
                const response = await axios.get(url);
                console.log(response);
                setForecastList(response.data.daily);
            }
            catch(error){
                console.log(error);
            }
        }
        fetchForecasts();
    },[]);

    return (
      <>
        <div className="container">
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
                forecastList.map((forecast) => (
                  <tr key={forecastList.indexOf(forecast)}>
                    <td>{`Day ${forecastList.indexOf(forecast)+1}`}</td>
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
}
export default DataPanel;