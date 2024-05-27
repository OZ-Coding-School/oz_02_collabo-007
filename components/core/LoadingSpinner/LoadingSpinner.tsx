'use client';
import { motion, useAnimate } from 'framer-motion';
import { useEffect } from 'react';

const LoadingSpinner = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animateLoader = async () => {
      animate(
        [
          ['.circle', { pathLength: 0.5, pathOffset: 0.1 }],
          ['.circle', { pathLength: 0, pathOffset: 0 }],
        ],
        { duration: 1, repeat: Infinity, repeatDelay: 0 },
      );
    };

    animateLoader();
  }, [animate]);

  return (
    <div>
      <motion.svg ref={scope} width="100" height="100" viewBox="0 0 100 100">
        <motion.circle
          className="circle"
          cx="50" // 원의 중심 x 좌표
          cy="50" // 원의 중심 y 좌표
          r="40"
          initial={{ pathLength: 1.1, pathOffset: 1 }}
          stroke="black"
          style={{ rotateY: '180deg', rotateZ: '-90deg' }}
        />
      </motion.svg>
    </div>
  );
};

export default LoadingSpinner;
