import './styles/globals.css';
import { Header } from './components/Header';
import { Waveform } from './components/Waveform';
import { ServiceCard } from './components/ServiceCard';
import { ContactModal } from './components/ContactModal';
import { Portfolio } from './components/Portfolio';
import { VideoSection } from './components/VideoSection';
import { Toaster } from 'sonner@2.0.3';
import { useState } from 'react';
import { motion } from 'motion/react';
import corporateImage from 'figma:asset/39c3d32b201ea9994cdad69a14f7a14b06a472a2.png';
import songwritingImage from 'figma:asset/49e9c11eab692e814dc72f1db56d0ac427e1d1a8.png';
import videoImage from 'figma:asset/cee68c2e314f8df2af065ad914bb433dc9819bd1.png';
import learningImage1 from 'figma:asset/e7b8d9570c70a83f88c0100608e21d4dcc671571.png';
import learningImage2 from 'figma:asset/5f62dcf18b2aba210dacce954aa8bfbda9f84b78.png';
import learningImage3 from 'figma:asset/49d26c68d44b4df3f729c49ba7db3fbfb95fd738.png';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <Toaster position="top-center" theme="dark" />
      <Header />
      
      {/* Hero Section */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero Content */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Создаем песни и<br />видеоклипы на заказ
            </motion.h2>
            <motion.p 
              className="text-gray-300 text-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Душевные песни | Cовременные технологии | Яркие видео
            </motion.p>
            
            <motion.button 
              onClick={() => setContactModalOpen(true)}
              className="group relative px-8 py-4 rounded-full overflow-hidden text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-100 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
              <span className="relative text-white">Заказать проект</span>
            </motion.button>
          </motion.div>

          {/* Waveform */}
          <div className="mb-16">
            <Waveform className="w-full h-24 opacity-70" />
          </div>

          {/* Portfolio Section */}
          <Portfolio />

          {/* Studio Videos */}
          <VideoSection />

          {/* Waveform Divider */}
          <div className="mb-12">
            <Waveform className="w-full h-16 opacity-50" />
          </div>

          {/* Services Section */}
          <section id="services" className="mb-20 scroll-mt-20">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-4xl mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Наши услуги
              </h3>
              <p className="text-gray-400">
                Полный цикл музыкального производства
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              <ServiceCard
                image={songwritingImage}
                title="Песни на заказ по вашей истории"
                description="Создаем готовый хит с поэтическими стихами и студийной музыкой"
                index={0}
              />
              <ServiceCard
                image={videoImage}
                title="Видеоклип"
                description="Профессиональный клип, как у звезд мирового уровня"
                index={1}
              />
              <ServiceCard
                image={corporateImage}
                title="Компаниям"
                description="Корпоративные гимны, современные рекламные ролики и вирусные видео"
                index={2}
              />
            </div>
          </section>

          {/* Learning Section */}
          <section id="portfolio" className="mb-20 scroll-mt-20">
            {/* Waveform Divider */}
            <div className="mb-12">
              <Waveform className="w-full h-16 opacity-50" />
            </div>

            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-4xl mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Научись создавать музыку и видео
              </h3>
              <p className="text-gray-400">
                Обучение и консультации от профессионалов индустрии
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              <ServiceCard
                image={learningImage1}
                title="Создай песню"
                description="Пошаговое обучение, от простого к сложному"
                index={0}
              />
              <ServiceCard
                image={learningImage2}
                title="Создай видеоклип"
                description="Познакомься с современным подходом к генерации видео и монтажу фильмов"
                index={1}
              />
              <ServiceCard
                image={learningImage3}
                title="Режиссура и сценарии"
                description="Путь режиссера от генерации идей до хита или блокбастера"
                index={2}
              />
            </div>
          </section>

          {/* Footer Section */}
          <footer id="contacts" className="text-center pt-12 border-t border-cyan-500/10 scroll-mt-20">
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 
                className="text-3xl mb-4"
                style={{
                  background: 'linear-gradient(90deg, #22d3ee 0%, #a855f7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 8px rgba(34, 211, 238, 0.6)) drop-shadow(0 0 12px rgba(168, 85, 247, 0.4))',
                  fontWeight: '400',
                  letterSpacing: '0.02em'
                }}
              >
                iStudio
              </h4>
              <p className="text-gray-400 mb-6">
                Свяжитесь с нами для обсуждения вашего проекта
              </p>
              <motion.button 
                onClick={() => setContactModalOpen(true)}
                className="group relative px-8 py-3 rounded-full overflow-hidden inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-100 group-hover:opacity-90 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
                <span className="relative text-white">Связаться с нами</span>
              </motion.button>
            </motion.div>
            <motion.div 
              className="flex justify-center gap-6 text-gray-400 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <a href="#" className="hover:text-cyan-400 transition-colors">Instagram</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">YouTube</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Telegram</a>
            </motion.div>
            <p className="text-gray-500 text-sm">© 2025 iStudio. Все права защищены.</p>
          </footer>
        </div>
      </main>

      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </div>
  );
}