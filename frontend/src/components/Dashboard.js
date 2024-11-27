import React, { useState } from "react";
import "../styles/Dashboard.css";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";
import WeatherTab from "./WeatherTab"; // Đảm bảo import WeatherTab ở đây

function Dashboard() {
  const [selectedTab, setSelectedTab] = useState("overview");

  // Dữ liệu cho biểu đồ
  const chartOptions = {
    chart: { id: "temperature-chart", animations: { enabled: true } },
    xaxis: { categories: ["1h", "2h", "3h", "4h", "5h"] },
    colors: ['#ff5722'],
  };

  const chartSeries = [{ name: "Nhiệt độ", data: [25, 28, 30, 27, 26] }];

  // Nội dung từng tab
  const renderTabContent = () => {
    switch (selectedTab) {
      case "overview":
        return (
          <div className="overview-content">
            <div className="chart-container">
              <Chart
                options={chartOptions}
                series={chartSeries}
                type="line"
                height={250}
              />
            </div>
            <div className="stats-container">
              <div className="stat-card">
                <img src="/assets/images/temperature-icon.png" alt="Temperature" />
                <h3>Nhiệt độ</h3>
                <p>27°C</p>
              </div>
              <div className="stat-card">
                <img src="/assets/images/soil-icon.png" alt="Soil Moisture" />
                <h3>Độ ẩm đất</h3>
                <p>65%</p>
              </div>
              <div className="stat-card">
                <img src="/assets/images/plant-icon.png" alt="Plant Health" />
                <h3>Trạng thái cây trồng</h3>
                <p>Khỏe mạnh</p>
              </div>
            </div>
          </div>
        );
      case "weather":
        return <WeatherTab />;
      case "irrigation":
        return (
          <div className="irrigation-tab">
            <h3>Cài Đặt Tưới Nước Tự Động</h3>
            <div className="irrigation-settings">
              <label>
                <span>Độ ẩm mục tiêu (%):</span>
                <input type="number" defaultValue={65} />
              </label>
              <label>
                <span>Thời gian tưới (phút):</span>
                <input type="number" defaultValue={10} />
              </label>
              <label>
                <span>Chu kỳ tưới (giờ):</span>
                <input type="number" defaultValue={6} />
              </label>
              <button className="save-button">Lưu Cài Đặt</button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Bảng Điều Khiển Smart Farming</h2>
      <div className="tab-navigation">
        <button
          className={selectedTab === "overview" ? "active" : ""}
          onClick={() => setSelectedTab("overview")}
        >
          Tổng Quan
        </button>
        <button
          className={selectedTab === "weather" ? "active" : ""}
          onClick={() => setSelectedTab("weather")}
        >
          Thời Tiết
        </button>
        <button
          className={selectedTab === "irrigation" ? "active" : ""}
          onClick={() => setSelectedTab("irrigation")}
        >
          Tưới Nước
        </button>
      </div>
      <div className="tab-content">{renderTabContent()}</div>
    </div>
  );
}

export default Dashboard;
