import { BsBoxArrowUpRight } from 'react-icons/bs';
import { RiSingleQuotesL, RiSingleQuotesR } from 'react-icons/ri';

export type testimonial = {
  image: string,
  name: string,
  testimonial: string,
  link: string,
  header: string,
};

export default function Testimonial({ name, testimonial, link, image, header }: testimonial) {
  return (
    <article className="testimonial">
      <figure className='testimonial-image-wrapper'>
        <img src={image} alt="user" />
      </figure>
      <div className="testimonial-body">
        <h2 className="text-primary">{name}</h2>
        <h3>
          {header}</h3>
        <p>
          <RiSingleQuotesL />
          <RiSingleQuotesL />
          {testimonial}
          <RiSingleQuotesR />
          <RiSingleQuotesR />
        </p>
        <div className="buttons gap-2">
          <a href={link} className="btn btn-primary" target="_blank" rel="noreferrer"><BsBoxArrowUpRight />See Linkedin</a>
        </div>
      </div>
    </article>
  );
}
