import SwiperSlider from "@/components/miscellaneous/SwiperSlider/SwiperSlider";
import React from "react";
import "./Testimonial.scss";
const testimonialsDefault = [
  {
    text: "Upficient's approach was not only highly professional but also tailored to our specific needs, ensuring that every aspect of the project was aligned with our growth objectives.",
    author: "Tom, Lento Agency",
    location: "(Argentina)",
    image: "James.webp",
  },
  {
    text: "Upficient brought creative ideas to the table while demonstrating a reliable understanding of exactly what we needed built.",
    author: "Kyle, Ekko Group",
    location: "(Dubai)",
    image: "Tom.webp ",
  },
  {
    text: "Upficient revolutionized our operations with ClickUp, streamlining workflow and enhancing productivity in our growing digital marketing agency. Highly recommended! ",
    author: "Mieke, The Ola Agency",
    location: "(CPT)",
    image: "Emma.webp",
  },
];

interface TestimonialProps {
  text: string;
  author: string;
  location: string;
  image: string;
}

interface TestimonialsProps {
  data: {
    mainHeading: string;
    testimonials: TestimonialProps[];
  };
}
const Testimonial: React.FC<TestimonialsProps> = ({ data }) => {
  const { mainHeading = "TESTIMONIAL", testimonials = testimonialsDefault } =
    data;
  return (
    <section className="testimonial">
      <div className="container">
        <div className="row mx-0 justify-content-center">
          <div className="col-lg-8">
            <div className="testimonial-slider">
              <h4>{mainHeading}</h4>
              <SwiperSlider testimonials={testimonials} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const meta = {
  name: "TestimonialSection",
  fields: [
    { key: "mainHeading", label: "Main Heading", type: "text" },
    {
      key: "testimonials",
      type: "repeater",
      fields: [
        { key: "text", label: "Name", type: "text" },
        { key: "author", label: "Designation", type: "text" },
        { key: "location", label: "Description", type: "textarea" },
        { key: "image", label: "Image Source", type: "file" },
      ],
    },
  ],
};

export default Testimonial;
