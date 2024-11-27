//  Tự động hóa tưới nước
import React, { useState } from 'react';

const AutoIrrigation = () => {
  const [irrigationLevel, setIrrigationLevel] = useState(50);

  const handleIrrigationChange = (event) => {
    setIrrigationLevel(event.target.value);
  };

  return (
    <div className="auto-irrigation">
      <h3>Tưới Nước Tự Động</h3>
      <div>
        <label htmlFor="irrigationLevel">Lượng nước (0 - 100):</label>
        <input
          type="range"
          id="irrigationLevel"
          min="0"
          max="100"
          value={irrigationLevel}
          onChange={handleIrrigationChange}
        />
        <p>Lượng nước hiện tại: {irrigationLevel}%</p>
      </div>
    </div>
  );
};

export default AutoIrrigation;
