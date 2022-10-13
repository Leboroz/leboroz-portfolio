import { useState, useEffect, MouseEvent } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import useWindowDimention from "../customHooks/useWindowDimention";
import Testimonial from "./Testimonial";

type testimonial = {};
type props = {
  collection: testimonial[];
};

/**
 * Displays a collection of equipment items
 * @params {props}  collection - an array of equipments to be displayed
 */
const Carousel = ({ collection }: props) => {
  const [size, setSize] = useState<number>(0);
  const [filteredList, setFilteredList] = useState<testimonial[]>([]);
  const [first, setFirst] = useState(0);
  const { width } = useWindowDimention();

  useEffect(() => {
    let newSize: number;
    if (width <= 572) {
      newSize = 1;
    } else if (width <= 768) {
      newSize = 2;
    } else if (width <= 1400) {
      newSize = 3;
    } else {
      newSize = 4;
    }

    setSize(newSize);
    /**
     * if the list is empty or the size has changed or the {filteredList}
     * does not matches the collection of equipments
     * filters a new list of length {size} starting from {first}
     */
    if (
      filteredList.length ||
      newSize !== filteredList.length ||
      collection[first] !== filteredList[0]
    ) {
      setFilteredList(
        collection.filter((_item, i) => i >= first && i < first + newSize)
      );
    }

    return () => setSize(0);
  }, [width, first, collection]);

  /**
   * returns an object containing the number of steps the
   * carousel will spin and also determines whether the carousel
   * has reached the edges.
   * @params {number} spinSize - the size of the carousel
   * @return {object} {disabled: boolean, move: number}
   */
  const spin = (spinSize: number) => {
    const movement = first + spinSize;

    if (movement < 0) {
      return { disabled: true, move: 0 };
    }
    if (movement >= collection.length) {
      return { disabled: true, move: first };
    }

    return { disabled: false, move: movement };
  };

  const carouselButtonPreviousHandler = () => {
    setFirst(spin(size * -1).move);
  };

  const carouselButtonNextHandler = () => {
    setFirst(spin(size).move);
  };

  return (
    <div data-testid="carousel" className="carousel">
      <button
        disabled={spin(size * -1).disabled}
        style={{
          transform: "translateY(-50%)",
          position: "absolute",
        }}
        onClick={carouselButtonPreviousHandler}
      >
        <BiLeftArrow />
      </button>
      <div className="cardContainer">
        {filteredList.map((item) => {
          return <></>;
        })}
      </div>
      <button
        disabled={spin(size).disabled}
        style={{
          transform: "translateY(-50%)",
          position: "absolute",
          right: 0,
        }}
        onClick={carouselButtonNextHandler}
      >
        <BiRightArrow />
      </button>
    </div>
  );
};

export default Carousel;
