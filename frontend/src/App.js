import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import WeatherTab from "./components/WeatherTab";
import IrrigationTab from "./components/IrrigationTab";
import GuidePage from "./components/GuidePage";  // Import GuidePage
import '../src/styles/App.css';
import Browse from "./components/Browse"; // Import trang Browse


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/weather" element={<WeatherTab />} />
        <Route path="/irrigation" element={<IrrigationTab />} />
        <Route path="/guide" element={<GuidePage />} /> {/* Thêm Route cho trang hướng dẫn */}
        <Route path="/browse" element={<Browse />} /> {/* Đường dẫn tới Browse */}
      </Routes>
    </Router>
  );
}

export default App;
