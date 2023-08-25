import React from 'react';
import { register } from 'swiper/element/bundle';
import './Title.scss';

register();

const MainTitle = () => {
  return (
    <section className="title main-title">
      <div className="title-body title-slider">
        <swiper-container
          class="title-slider__wrapper"
          pagination="true"
          loop="true"
          css-mode="true"
        >
          <swiper-slide className="title-slider__slide">
            <span className="title-slider__slide-subtitle">Просто</span>
            <h1 className="title-slider__slide-title">Законодательство<br />Арабских Эмиратов</h1>
          </swiper-slide>
          <swiper-slide className="title-slider__slide">
            <span className="title-slider__slide-subtitle">Быстро</span>
            <h1 className="title-slider__slide-title">Вся Информация<br />На Одном Сайте</h1>
          </swiper-slide>
          <swiper-slide className="title-slider__slide">
            <span className="title-slider__slide-subtitle">Эффективно</span>
            <h1 className="title-slider__slide-title">Только Актуальные<br />Законы ОАЭ</h1>
          </swiper-slide>
        </swiper-container>

        <div className="title-slider__pagination">
          <div className="title-slider__pagination-pages">
            <button className="title-slider__pagination-page">
              <span className="title-slider__pagination-page-number">01</span>
              <span className="title-slider__pagination-page-text">Просто</span>
            </button>
            <button className="title-slider__pagination-page">
              <span className="title-slider__pagination-page-number">02</span>
              <span className="title-slider__pagination-page-text">Быстро</span>
            </button>
            <button className="title-slider__pagination-page">
              <span className="title-slider__pagination-page-number">03</span>
              <span className="title-slider__pagination-page-text">Эффективно</span>
            </button>
          </div>

          <div className="title-slider__pagination-loading"></div>
        </div>

      </div>
    </section>
  );
};

export default MainTitle;