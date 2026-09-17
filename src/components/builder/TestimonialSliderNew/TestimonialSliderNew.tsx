import React from "react";
import "./TestimonialSliderNew.scss";
import TestimonialInnerSlider from "@/components/miscellaneous/TestimonialInnerSlider/TestimonialInnerSlider";
import { url } from "inspector";
import { getImagePath } from "@/services/common.service";

const testimonialsDefault = [
  {
    text: "Upficient’s approach was not only highly professional but also tailored to our specific needs, ensuring that every aspect of the project was aligned with our growth objectives.",
    name: "Tom",
    company: "Lento Agency",
    location: "Argentina",
    image: "f05809e0f32c6e2008a255b28e6cac9b-1.png",
  },
  {
    text: "Upficient brought creative ideas to the table while demonstrating a reliable understanding of exactly what we needed built.",
    name: "Kyle",
    company: "Ekko Group",
    location: "UAE",
    image: "26254396754c2f8ab5c8e83e730d6139-1.png",
  },
  {
    text: "Upficient revolutionized our operations with ClickUp, streamlining workflow and enhancing productivity in our growing digital marketing agency. Highly recommended!",
    name: "Mieke",
    company: "The Ola Agency",
    location: "South Africa",
    image: "IMG_3533-copy-1-1.jpg",
  },
  {
    text: "Upficient delivered a fully customized ClickUp setup that perfectly matched our workflow needs, with every detail executed flawlessly. Huge thanks to Chris for his expertise and responsiveness - deliverables were not only spot-on but also delivered right on schedule.",
    name: "Yousaf",
    company: "The Company Films",
    location: "UAE",
    image: "unnamed.jpg",
  },
];

const TestimonialSliderNew = () => {
  return (
    <section
      className="upficient-testimonial-wrapper"
      style={{
        backgroundImage: `url('${getImagePath("Upficient-Assets-Testimonials 1.png")}')`,
      }}
    >
      <div className="container">
        <div className="row mx-0">
          <div className="col-lg-9 mx-auto">
            <div className="testimonialhead">
              <h2>FEATURED REVIEWS</h2>
            </div>
            <TestimonialInnerSlider testimonials={testimonialsDefault} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSliderNew;
