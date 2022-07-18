import { useState, MouseEvent } from 'react';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { FiGithub } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';

type cardProps = {
  title: string,
  description: string,
  button: string[],
  img: {
    imgSrc: string,
    imgDescription: string,
  },
};

export default function Card({ title, description, img, button }:cardProps) {
  const [clicked, setClicked] = useState(false); 
  const [linkToSource, linkLiveVersion] = button;

  const openHandler = (e:MouseEvent<HTMLDivElement>) => {
    setClicked(true);
  }

  const closeHandler = () => {
    setClicked(false);
  }

  return (
    <article className={`card ${clicked ? 'modal' : ''}`}>
      <button id='close' onClick={closeHandler} type='button'><IoMdClose ></IoMdClose></button>
      <img src={img.imgSrc} alt={img.imgDescription} />
      <div onClick={openHandler} className="gray-screen">
        <div className="card-body">
          <h2 className="text-white">{title}</h2>
          <p>{description}</p>
          <div className="buttons gap-2">
            <a href={linkLiveVersion} className="btn btn-primary" target="_blank" rel="noreferrer"><BsBoxArrowUpRight /> Live Version</a>
            <a href={linkToSource} className="btn btn-primary" target="_blank" rel="noreferrer"><FiGithub /> Source Code</a>
          </div>
        </div>
      </div>
    </article>
  );
}
