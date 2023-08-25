import React from 'react';
import Logo from '../UI/logo/Logo';
import Dropdown from '../UI/dropdown/Dropdown';
import { languages } from '../../utils/dropdownsItems';
import Navbar from '../Navbar/Navbar';
import { pages, usefulLinks } from '../../utils/navigation';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-settings">
          <div className="footer-logo">
            <Logo href='/' />
          </div>
          <div className="footer-language">
            <Dropdown itemsList={languages} />
          </div>
        </div>

        <div className="footer-links footer-map">
          <p className="footer-links__title">Карта сайта</p>
          <div className="footer-links__list">
            <Navbar navigation={pages} />
          </div>
        </div>

        <div className="footer-links footer-useful">
          <p className="footer-links__title">Полезные ссылки</p>
          <div className="footer-links__list">
            <Navbar navigation={usefulLinks} />
          </div>
        </div>

      </div>

      <p className="footer-copyrights">
        © 2023 EmiratesLaw
      </p>
    </footer>
  );
};

export default Footer;