import { motion } from 'motion/react';
import { Play, Pause } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface Song {
  title: string;
  url: string;
}

const songs: Song[] = [
  {
    title: 'Love Song',
    url: 'https://fidbak.audio/istudio/file/8c3742fce00840042f0cc2a2/eeafc260d06cc58f'
  },
  {
    title: 'С Днем Рождения',
    url: 'https://fidbak.audio/istudio/file/9041d6c700f90eefb30ed4ac/1b5dbbf3baf519c6'
  },
  {
    title: 'Новогодняя',
    url: 'https://fidbak.audio/istudio/file/9f5f2124c74709ea35acde76/9ecad4f3582ff3bf'
  },
  {
    title: 'С Днем Матери',
    url: 'https://fidbak.audio/istudio/file/aeca88d2e42a941c78a6e8a7/abe1b98935caa558'
  }
];

export function Portfolio() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);

  const handlePlayPause = async (index: number) => {
    const audio = audioRefs.current[index];
    
    if (!audio) return;

    // Pause all other tracks
    audioRefs.current.forEach((a, i) => {
      if (a && i !== index) {
        a.pause();
        a.currentTime = 0;
      }
    });

    if (playingIndex === index) {
      audio.pause();
      setPlayingIndex(null);
    } else {
      try {
        await audio.play();
        setPlayingIndex(index);
      } catch (error) {
        // Если не удается воспроизвести, открываем в новом окне
        window.open(songs[index].url, '_blank');
        setPlayingIndex(null);
      }
    }
  };

  useEffect(() => {
    // Add event listeners for when audio ends
    audioRefs.current.forEach((audio, index) => {
      if (audio) {
        const handleEnded = () => setPlayingIndex(null);
        const handleError = () => {
          // Silently handle audio loading errors
          setPlayingIndex(null);
        };
        
        audio.addEventListener('ended', handleEnded);
        audio.addEventListener('error', handleError);
        
        return () => {
          audio.removeEventListener('ended', handleEnded);
          audio.removeEventListener('error', handleError);
        };
      }
    });
  }, []);

  return (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-4xl mb-8 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
        Портфолио
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {songs.map((song, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <audio
              ref={(el) => (audioRefs.current[index] = el)}
              src={song.url}
              preload="metadata"
              crossOrigin="anonymous"
            />
            
            <motion.div
              className="relative p-[2px] rounded-full mb-3"
              style={{
                background: 'linear-gradient(135deg, #a855f7, #3b82f6, #22d3ee)',
                boxShadow: '0 0 15px rgba(168, 85, 247, 0.5), 0 0 30px rgba(59, 130, 246, 0.3), 0 0 45px rgba(34, 211, 238, 0.2)'
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => handlePlayPause(index)}
                className="relative w-20 h-20 rounded-full bg-black flex items-center justify-center group"
              >
                {playingIndex === index ? (
                  <Pause className="relative z-10 text-white" size={32} fill="white" />
                ) : (
                  <Play className="relative z-10 text-white ml-1" size={32} fill="white" />
                )}
              </button>
            </motion.div>
            
            <p className="text-gray-300 text-center">
              {song.title}
            </p>
          </motion.div>
        ))}
      </div>

    </motion.div>
  );
}