import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Accordion = ({ hideSidebar, dropdownItems, className }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const router = useRouter();

  const handleDropdownClick = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  const isActiveLink = (url) => {
    return router.pathname === url;
  };

  return (
    <div className={`${className} flex flex-col items-start`}>
      {dropdownItems.map((item, index) => (
        <React.Fragment key={index}>
          {item.hasDropdown ? (
            <React.Fragment>
              <button
                className={`nav-item justify-between ${
                  activeDropdown === index ? 'active' : ''
                }`}
                onClick={() => handleDropdownClick(index)}
              >
                <div className="flex items-center space-x-2">
                  <span className='sidebar-icon'>{item.icon}</span>
                  <span className='sidebar-text'>{item.title}</span>
                </div>
                <ChevronDownIcon
                  className={`w-3 h-3 ${
                    activeDropdown === index ? '-rotate-90' : ''
                  }`}
                />
              </button>
              {activeDropdown === index && (
                <div className="flex flex-col items-start space-y-4 pl-5 py-2">
                  {item.subItems.map((subItem, subIndex) => (
                    <div key={subIndex} className={`flex items-center ${isActiveLink(subItem.url) ? 'active' : ''}`}>
                      <div className="w-[3px] h-[3px] ml-[10px] mr-3 rounded-full bg-white disc"></div>
                      <Link href={subItem.url} className={`text-sm ${isActiveLink(subItem.url) ? 'active' : ''}`}>
                        {subItem.title}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </React.Fragment>
          ) : (
            <Link href={item.url} className={`nav-item ${isActiveLink(item.url) ? 'active' : ''}`}>
              <div className="flex items-center space-x-2">
                <span className='sidebar-icon'>{item.icon}</span>
                <span className='sidebar-text'>{item.title}</span>
              </div>
            </Link>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};