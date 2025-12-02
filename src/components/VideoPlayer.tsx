import { motion } from 'motion/react';
import { Play, Pause } from 'lucide-react';
import { useState, useRef } from 'react';

interface VideoPlayerProps {
  videoId: string;
}

export function VideoPlayer({ videoId }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const togglePlayPause = () => {
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      const message = isPlaying ? '{"event":"command","func":"pauseVideo","args":""}' : '{"event":"command","func":"playVideo","args":""}';
      iframe.contentWindow?.postMessage(message, '*');
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative w-full h-full group">
      <iframe
        ref={iframeRef}
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&controls=0&showinfo=0&rel=0&modestbranding=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      
      {/* Custom Play/Pause Button */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5))'
        }}
      >
        <motion.button
          onClick={togglePlayPause}
          className="pointer-events-auto relative p-[2px] rounded-full"
          style={{
            background: 'linear-gradient(135deg, #a855f7, #3b82f6, #22d3ee)',
            boxShadow: '0 0 20px rgba(168, 85, 247, 0.6), 0 0 40px rgba(59, 130, 246, 0.4), 0 0 60px rgba(34, 211, 238, 0.3)'
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
            {isPlaying ? (
              <Pause className="text-white" size={32} fill="white" />
            ) : (
              <Play className="text-white ml-1" size={32} fill="white" />
            )}
          </div>
        </motion.button>
      </motion.div>
    </div>
  );
}
