import { useState, useCallback, useRef, useEffect } from 'react';
import { IntroSection, AboutSection, WorkSection } from './pages';
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";
import ContactMeButton from "./components/ContactMeButton";
import WindowPopUp from "./components/WindowPop";
import ContactForm from "./components/ContactForm";
import { HiOutlineHome, HiOutlineBriefcase } from 'react-icons/hi'
import { FaRegEnvelope } from 'react-icons/fa';
import { SiAboutdotme } from 'react-icons/si';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BsWhatsapp } from 'react-icons/bs';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<string>('#intro');
  const myForm = useRef<HTMLDivElement | undefined>();
  const app = useRef<any>();
  const tl = useRef<any>();
  useEffect(() => {
    let selector = gsap.utils.selector(myForm);
    const section = gsap.utils.selector(app);
    gsap
      .timeline({ defaults: { duration: 2 } })
      .to(section('.navbar, .socials'), { delay: 3, duration: 0.5, transform: 'translateY(-50%) scale(1)' });

    tl.current = gsap.timeline({ paused: true, defaults: { duration: 0.35 } })
      .to(myForm.current!, { 'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' })
      .to(selector('.contact-me-form'), { opacity: 1 })
  }, []);

  useEffect(() => {
    const sections: NodeListOf<HTMLElement> = app.current.querySelectorAll('.section');

    window.addEventListener('scroll', () => {
      let listSize: number = sections.length;
      while (--listSize && window.scrollY + 90 < sections[listSize].offsetTop) { }
      setCurrentPage("#" + sections[listSize].id);
    });
  }, []);

  const animate = useCallback(() => {
    showPopUp ? tl.current!.reverse() : tl.current!.play();
    setShowPopUp(!showPopUp);
  }, [showPopUp, tl]);


  return (
    <div ref={app}>
      <LoadingScreen />
      <Navbar place="right" active={currentPage} links={
        [
          { comp: <HiOutlineHome />, link: '#intro', name: 'home', tip: 'Introduction', content: "Introduction Section" },
          { comp: <HiOutlineBriefcase />, link: '#project', name: 'work', tip: 'Projects', content: "Workspace Section" },
          { comp: <SiAboutdotme />, link: '#me', name: 'about', tip: 'About', content: "About Me Section" },
        ]

      } />
      <Navbar place="left" className="socials" links={
        [
          { comp: <FiGithub />, link: 'https://github.com/leboroz', name: 'github', tip: 'Github', content: "Github link" },
          { comp: <FiLinkedin />, link: 'https://linkedin.com/in/leboroz', name: 'linkedin', tip: 'Linkedin', content: "Linkedin link" },
          { comp: <BsWhatsapp />, link: 'https://wa.me/+584246198899', name: 'Whatsapp', tip: 'Whatsapp', content: "Whatsapp link" },
          { comp: <FiTwitter />, link: 'https://twitter.com/leboroz', name: 'Twitter', tip: 'Twitter', content: "Twitter link" },
          { comp: <FiInstagram />, link: 'https://www.instagram.com/leonardo_albornoz/', name: 'Instagram', tip: 'Instagram', content: "Instagram link" },
        ]
      } blank>
        <div className="line"></div>
      </Navbar>
      <WindowPopUp onClick={animate} pos={{ bottom: '4rem', left: '2rem' }} refWin={myForm}>
        <ContactForm onClick={animate} />
      </WindowPopUp>
      <ContactMeButton onClick={animate} content="Contact me">
        <FaRegEnvelope />
      </ContactMeButton>
      <IntroSection />
      <WorkSection />
      <AboutSection />
    </div>
  );
}
