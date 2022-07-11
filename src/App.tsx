import IntroSection from "./pages/IntroSection";
import Navbar from "./components/Navbar";
import ContactMeButton from "./components/ContactMeButton";
import { HiOutlineHome, HiOutlineBriefcase } from 'react-icons/hi'
import { SiAboutdotme } from 'react-icons/si';
import { FaRegEnvelope } from 'react-icons/fa';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

function App() {
  return (
    <>
      <Navbar links={
        [
          {comp: <HiOutlineHome />, link: '#'},
          {comp: <HiOutlineBriefcase />, link: '#'},
          {comp: <SiAboutdotme />, link: '#'},
          {comp: <FaRegEnvelope />, link: '#'},
        ]
      }/>
      <Navbar className="socials" links={
        [
          {comp: <FiGithub />, link: 'https://github.com/leboroz'},
          {comp: <FiLinkedin />, link: 'https://linkedin.com/in/leboroz'},
        ]
      }><div className="line"></div></Navbar>
      <ContactMeButton />
      <IntroSection />
    </>
  );
}

export default App;
