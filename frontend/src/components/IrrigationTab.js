import React, { useState } from "react";
import "../styles/IrrigationTab.css";

function IrrigationTab() {
  const [isIrrigationOn, setIrrigationOn] = useState(false);
  const [schedule, setSchedule] = useState("");
  const [soilMoisture, setSoilMoisture] = useState(65); // Độ ẩm mẫu

  const toggleIrrigation = () => {
    setIrrigationOn(!isIrrigationOn);
  };

  const handleScheduleChange = (e) => {
    setSchedule(e.target.value);
  };

  return (
    <div className="irrigation-tab">
      <h2>Cài Đặt Tưới Nước Tự Động</h2>

      <div className="control-panel">
        <div className="toggle-container">
          <label>Hệ thống tưới nước:</label>
          <button className={`toggle-button ${isIrrigationOn ? "on" : "off"}`} onClick={toggleIrrigation}>
            {isIrrigationOn ? "Bật" : "Tắt"}
          </button>
        </div>

        <div className="schedule-container">
          <label>Thời gian tưới nước:</label>
          <input
            type="time"
            value={schedule}
            onChange={handleScheduleChange}
          />
        </div>

        <div className="moisture-info">
          <h3>Độ ẩm hiện tại:</h3>
          <p>{soilMoisture}%</p>
          {soilMoisture < 50 ? (
            <p className="warning">Độ ẩm quá thấp! Hãy tưới nước ngay.</p>
          ) : (
            <p className="good">Độ ẩm phù hợp cho cây trồng.</p>
          )}
        </div>
      </div>

      <div className="history-container">
        <h3>Lịch sử tưới nước:</h3>
        <ul>
          <li>10:00 AM - Tưới nước</li>
          <li>05:00 PM - Tưới nước</li>
        </ul>
      </div>
    </div>
  );
}

export default IrrigationTab;
