import React from 'react';
import './Title.scss';

const Title = ({ title, subtitle }) => {
  return (
    <section className="title">
      <h1 className="title-text">{title}</h1>
      {subtitle && <p className="title-subtitle">{subtitle}</p>}
    </section>
  );
};

export default Title;