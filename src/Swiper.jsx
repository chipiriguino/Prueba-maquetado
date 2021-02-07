import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
import './Swiper.css';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const slides = [];
  for (let i = 0; i < 3; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <h5 className="txt-swiper">BCNScience</h5>
      </SwiperSlide>
      
    );
  }
  return (
    <React.Fragment>
      <div className="align-carousel">
      <Swiper
        id="main"
        thumbs={{ swiper: thumbsSwiper }}
        controller={{ control: controlledSwiper }}
        tag="section"
        wrapperTag="ul"
        navigation
        pagination
        spaceBetween={0}
        slidesPerView={1}
        onInit={(swiper) => swiper}
        onSlideChange={(swiper) =>  swiper.activeIndex}
      >
        {slides}
      </Swiper>
      </div>
    </React.Fragment>
  );
}

export default App;