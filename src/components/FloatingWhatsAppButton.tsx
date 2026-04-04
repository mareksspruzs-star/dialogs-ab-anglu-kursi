import { MessageCircle } from 'lucide-react';
import { getCurrentLanguage } from '../utils/translate';

const WHATSAPP_NUMBER = '37127766277';

const messages = {
  LV: 'Labdien! Vēlos uzzināt vairāk par angļu valodas kursiem.',
  EN: 'Hello! I would like to get more information about English courses.',
  RU: 'Здравствуйте! Хотел(а) бы узнать больше о курсах английского языка.',
};

export default function FloatingWhatsAppButton() {
  const currentLang = getCurrentLanguage().toUpperCase() as keyof typeof messages;
  const message = messages[currentLang] || messages.LV;
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 group">
      <div className="hidden md:block absolute right-16 top-1/2 -translate-y-1/2 pointer-events-none">
        <div className="whitespace-nowrap rounded-lg bg-[#101e33] px-3 py-2 text-sm font-medium text-white shadow-lg opacity-0 translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
          Rakstiet WhatsApp
        </div>
      </div>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Sazināties WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#b22234] text-white shadow-xl transition-all duration-200 hover:bg-[#8b1a28] hover:scale-105 active:scale-95"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}