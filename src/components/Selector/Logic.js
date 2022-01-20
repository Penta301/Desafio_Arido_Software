import { useState } from "react";

const Logic = () => {
  const [show, setShow] = useState(false);

  const handleRef = (ref, value) => {
    ref.current = value;
  };

  const handleShow = () => {
    setShow(!show);
  };

  const openAnimation = {
    close: {
      height: 0,
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    },

    open: {
      height: "auto",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const variantsContainer = {
    open: {
      transition: { delay: 0.6, staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { delay: 0.6, staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1,
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    close: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return {
    handleRef,
    openAnimation,
    show,
    handleShow,
    variantsContainer,
    variants,
  };
};

export default Logic;
