import React from "react";
import Slider from "react-slick";

const ReviewCarousel = ({ reviews }) => {
  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, // Enable auto-scroll
    autoplaySpeed: 3000, // Time delay between slides (ms)
    pauseOnHover: true, // Pause auto-scroll when hovering over a slide
  };

  return (
    <div id="testimonials" className="max-w-4xl mx-auto py-8">
      <h2 className="text-3xl font-semibold text-center mb-6">
        What People Say
      </h2>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="p-6 bg-gray-100 rounded-lg ">
            <p className="text-xl italic text-gray-800 text-center">
              "{review.text}"
            </p>
            <div className="mt-4 flex justify-center items-center flex-col">
              <h3 className="text-lg font-semibold">{review.author}</h3>
              <p className="text-sm text-gray-600">— {review.position}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewCarousel;
