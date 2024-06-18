import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/Components/testimonials.css';
import { FaWindowMinimize, FaWindowMaximize, FaTimes } from "react-icons/fa";
import profile from "../../assets/test-profile.png"


import gsap from 'gsap';

const testimonials = [
    {
        id: 1,
        text: "Stefano takes the development process to another level. He is inspiring and always available to support the team with his positive attitude. I'm honored for the opportunity to work with him and to see the design to production process behind our projects. I highly recommend Stefano for your next projects.",
        author: "Riccardo Marconato",
        position: "Independent Product Designer",
        image: profile
    },
    {
        id: 2,
        text:  "Stefano takes the development process to another level. He is inspiring and always available to support the team with his positive attitude. I'm honored for the opportunity to work with him and to see the design to production process behind our projects. I highly recommend Stefano for your next projects.",
        author: "Lorenzo Bocchi",
        position: "Freelance Digital Designer & Founder @ Vool™",
        image: profile
    },
    {
      id: 3,
      text:  "Stefano takes the development process to another level. He is inspiring and always available to support the team with his positive attitude. I'm honored for the opportunity to work with him and to see the design to production process behind our projects. I highly recommend Stefano for your next projects.",
      author: "Lorenzo Bocchi",
      position: "Freelance Digital Designer & Founder @ Vool™",
      image: profile
  },
];

const TestimonialCarousel = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        beforeChange: (current, next) => setCurrentIndex(next),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    React.useEffect(() => {
        gsap.fromTo(".testimonial-card", {
            opacity: 0,
            // y: 20
        }, {
            duration: 0.5,
            opacity: 1,
            // y: 0,
            ease: "power3.out",
            stagger: 0.1
        });
    }, [currentIndex]);

    return (
        <div className="carousel-container">
            <div className="testimonial-head w-25 text-center m-auto">
                <h1>Nice thing <span className="people-says">peoples says</span> about my work</h1>
            </div>
            <Slider {...settings}>
                {testimonials.map(testimonial => (
                    <div key={testimonial.id}>
                        <div className="testimonial-card">
                          <div className="card-top">
                            <div className="icons text-end m-0 p-0">
                                <i><FaWindowMinimize /></i>
                                <i><FaWindowMaximize /></i>
                                <i><FaTimes /></i>
                                </div>
                          </div>
                          <div className="body-testimonials">
                          <img src={testimonial.image} alt={testimonial.author} className="testimonial-image" />
                            <p>{testimonial.text}</p>
                            <h4>{testimonial.author}</h4>
                            <h5>{testimonial.position}</h5>
                          </div>               
                        </div>
                    </div>
                ))}
            </Slider>
            <div className="slider-line-container">
                <div className="slider-line" style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }} />
            </div>
        </div>
    );
};

export default TestimonialCarousel;
