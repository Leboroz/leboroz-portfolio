import { ReactNode } from "react";
import { MouseEventHandler } from 'react';

type ContactMeButtonType = {
  onClick?: MouseEventHandler,
  children?: ReactNode[] | ReactNode,
}

export default function ContactMeButton({onClick, children}: ContactMeButtonType) {
  return (
    <button onClick={onClick} className="btn btn-primary btn-contact">
      {children}
    </button>
  );
}
