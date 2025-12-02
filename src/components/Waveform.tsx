import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useState } from 'react';

export function Waveform({ className = "" }: { className?: string }) {
  const { scrollYProgress } = useScroll();
  const [activePath, setActivePath] = useState(0);
  
  // Different equalizer patterns with varying amplitude and frequency
  const equalizerPaths = [
    "M 0 50 L 50 50 L 80 20 L 110 80 L 140 30 L 170 50 L 200 50 L 230 70 L 250 30 L 270 80 L 290 40 L 320 50 L 350 50 L 380 25 L 410 75 L 440 35 L 470 50 L 500 50 L 530 65 L 560 35 L 590 70 L 620 40 L 650 50 L 680 50 L 710 30 L 740 70 L 770 40 L 800 50",
    "M 0 50 L 40 50 L 60 35 L 90 65 L 120 40 L 150 60 L 180 50 L 210 50 L 240 25 L 270 75 L 300 30 L 330 70 L 360 50 L 390 50 L 420 20 L 450 80 L 480 35 L 510 65 L 540 50 L 570 50 L 600 30 L 630 70 L 660 40 L 690 60 L 720 50 L 750 50 L 780 35 L 800 50",
    "M 0 50 L 30 50 L 50 15 L 80 85 L 110 20 L 140 80 L 170 50 L 200 50 L 230 60 L 260 40 L 290 70 L 320 30 L 350 50 L 380 50 L 410 10 L 440 90 L 470 25 L 500 75 L 530 50 L 560 50 L 590 65 L 620 35 L 650 50 L 680 50 L 710 20 L 740 80 L 770 30 L 800 50",
    "M 0 50 L 60 50 L 85 40 L 110 60 L 135 45 L 160 55 L 190 50 L 220 50 L 245 35 L 270 65 L 295 40 L 320 60 L 350 50 L 380 50 L 405 30 L 430 70 L 455 38 L 480 62 L 510 50 L 540 50 L 565 42 L 590 58 L 615 48 L 640 52 L 670 50 L 700 50 L 725 40 L 750 60 L 775 45 L 800 50",
    "M 0 50 L 45 50 L 70 25 L 95 75 L 120 35 L 145 65 L 175 50 L 205 50 L 230 55 L 255 45 L 280 68 L 305 32 L 335 50 L 365 50 L 390 18 L 415 82 L 440 28 L 465 72 L 495 50 L 525 50 L 550 62 L 575 38 L 600 70 L 625 30 L 655 50 L 685 50 L 710 35 L 735 65 L 760 42 L 785 58 L 800 50"
  ];

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      // Change pattern every 10% of scroll
      const index = Math.floor(latest * 50) % equalizerPaths.length;
      setActivePath(index);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <motion.svg 
      viewBox="0 0 800 100" 
      className={className}
      preserveAspectRatio="none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <motion.path
        d={equalizerPaths[activePath]}
        stroke="url(#waveGradient)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="miter"
        filter="url(#glow)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}
