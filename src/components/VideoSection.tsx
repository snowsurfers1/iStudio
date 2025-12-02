import { motion } from 'motion/react';
import { VideoPlayer } from './VideoPlayer';

interface Video {
  videoId: string;
  title: string;
}

const videos: Video[] = [
  {
    videoId: 'n4pTDGOslDU',
    title: 'Инопланетный Иджен, клип с аэросъемкой'
  },
  {
    videoId: 'Y3DP1zRmqGg',
    title: 'Видео Бизнес-тура'
  }
];

export function VideoSection() {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-20">
      {videos.map((video, index) => (
        <motion.div
          key={index}
          className="flex flex-col"
          initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div 
            className="relative rounded-3xl overflow-hidden p-[2px] mb-3"
            style={{
              background: 'linear-gradient(135deg, #a855f7, #3b82f6, #22d3ee)',
              boxShadow: '0 0 15px rgba(168, 85, 247, 0.5), 0 0 30px rgba(59, 130, 246, 0.3), 0 0 45px rgba(34, 211, 238, 0.2)'
            }}
          >
            <div className="rounded-[22px] overflow-hidden aspect-video bg-black">
              <VideoPlayer videoId={video.videoId} />
            </div>
          </div>
          
          <p className="text-gray-300 text-center">
            {video.title}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
