import { ReactNode } from 'react';

type WindowPopType = {
  children?: ReactNode[] | ReactNode,
  pos?: {
    top?: number,
    left?: number,
    right?: number,
    bottom?: number,
  },
  refWin: any,
};

export default function WindowPop({ pos, children, refWin }: WindowPopType) {
  return (
    <div ref={refWin} style={pos} className={`window-pop-up`}>
      { children }
    </div>
  );
}
