import { useState, useEffect } from "react";
import { motion } from "motion/react";
import svgPaths from "../imports/svg-0dlbd56dtn";

function AnimatedGroup({ animationKey }: { animationKey: number }) {
  // Animation variants for petals blooming one by one
  const petalVariants = {
    hidden: { 
      scale: 0,
      opacity: 0,
      transformOrigin: "center"
    },
    visible: (i: number) => ({
      scale: 1,
      opacity: i === 9 ? 0.7 : (i === 8 ? 1 : 0.85),
      transformOrigin: "center",
      transition: {
        delay: i * 1,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  // Define the petals data with their IDs and fill references
  const petals = [
    { id: "Vector", path: svgPaths.pa5f2980, fill: "url(#paint0_radial_6_85)", opacity: 0.9, customIndex: 0 },
    { id: "Vector_2", path: svgPaths.p36760000, fill: "url(#paint1_radial_6_85)", opacity: 0.85, customIndex: 1 },
    { id: "Vector_3", path: svgPaths.p2dc920f0, fill: "url(#paint2_radial_6_85)", opacity: 0.85, customIndex: 2 },
    { id: "Vector_4", path: svgPaths.p6a0ab00, fill: "url(#paint3_radial_6_85)", opacity: 0.85, customIndex: 3 },
    { id: "Vector_5", path: svgPaths.p2d70c500, fill: "url(#paint4_radial_6_85)", opacity: 0.85, customIndex: 4 },
    { id: "Vector_6", path: svgPaths.p155c7200, fill: "url(#paint5_radial_6_85)", opacity: 0.85, customIndex: 5 },
    { id: "Vector_7", path: svgPaths.p2dbdfa00, fill: "url(#paint6_radial_6_85)", opacity: 0.85, customIndex: 6 },
    { id: "Vector_8", path: svgPaths.p10400a00, fill: "url(#paint7_radial_6_85)", opacity: 0.85, customIndex: 7 },
    { id: "Vector_9", path: svgPaths.p221a7300, fill: "url(#paint8_radial_6_85)", opacity: 1, customIndex: 8 },
    { id: "Vector_10", path: svgPaths.p1547ec00, fill: "var(--fill-0, #E890A8)", opacity: 0.7, customIndex: 9 },
  ];

  return (
    <div className="absolute inset-1/4" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="Group">
          {petals.map((petal, index) => (
            <motion.path
              key={`${petal.id}-${animationKey}`}
              d={petal.path}
              fill={petal.fill}
              id={petal.id}
              variants={petalVariants}
              initial="hidden"
              animate="visible"
              custom={petal.customIndex}
            />
          ))}
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="translate(1218 1500) scale(1200 1500)" gradientUnits="userSpaceOnUse" id="paint0_radial_6_85" r="1">
            <stop stopColor="#FDA4BA" />
            <stop offset="0.5" stopColor="#F8C9D4" stopOpacity="0.95" />
            <stop offset="1" stopColor="#F8C9D4" stopOpacity="0.8" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(-169.404 1909.49) rotate(45) scale(1200 1500)" gradientUnits="userSpaceOnUse" id="paint1_radial_6_85" r="1">
            <stop stopColor="#FDA4BA" />
            <stop offset="0.5" stopColor="#F8C9D4" stopOpacity="0.95" />
            <stop offset="1" stopColor="#F8C9D4" stopOpacity="0.8" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(-1440 1218) rotate(90) scale(1200 1500)" gradientUnits="userSpaceOnUse" id="paint2_radial_6_85" r="1">
            <stop stopColor="#FDA4BA" />
            <stop offset="0.5" stopColor="#F8C9D4" stopOpacity="0.95" />
            <stop offset="1" stopColor="#F8C9D4" stopOpacity="0.8" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(-1849.49 -169.404) rotate(135) scale(1200 1500)" gradientUnits="userSpaceOnUse" id="paint3_radial_6_85" r="1">
            <stop stopColor="#FDA4BA" />
            <stop offset="0.5" stopColor="#F8C9D4" stopOpacity="0.95" />
            <stop offset="1" stopColor="#F8C9D4" stopOpacity="0.8" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(-1158 -1440) rotate(180) scale(1200 1500)" gradientUnits="userSpaceOnUse" id="paint4_radial_6_85" r="1">
            <stop stopColor="#FDA4BA" />
            <stop offset="0.5" stopColor="#F8C9D4" stopOpacity="0.95" />
            <stop offset="1" stopColor="#F8C9D4" stopOpacity="0.8" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(229.404 -1849.49) rotate(-135) scale(1200 1500)" gradientUnits="userSpaceOnUse" id="paint5_radial_6_85" r="1">
            <stop stopColor="#FDA4BA" />
            <stop offset="0.5" stopColor="#F8C9D4" stopOpacity="0.95" />
            <stop offset="1" stopColor="#F8C9D4" stopOpacity="0.8" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(1500 -1158) rotate(-90) scale(1200 1500)" gradientUnits="userSpaceOnUse" id="paint6_radial_6_85" r="1">
            <stop stopColor="#FDA4BA" />
            <stop offset="0.5" stopColor="#F8C9D4" stopOpacity="0.95" />
            <stop offset="1" stopColor="#F8C9D4" stopOpacity="0.8" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(1909.49 229.404) rotate(-45) scale(1200 1500)" gradientUnits="userSpaceOnUse" id="paint7_radial_6_85" r="1">
            <stop stopColor="#FDA4BA" />
            <stop offset="0.5" stopColor="#F8C9D4" stopOpacity="0.95" />
            <stop offset="1" stopColor="#F8C9D4" stopOpacity="0.8" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(980.4 980.4) scale(960)" gradientUnits="userSpaceOnUse" id="paint8_radial_6_85" r="1">
            <stop stopColor="#E890A8" />
            <stop offset="0.7" stopColor="#FDA4BA" />
            <stop offset="1" stopColor="#F8C9D4" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function AnimatedLogo() {
  const [animationKey, setAnimationKey] = useState(0);
  
  // Total animation time: 10 petals * 1s = 10s bloom + 3s hold = 13s total
  const totalBloomTime = 10; // 10 petals * 1 second delay + animation duration
  const holdTime = 3; // hold for 3 seconds
  const totalCycle = (totalBloomTime + holdTime) * 1000; // Convert to milliseconds

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey(prev => prev + 1);
    }, totalCycle);

    return () => clearInterval(interval);
  }, [totalCycle]);

  return (
    <motion.div 
      className="relative size-full" 
      data-name="lunave-logo-animated"
      animate={{ 
        rotate: 360
      }}
      transition={{
        rotate: {
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }
      }}
    >
      <AnimatedGroup animationKey={animationKey} />
    </motion.div>
  );
}
