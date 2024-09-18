import React from "react";
import { useSpring, animated } from "react-spring";

const StackBar = ({ maleMember, femaleMember, extrovert, introvert }) => {
  const Number = ({ n }) => {
    const { number } = useSpring({
      from: { number: 0 },
      to: { number: n },
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 },
    });

    return (
      <animated.div className="ml-7 md:text-4xl text-3xl text-amber-500 font-bold">
        {number.to((val) => `${val.toFixed(0)}%`)}
      </animated.div>
    );
  };

  return (
    <div className="flex-wrap md:flex ">
      <div className="md:w-1/2">
        {/* Male */}
        <div className="flex items-center text-center mb-2">
          <div className="flex-col justify-center items-center mb-3">
            <img
              className="h-12 w-12 md:h-14 md:w-14 mb-1"
              src="https://cdn-icons-png.flaticon.com/512/11829/11829347.png"
              alt="Male Icon"
            />
            <span>Male</span>
          </div>
          <Number n={maleMember} />
        </div>
        {/* Female */}
        <div className="flex items-center text-center">
          <div className="flex-col justify-center items-center mb-3">
            <img
              className="h-12 w-12 md:h-14 md:w-14 mb-1"
              src="https://cdn-icons-png.flaticon.com/512/11344/11344819.png"
              alt="Female Icon"
            />
            <span>Female</span>
          </div>
          <Number n={femaleMember} />
        </div>
      </div>
      <div className="w-1/2">
        {/* Extrovert */}
        <div className="flex items-center text-center mb-2">
          <div className="flex-col justify-center items-center mb-3">
            <img
              className="h-12 w-12 md:h-14 md:w-14 mb-1"
              src="https://cdn-icons-png.flaticon.com/512/3002/3002662.png"
              alt="Extrovert Icon"
            />
            <span>Extrovert</span>
          </div>
          <Number n={extrovert} />
        </div>
        {/* Introvert */}
        <div className="flex items-center text-center">
          <div className="flex-col justify-center items-center mb-3">
            <img
              className="h-12 w-12 md:h-14 md:w-14 mb-1"
              src="https://cdn-icons-png.flaticon.com/512/10315/10315405.png"
              alt="Introvert Icon"
            />
            <span>Introvert</span>
          </div>
          <Number n={introvert} />
        </div>
      </div>
    </div>
  );
};

export default StackBar;
