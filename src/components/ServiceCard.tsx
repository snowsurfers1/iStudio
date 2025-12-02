import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  index: number;
}

export function ServiceCard({ image, title, description, index }: ServiceCardProps) {
  return (
    <motion.div 
      className="group relative rounded-2xl overflow-hidden p-[2px] cursor-pointer"
      style={{
        background: 'linear-gradient(135deg, #a855f7, #3b82f6, #22d3ee)',
        boxShadow: '0 0 15px rgba(168, 85, 247, 0.5), 0 0 30px rgba(59, 130, 246, 0.3), 0 0 45px rgba(34, 211, 238, 0.2)'
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="bg-black rounded-[14px] overflow-hidden h-full">
        <div className="aspect-video relative overflow-hidden">
          <ImageWithFallback 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="p-4">
          <h3 className="text-cyan-400 mb-2 text-lg">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}