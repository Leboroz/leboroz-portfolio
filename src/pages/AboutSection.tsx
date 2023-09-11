import { useRef, useEffect } from 'react';
import { Tooltip } from 'react-tooltip';
import { gsap } from 'gsap';
import { BsDownload } from 'react-icons/bs';
import { MyAccordion } from '../components/MyAccordion';

export default function AboutSection() {
  const aboutSection = useRef<any>();

  useEffect(() => {
    const section = gsap.utils.selector(aboutSection);
    let mm = gsap.matchMedia();
    mm.add("(min-width: 992px)", () => {
      gsap
        .to(section('#aboutContent'), {
          'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          transform: 'translateY(-20%)',
          delay: 0.5,
          scrollTrigger: {
            trigger: '#about'
          }
        });
    });
  }, [])

  const downloadHandler = () => {
    fetch('leonardo-albornoz-resume.pdf').then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'leonardo-albornoz-resume.pdf';
        alink.click();
      })
    })
  }

  return (
    <>
      <section ref={aboutSection} id="me" className="about-section section flex column a-center end-of-page">
        <article id="aboutContent" className="about-section-content text-white flex column gap-1">
          <h2 className="letter-gap weight-300 fs-3">About</h2>
          <p className="fs-2">
            Hello! My name is Leonardo and I enjoy creating things that live on the internet. Having me in your team means that you will not have to worry about any deadline.
          </p>
          <p className='fs-2'>
            I am a Full Stack software developer currently looking for an opportunity to work with an innovative team in a growing environment using the latest technologies.
          </p>
          <p className="fs-2">
            I’ve had the privilege of working with developers from all around the world building responsive websites ready to scale. My main focus is to build accessible, inclusive products and digital experiences.
          </p>
          <button id="resume" className="btn btn-primary" onClick={downloadHandler} type="button"><BsDownload /> Resume</button>
        </article>
        <div>
          <MyAccordion />
        </div>
      </section>
      <Tooltip
        anchorId='resume'
        place='bottom'
        delayShow={500}
        content='Download my resume'
      />
    </>
  );
}
