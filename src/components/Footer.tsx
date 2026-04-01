import { Mail, Phone, MapPin, BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#101e33] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#b22234] rounded-lg flex items-center justify-center">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-2xl">Dialogs AB</h3>
                <p className="text-xs text-gray-400">Mācību centrs</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Akreditēta profesionālās izglītības iestāde, kas specializējas kvalitatīvu angļu valodas
              kursu organizēšanā pieaugušajiem.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6 text-[#b22234]">Kontaktinformācija</h4>
            <div className="space-y-4">
              <a
                href="mailto:info@dialogs-ab.lv"
                className="flex items-center text-gray-300 hover:text-[#b22234] transition-colors group"
              >
                <Mail className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                <span>info@dialogs-ab.lv</span>
              </a>
              <a
                href="tel:+37167432343"
                className="flex items-center text-gray-300 hover:text-[#b22234] transition-colors group"
              >
                <Phone className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                <span>67432343, 27766277</span>
              </a>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <span>
                  Akadēmijas laukums 1-1,
                  <br />
                  Rīga, LV-1050
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6 text-[#b22234]">Ātrās saites</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('courses');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-300 hover:text-[#b22234] transition-colors hover:translate-x-1 inline-block"
                >
                  → Kursu programmas
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('calendar');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-300 hover:text-[#b22234] transition-colors hover:translate-x-1 inline-block"
                >
                  → Grafiks un cenas
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('testimonials');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-300 hover:text-[#b22234] transition-colors hover:translate-x-1 inline-block"
                >
                  → Atsauksmes
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('faq');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-300 hover:text-[#b22234] transition-colors hover:translate-x-1 inline-block"
                >
                  → Jautājumi un atbildes
                </button>
              </li>
              <li>
                <a
                  href="https://www.dialogs-ab.lv/par-mums/privatuma-politika/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#b22234] transition-colors hover:translate-x-1 inline-block"
                >
                  → Privātuma politika
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6 text-[#b22234]">Darba laiks</h4>
            <div className="space-y-2 text-gray-300">
              <p>
                <strong>Pirmdiena - Piektdiena:</strong>
              </p>
              <p>9:00 - 17:00</p>
              <p className="mt-4">
                <strong>Sestdiena, Svētdiena:</strong>
              </p>
              <p>Slēgts</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="text-center space-y-3 text-gray-400">
            <p className="text-sm">
              <strong className="text-white">SIA "Dialogs AB"</strong> • Reģ. Nr. 40003372060 •
              Akadēmijas laukums 1-1, Rīga, LV-1050, Latvija
            </p>
            <p className="text-sm">
              Akreditēta profesionālās izglītības iestāde • Reģistrēta{' '}
              <strong>Valsts izglītības iestāžu reģistrā</strong> kopš 1997. gada
            </p>
            <p className="text-sm">
              <a
                href="https://www.dialogs-ab.lv/par-mums/privatuma-politika/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#b22234] transition-colors underline"
              >
                Privātuma politika
              </a>
              {' • '}
              <button
                onClick={() => {
                  const element = document.getElementById('kontakti');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:text-[#b22234] transition-colors underline"
              >
                Sazināties
              </button>
            </p>
            <p className="text-xs pt-4">
              © {new Date().getFullYear()} Dialogs AB. Visas tiesības aizsargātas.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}