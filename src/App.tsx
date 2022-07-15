import { useState, useRef, useEffect, MouseEvent } from 'react';
import IntroSection from "./pages/IntroSection";
import AboutSection from "./pages/AboutSection";
import WorkSection from "./pages/WorkSection";
import Navbar from "./components/Navbar";
import ContactMeButton from "./components/ContactMeButton";
import WindowPopUp from "./components/WindowPop";
import ContactForm from "./components/ContactForm";
import { HiOutlineHome, HiOutlineBriefcase } from 'react-icons/hi'
import { FaRegEnvelope } from 'react-icons/fa';
import { SiAboutdotme } from 'react-icons/si';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { gsap } from 'gsap';

function App() {
  const [ showPopUp, setShowPopUp ] = useState(false);
  const myForm = useRef<HTMLDivElement>();
  let tl = useRef();
  let selector = gsap.utils.selector(myForm);

  const showPopUpHandler = (event: MouseEvent<HTMLButtonElement>) => {
    if(!tl.current.isActive())
      tl.current.resume();
    setShowPopUp(!showPopUp);
  }

  useEffect(() => {
    tl.current && tl.current.progress(0).kill();
    tl.current = gsap
      .timeline({ defaults: {duration: 0.35}})
      .to(myForm.current, {'clip-path': 'polygon(0% 0%, 7% 0%, 7% 100%, 0% 100%)'})
      .to(myForm.current, {'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'})
      .to(selector('.contact-me-form'), {opacity: 1})
      .pause();
  }, []);

  useEffect(() => {
    tl.current.reversed(!showPopUp);    
  }, [showPopUp]);

  return (
    <>
      <Navbar links={
        [
          {comp: <HiOutlineHome />, link: '#intro'},
          {comp: <HiOutlineBriefcase />, link: '#work'},
          {comp: <SiAboutdotme />, link: '#about'},
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
      <WindowPopUp pos={{bottom: '4rem', left: '2rem'}} refWin={myForm}>
        <ContactForm />
      </WindowPopUp>
      <ContactMeButton onClick={showPopUpHandler}>
        <FaRegEnvelope />
      </ContactMeButton>
      <IntroSection />
      <WorkSection />
      <AboutSection />
    </>
  );
}

export default App;
