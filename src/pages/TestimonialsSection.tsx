import Testimonial, { testimonial } from '../components/Testimonial';
import dataTestimonials from "../utils/testimonials";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function TestimonialsSection() {

  return (
    <section
      id="testimonials"
      className="testimonials section bg-white flex column"
    >
      <h1 className="letter-gap weight-300 fs-3 mb-1">Testimonials</h1>
      <h2 className="weight-900 display-1 mb-1">What people say about me</h2>
      <Swiper
        className="swipper"
        slidesPerView={1}
        spaceBetween={26}
        breakpoints={{
          576: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          993: {
            slidesPerView: 3,
            spaceBetween: 40
          }
        }}
      >
        {dataTestimonials.testimonials.map((testimonial: testimonial) => {
          return (
            <SwiperSlide>
              <Testimonial
                name={testimonial.name}
                testimonial={testimonial.testimonial}
                link={testimonial.link}
                image={testimonial.image}
                header={testimonial.header}
                key={testimonial.name}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section >
  );
}
