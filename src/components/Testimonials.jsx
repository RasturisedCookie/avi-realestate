import React from "react";
import { testimonialsData } from "../assets/assets";

function Testimonials() {
  return (
    <div
      className="container mx-auto py-10 lg:px-32 w-full overflow-hidden"
      id="Testimonials"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customer
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Testimonials
        </span>
      </h1>
      <p className="ext-center text-gray-500 mb-8 max-w-80 mx-auto">
        Proven results, backed by client experience
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="max-w-[340px] border shadow-lg rounded px-8 py-12 tex-center"
          >
            <img
              className="w-20 h-20 rounded-full mx-auto mb-4"
              src={testimonial.image}
              alt={testimonial.alt}
            />
            <h2>{testimonial.name}</h2>
            <p>{testimonial.title}</p>
            {/* <div>
              {Array.from({ length: testimonials.rating }, (item, index) => (
                <img key={index} src={assets.star_icon} alt="" />
              ))}
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;