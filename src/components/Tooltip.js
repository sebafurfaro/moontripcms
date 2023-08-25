import React, { useState } from 'react';

const Tooltip = ({ text, children }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  return (
    <div className="relative inline-block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {isTooltipVisible && (
        <div className="tooltip text-white text-sm font-thin tracking-wide bg-slate-900 rounded p-2 absolute left-full ml-2 top-1/2 transform -translate-y-1/2 opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
