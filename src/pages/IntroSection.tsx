import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function IntroSection() {
  const introSection = useRef<any>();

  useEffect(() => {
    const section = gsap.utils.selector(introSection);
    gsap.timeline({defaults: {duration: 2}}).to(section('.intro-section-content'),
      {
        'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        delay: 2,
        transform: 'translateY(-20%)',
      })
    .to(section('.bg-text'), { opacity: 0.1 });
  }, [])

  return (
    <section ref={introSection} id="intro" className="intro-section section flex column j-center">
      <span className="bg-text">DEVELOPER</span>
      <article className="intro-section-content text-white flex column gap-1">
        <h3 className="text-primary weight-600 fs-2">Hi! my name is,</h3>
        <h2 className="letter-gap weight-300 fs-3">Leonardo Albornoz</h2>
        <h1 className="weight-900 display-1">Full-stack Software Developer</h1>
        <p className="fs-2">
    Over the past 2 years, as a web builder, I’ve worked on several projects. I will successfully help you reach your goals. 
        </p>
      </article>
    </section>
  );
}
