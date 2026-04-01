import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-[#b22234] shadow-2xl z-50 animate-slide-up">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-4 flex-1">
            <div className="w-12 h-12 bg-[#b22234] rounded-full flex items-center justify-center flex-shrink-0">
              <Cookie className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-[#101e33] mb-2">Sīkdatņu izmantošana</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Mēs izmantojam sīkdatnes, lai uzlabotu jūsu pieredzi mūsu vietnē un analizētu tās lietošanu.
                Turpinot lietot šo vietni, jūs piekrītat mūsu{' '}
                <a
                  href="https://www.dialogs-ab.lv/privatuma-politika/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b22234] hover:text-[#8b1a28] underline font-semibold"
                >
                  privātuma politikai
                </a>
                .
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleReject}
              className="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Noraidīt
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2 bg-[#b22234] hover:bg-[#8b1a28] text-white rounded-lg transition-colors font-semibold"
            >
              Piekrist
            </button>
            <button
              onClick={handleReject}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Aizvērt"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
