import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function AboutSection() {
  const aboutSection = useRef<any>();
  let tl = useRef<any>();

  useEffect(() => {
    const section = gsap.utils.selector(aboutSection);
    gsap
      .to(section('article'), {
        'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        transform: 'translateY(-20%)',
        delay: 0.5,
        scrollTrigger: {
          trigger: '#about'
        }
      });
  }, [])

  return (
    <section ref={aboutSection} id="about" className="about-section section flex a-center">
      <article className="about-section-content text-white flex column gap-1">
        <h2 className="letter-gap weight-300 fs-3">About</h2>
        <p className="fs-2">
          Hello! My name is Leonardo and I enjoy creating things that live on the internet. Having me in your team means that you will not have to worry about any deadline. 
        </p>
        <p className="fs-2">
          I’ve had the privilege of working with developers from all around the world building responsive websites ready to scale. My main focus is to build accessible, inclusive products and digital experiences.
        </p>
        <p className="fs-2">
          Here are a few technologies I’ve been working with recently:
        </p>
        <div className="flex gap-5">
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React</li>
          </ul>
          <ul>
            <li>Ruby</li>
            <li>Ruby on Rails</li> 
            <li>Node.js</li>
          </ul>
        </div>
      </article>
      <div></div>
    </section>
  );
}
