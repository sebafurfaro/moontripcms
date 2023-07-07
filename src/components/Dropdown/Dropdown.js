import React, { useState } from 'react';

export const Dropdown = ({ dropdownItems }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownClick = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  return (
    <div className="dropdown-menu">
      {dropdownItems.map((item, index) => (
        <React.Fragment key={index}>
          <button
            className={`dropdown-button ${activeDropdown === index ? 'active' : ''}`}
            onClick={() => handleDropdownClick(index)}
          >
            {item.title}
          </button>
          {activeDropdown === index && (
            <ul className="dropdown-items">
              {item.subItems.map((subItem, subIndex) => (
                <li key={subIndex}>{subItem}</li>
              ))}
            </ul>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

