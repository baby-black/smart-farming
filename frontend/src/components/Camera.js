// Giám sát camera
import React from 'react';
import '../styles/Camera.css';
import cameraImage from '../assets/camera-view.jpg';

function Camera() {
  return (
    <div className="camera-container">
      <h2>Camera Giám Sát</h2>
      <img src={cameraImage} alt="Live Camera" className="camera-view" />
      <p>Giám sát chuyển động 24/7.</p>
    </div>
  );
}

export default Camera;
