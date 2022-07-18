import { useState, useCallback, useRef, useEffect } from 'react';
import IntroSection from "./pages/IntroSection";
import AboutSection from "./pages/AboutSection";
import WorkSection from "./pages/WorkSection";
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";
import ContactMeButton from "./components/ContactMeButton";
import WindowPopUp from "./components/WindowPop";
import ContactForm from "./components/ContactForm";
import { HiOutlineHome, HiOutlineBriefcase } from 'react-icons/hi'
import { FaRegEnvelope } from 'react-icons/fa';
import { SiAboutdotme } from 'react-icons/si';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [ showPopUp, setShowPopUp ] = useState<boolean>(false);
  const [ currentPage, setCurrentPage ] = useState<string>('intro');
  const myForm = useRef<HTMLDivElement | undefined>();
  const app = useRef<any>();
  const tl = useRef<any>();


  useEffect(() => {
    let selector = gsap.utils.selector(myForm);
    const section = gsap.utils.selector(app);
    gsap
      .timeline({ defaults: { duration: 2 }})
      .to(section('.navbar, .socials'), {delay: 3, duration: 0.5, transform: 'translateY(-50%) scale(1)' });

    tl.current = gsap.timeline({ paused: true, defaults: {duration: 0.35}}) 
      .to(myForm.current!, {'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'})
      .to(selector('.contact-me-form'), {opacity: 1})
  }, []);

  useEffect(() => {
    const sections: NodeListOf<HTMLElement> = app.current.querySelectorAll('.section');

    window.addEventListener('scroll', () => {
      let listSize: number = sections.length;
      while(--listSize && window.scrollY + 90 < sections[listSize].offsetTop){}
      setCurrentPage(sections[listSize].id);
    });
  }, []);

  const animate = useCallback(() => {
    showPopUp ? tl.current!.reverse() : tl.current!.play();
    setShowPopUp(!showPopUp);
  }, [showPopUp, tl]);


  return (
    <div ref={app}>
      <LoadingScreen />
      <Navbar active={currentPage} links={
        [
          {comp: <HiOutlineHome />, link: 'intro'},
          {comp: <HiOutlineBriefcase />, link: 'work'},
          {comp: <SiAboutdotme />, link: 'about'},
        ]
      }/>
      <Navbar className="socials" links={
        [
          {comp: <FiGithub />, link: 'https://github.com/leboroz'},
          {comp: <FiLinkedin />, link: 'https://linkedin.com/in/leboroz'},
        ]
      }>
        <div className="line"></div>
      </Navbar>
      <WindowPopUp onClick={animate} pos={{bottom: '4rem', left: '2rem'}} refWin={myForm}>
        <ContactForm onClick={animate} />
      </WindowPopUp>
      <ContactMeButton onClick={animate}>
        <FaRegEnvelope />
      </ContactMeButton>
      <IntroSection />
      <WorkSection />
      <AboutSection />
    </div>
  );
}
