import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: 'Vai iespējams mācīties bez maksas?',
    answer: 'Jā, finansētie projekti sadarbībā ar NVA (Nodarbinātības valsts aģentūru) ļauj apgūt angļu valodu bez maksas. Sazinieties ar mums pa e-pastu info@dialogs-ab.lv vai aizpildiet pieteikuma formu, un mēs informēsim jūs par aktuālajām iespējām un piemērotākajiem kursiem!'
  },
  {
    id: 2,
    question: 'Vai saņemšu oficiālu apliecību pēc kursa beigšanas?',
    answer: 'Jā, pēc kursa veiksmīgas beigšanas un noslēguma pārbaudes izturēšanas tiek izsniegta oficiāla apliecība par izglītības programmas apguvi. Dialogs AB ir akreditēta izglītības iestāde, kas reģistrēta Valsts izglītības iestāžu reģistrā kopš 1997. gada.'
  },
  {
    id: 3,
    question: 'Cik ilgi ilgst viens kurss un kāda ir nodarbību intensitāte?',
    answer: 'Kursa ilgums ir atkarīgs no izvēlētās programmas. 100 akadēmisko stundu kursi ilgst aptuveni 1.1-3.5 mēnešus, bet 150 akadēmisko stundu kursi - 2-5 mēnešus. Apmācības nodarbinātām personām parasti notiek 2 reizes nedēļā vakaros (18:00-20:00 vai 18:30-20:30), kas ir ideāli strādājošiem cilvēkiem.'
  },
  {
    id: 4,
    question: 'Kāds ir grupu lielums un mācību formāts?',
    answer: 'Mūsu grupās ir no 6 līdz 12 dalībniekiem. Šis optimālais formāts ļauj nodrošināt individuālu pieeju katram, vienlaikus saglabājot interaktīvu mācību vidi un iespēju praktizēt sarunas. Piedāvājam gan klātienes, gan attālinātās nodarbības (online) - Jūs varat izvēlēties jums piemērotāko formātu.'
  },
  {
    id: 5,
    question: 'Vai pirms kursa sākuma ir nepieciešams veikt līmeņa testu?',
    answer: 'Jā, pirms kursa sākuma mēs piedāvājam bezmaksas līmeņa testu, lai precīzi noteiktu Jūsu pašreizējo angļu valodas zināšanu līmeni un ieteiktu piemērotāko programmu. Tests ir pieejams tiešsaistē un aizņem aptuveni 20-30 minūtes.'
  },
  {
    id: 6,
    question: 'Kur notiek klātienes nodarbības?',
    answer: 'Klātienes nodarbības notiek mūsu mācību centrā Rīgā vai Siguldā. Mūsu centrs ir viegli sasniedzams ar sabiedrisko transportu un atrodas ērtā vietā ar labiem savienojumiem. Attālinātās nodarbības notiek tiešsaistes platformā Zoom vai Failiem.lv vai Google Meet.'
  },
  {
    id: 7,
    question: 'Kādas ir maksāšanas iespējas?',
    answer: 'Piedāvājam elastīgas maksāšanas iespējas - var maksāt vienreizēji vai pa daļām.'
  },
  {
    id: 8,
    question: 'Kādi ir pasniedzēji un kāda ir to kvalifikācija?',
    answer: 'Mūsu komandā ir pieredzējuši, kvalificēti angļu valodas pasniedzēji ar augstāko filologisko vai pedagoģisko izglītību un vairāku gadu (10+) praktisko pieredzi. Pasniedzēji regulāri pilnveido savas prasmes, piedaloties profesionālajās attīstības programmās.'
  },
  ,
  {
    id: 9,
    question: 'Vai ir iespējams pievienoties kursam, ja tas jau ir sācies?',
    answer: 'Tas ir atkarīgs no konkrētās grupas progresa un Jūsu pašreizējā līmeņa. Sazinieties ar mums, un mēs novērtēsim iespējas. Dažos gadījumos, ja grupa ir tikai 1-2 nedēļas kursu gaitā un Jūsu līmenis atbilst, pievienošanās ir iespējama.'
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-[#f9f7f2]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#b22234] rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#101e33] mb-6">
            Bieži uzdotie jautājumi
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Atbildes uz vissvarīgākajiem jautājumiem par mūsu kursiem
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl border-l-4 border-[#b22234]"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-bold text-[#101e33] pr-4">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-6 h-6 text-[#b22234] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#b22234] flex-shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center bg-white p-10 rounded-xl shadow-xl max-w-3xl mx-auto border-t-4 border-[#b22234]">
          <h3 className="text-2xl font-bold text-[#101e33] mb-4">Vai Jums ir cits jautājums?</h3>
          <p className="text-gray-600 mb-6 text-lg">Mēs vienmēr esam gatavi palīdzēt un atbildēt uz Jūsu jautājumiem!</p>
          <a
            href="mailto:info@dialogs-ab.lv?subject=Jautājums par angļu valodas kursiem"
            className="inline-block bg-[#b22234] hover:bg-[#8b1a28] text-white px-10 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Sazinieties ar mums
          </a>
        </div>
      </div>
    </section>
  );
}
