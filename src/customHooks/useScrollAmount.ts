import { useState, useEffect } from 'react';

export default function useScrollAmount(max: number = 100) {
  const [ position, setPosition ] = useState<number>(0);
  let acumulator = 0;
  let previousPosition = 0;

  console.log(position)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const currentPosition = window.scrollY;

    })
  }, [])

  return position;
}
