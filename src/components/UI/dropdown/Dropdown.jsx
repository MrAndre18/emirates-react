import React, { useState } from 'react';
import { ReactComponent as DropdownArrow } from '../../../assets/images/svg/drop-down.svg';

const Dropdown = ({ itemsList }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="dropdown">
      <button className="dropdown-btn">
        <span className="dropdown-btn__text">RU</span>
        <div className="dropdown-btn__arrow">
          <DropdownArrow />
        </div>
      </button>

      <ul className="dropdown-list">
        {itemsList.map((item, index) =>
          <li key={index} className="dropdown-item">{item.name}</li>
        )}
      </ul>
    </div>
  );
};

export default Dropdown;