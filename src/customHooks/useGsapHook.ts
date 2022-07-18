import { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';

export default function useGsapHook(options: any) {
  const [open, set] = useState(false);
  
  // create ref using useState and then we use pass our setRef function to the ref of object
  // we want to animate
  const [ref, setRef] = useState({});
  
  // memoise the inital timeline in a ref so it doesnt get recreated each render.
  const { current: tl } = useRef(gsap.timeline({ paused: true }));

  // maybe useLayoutEffect maybe better here?
  useEffect(() => {
    
    tl.to(ref, options);
    
  }, [ref, options, tl]);

  const animate = useCallback(() => {
    
    open ? tl.reverse() : tl.play();
    
    set(!open);
    
  }, [open, tl]);

  return [setRef, animate];
};
