import { X } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { toast } from 'sonner@2.0.3';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'recording',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast.success('Спасибо! Мы свяжемся с вами в ближайшее время.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'recording',
      message: ''
    });
    
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-gradient-to-br from-[#1a2332] to-[#2a1e3e] rounded-2xl p-1">
        <div className="bg-[#1a2332] rounded-xl p-6 md:p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Заказать проект
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <X size={28} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-cyan-400 mb-2">
                Ваше имя
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#0f1419] border border-cyan-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                placeholder="Иван Иванов"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-cyan-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#0f1419] border border-cyan-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="ivan@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-cyan-400 mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#0f1419] border border-cyan-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-cyan-400 mb-2">
                Интересующая услуга
              </label>
              <select
                id="service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-[#0f1419] border border-cyan-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
              >
                <option value="recording">Запись песни/видеоклипа</option>
                <option value="mixing">Сведение и мастеринг</option>
                <option value="vocal">Вокальная запись</option>
                <option value="learning">Обучение</option>
                <option value="other">Другое</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-cyan-400 mb-2">
                Сообщение
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#0f1419] border border-cyan-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                placeholder="Расскажите о вашем проекте..."
              />
            </div>

            <button
              type="submit"
              className="w-full group relative px-8 py-4 rounded-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-100 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
              <span className="relative text-white">Отправить заявку</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
