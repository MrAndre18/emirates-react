import React from 'react';
import './CategoriesMenu.scss';
import { NavLink } from 'react-router-dom';

const CategoriesMenu = ({ categories }) => {
  return (
    <div className="categories">
      <button className="categories-back">Назад</button>
      <ul className="categories-list">
        {categories.map(category =>
          <li key={category.path} className="categories-item">
            <NavLink
              className="categories-link"
              to={category.path}
            >
              {category.name}
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default CategoriesMenu;