import { Flag } from 'lucide-react';
import { getCurrentLanguage } from '../utils/translate';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [lang, setLang] = useState('LV');

  useEffect(() => {
    const updateLang = () => setLang(getCurrentLanguage().toUpperCase());
    updateLang();

    window.addEventListener('storage', updateLang);
    return () => window.removeEventListener('storage', updateLang);
  }, []);

  const heroData = {
    LV: {
      badge: 'Akreditēta izglītības iestāde kopš 1997. gada',
      title: 'Profesionāli angļu valodas',
      span: 'kursi',
      desc: 'Profesionāli 7 CEFR līmeņa angļu valodas kursi pieaugušajiem',
      btnTest: 'Aizpildi valodas testu',
      btnProg: 'Apskatīt programmas',
      stats: ['Gadu pieredze', 'CEFR līmeņi', 'Kursu beidzēji'],
    },
    EN: {
      badge: 'Accredited educational institution since 1997',
      title: 'Professional English Language',
      span: 'Courses',
      desc: 'Professional 7 CEFR level English language courses for adults',
      btnTest: 'Take the language test',
      btnProg: 'View programs',
      stats: ['Years of experience', 'CEFR levels', 'Graduates'],
    },
    RU: {
      badge: 'Аккредитованное учебное заведение с 1997 года',
      title: 'Профессиональные курсы',
      span: 'английского',
      desc: 'Профессиональные курсы английского языка 7 уровней CEFR для взрослых',
      btnTest: 'Пройти тест',
      btnProg: 'Посмотреть программы',
      stats: ['Лет опыта', 'Уровней CEFR', 'Выпускников'],
    },
  } as const;

  const current = heroData[lang as keyof typeof heroData] || heroData.LV;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#101e33] via-[#1a2d4a] to-[#101e33]">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg
          className="absolute top-20 left-10 w-32 h-48"
          viewBox="0 0 100 150"
          fill="none"
          aria-hidden="true"
        >
          <rect width="100" height="150" fill="#b22234" />
          <rect x="30" y="0" width="40" height="150" fill="white" />
          <rect x="0" y="60" width="100" height="30" fill="white" />
        </svg>
        <div className="absolute bottom-20 right-20 w-48 h-64">
          <svg
            viewBox="0 0 100 150"
            className="w-full h-full"
            fill="none"
            aria-hidden="true"
          >
            <rect
              x="20"
              y="20"
              width="60"
              height="110"
              rx="5"
              fill="#b22234"
              opacity="0.3"
            />
            <rect
              x="25"
              y="30"
              width="50"
              height="40"
              rx="3"
              fill="white"
              opacity="0.2"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-transparent border-2 border-[#b22234] rounded-full">
            <Flag className="w-5 h-5 text-[#b22234]" />
            <p className="text-[#b22234] font-semibold text-sm md:text-base">
              {current.badge}
            </p>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 leading-tight text-balance px-2">
            {current.title}{' '}
            <span className="text-[#b22234] inline-flex items-center gap-2 whitespace-normal">
              {current.span}
              <svg
                className="w-10 h-6 md:w-12 md:h-8 inline-block shadow-lg"
                viewBox="0 0 60 30"
                fill="none"
                role="img"
              >
                <title>UK Flag</title>
                <rect width="60" height="30" fill="#012169" />
                <path
                  d="M0 0L60 30M60 0L0 30"
                  stroke="white"
                  strokeWidth="6"
                />
                <path
                  d="M0 0L60 30M60 0L0 30"
                  stroke="#C8102E"
                  strokeWidth="4"
                />
                <path
                  d="M30 0V30M0 15H60"
                  stroke="white"
                  strokeWidth="10"
                />
                <path
                  d="M30 0V30M0 15H60"
                  stroke="#C8102E"
                  strokeWidth="6"
                />
              </svg>
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed whitespace-normal px-4">
            {current.desc}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 px-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSegSpdKJ4G-3oBDknG3sp4F0FmIB0uDdEacDhpBvw3VApUTbg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#b22234] hover:bg-[#8b1a28] text-white px-10 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-2xl text-center"
            >
              {current.btnTest}
            </a>
            <button
              onClick={() => {
                const element = document.getElementById('courses');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-[#101e33] px-10 py-4 rounded-lg font-bold text-lg transition-all text-center"
            >
              {current.btnProg}
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto px-4">
            {[
              { val: '28', label: current.stats[0] },
              { val: '7', label: current.stats[1] },
              { val: '2000+', label: current.stats[2] },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-[#b22234]/50 transition-colors shadow-xl"
              >
                <p className="text-5xl font-bold text-[#b22234] mb-3">
                  {stat.val}
                </p>
                <p className="text-white text-lg font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-[60px] md:h-[120px]"
        >
          <path
            fill="#f9f7f2"
            fillOpacity="1"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}