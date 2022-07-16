import { ReactNode } from 'react';
import { IoMdClose } from 'react-icons/io';

type WindowPopType = {
  children?: ReactNode[] | ReactNode,
  pos?: {
    top?: number | string,
    left?: number | string,
    right?: number | string,
    bottom?: number | string,
  },
  refWin: any,
  onClick: () => void,
};

export default function WindowPop({ onClick, pos, children, refWin }: WindowPopType) {
  return (
    <div ref={refWin} style={pos} className={`window-pop-up`}>
      <button onClick={onClick} className="close-button"><IoMdClose /></button>
      { children }
    </div>
  );
}
