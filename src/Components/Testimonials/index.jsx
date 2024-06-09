import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { gsap } from 'gsap';
import 'swiper/swiper-bundle.min.css';
import '../../styles/Components/testimonials.css';

const SwiperComponent = () => {
  useEffect(() => {
    gsap.from('.testimonial', { opacity: 0, duration: 1, stagger: 0.3 });
  }, []);

  return (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="testimonial-content">
            <p>Stefano takes the development process to another level...</p>
            <span>Riccardo Marconato // Independent Product Designer</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="testimonial-content">
            <p>I've been working with Stefano for several years now...</p>
            <span>Lorenzo Bocchi // Freelance Digital Designer & Founder @ Vool™</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="testimonial-content">
            <p>Stefano is an experienced professional...</p>
            <span>Alessandro Tunno // Independent Creative Director</span>
          </div>
        </SwiperSlide>
        {/* Add more SwiperSlide components as needed */}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
