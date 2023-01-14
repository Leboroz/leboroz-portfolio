import { ReactNode } from "react";
import { MouseEventHandler } from 'react';
import { Tooltip } from 'react-tooltip';

type ContactMeButtonType = {
  onClick?: MouseEventHandler,
  children?: ReactNode[] | ReactNode,
}

export default function ContactMeButton({ onClick, children }: ContactMeButtonType) {

  return (
    <>
      <button id="contactButton" onClick={onClick} className="btn btn-primary btn-contact">
        {children}
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
