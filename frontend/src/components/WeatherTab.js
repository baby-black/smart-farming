import React from "react";
import "../styles/WeatherTab.css";

function WeatherTab() {
  const weatherData = {
    temperature: 27,
    humidity: 65,
    soilMoisture: 70,
    analysis: "Độ ẩm phù hợp cho cây trồng.",
  };

  return (
    <div className="weather-tab">
      <h3>Dự Báo Thời Tiết</h3>
      <div className="weather-info">
        <div className="info-card">
          <img src="/assets/images/temperature-icon.png" alt="Temperature" />
          <h4>Nhiệt độ</h4>
          <p>{weatherData.temperature}°C</p>
        </div>
        <div className="info-card">
          <img src="/assets/images/humidity-icon.png" alt="Humidity" />
          <h4>Độ ẩm không khí</h4>
          <p>{weatherData.humidity}%</p>
        </div>
        <div className="info-card">
          <img src="/assets/images/soil-moisture.png" alt="Soil Moisture" />
          <h4>Độ ẩm đất</h4>
          <p>{weatherData.soilMoisture}%</p>
        </div>
      </div>
      <div className="analysis">
        <h4>Phân tích:</h4>
        <p className={weatherData.humidity < 50 ? "warning" : "good"}>
          {weatherData.analysis}
        </p>
      </div>
    </div>
  );
}

export default WeatherTab;
