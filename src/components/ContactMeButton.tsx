import { ReactNode } from "react";
import { MouseEventHandler } from 'react';
import { Tooltip } from 'react-tooltip';

type ContactMeButtonType = {
  onClick?: MouseEventHandler,
  children?: ReactNode[] | ReactNode,
  content: string,
}

export default function ContactMeButton({ onClick, children, content }: ContactMeButtonType) {

  return (
    <>
      <button id="contactButton" onClick={onClick} className="btn btn-primary btn-contact">
        {children}
        <span className='visually-hidden'>{content}</span>
      </button>
      <Tooltip
        anchorId="contactButton"
        place="top"
        content="Contact Me"
        delayShow={500}
      />
    </>
  );
}
