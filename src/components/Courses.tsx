import { useState } from 'react';
import { BookOpen, TrendingUp, Briefcase, Award, ChevronDown, ChevronUp, GraduationCap } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Bez priekšzināšanām',
    hours: '150 ak.st.',
    level: 'A1',
    cefr: 'CEFR A1',
    icon: BookOpen,
    color: 'from-[#101e33] to-[#1a2d4a]',
    description: 'Sākiet savu angļu valodas ceļojumu no nulles ar mūsu strukturēto A1 līmeņa programmu.',
    details: 'Šī programma ir paredzēta absolūtiem iesācējiem. Jūs apgūsit angļu alfabētu, pamata gramatiku (Present Simple, to be, have got), ikdienas vārdu krājumu (sveicieni, ģimene, darbs), ciparus un laiku. Komunikatīvā metode nodrošina, ka jau pēc pirmajām nodarbībām spēsit veikt vienkāršas sarunas. Mācības balstās uz CEFR A1 standartiem un ietver praktiskus vingrinājumus klausīšanās, runāšanas, lasīšanas un rakstīšanas prasmju attīstīšanai.'
  },
  {
    id: 2,
    title: 'Elementary',
    hours: '100 ak.st.',
    level: 'A1/A2',
    cefr: 'CEFR A1-A2',
    icon: BookOpen,
    color: 'from-[#2d4a5c] to-[#3d5a6c]',
    description: 'Paplašiniet pamatzināšanas un attīstiet pamata komunikācijas prasmes A1/A2 līmenī.',
    details: 'Elementary līmenis ir paredzēts tiem, kas jau pazīst pamatus. Programma aptver Present Continuous, Past Simple, Future (going to), modālos darbības vārdus (can, must, should), salīdzināšanas pakāpes un prievārdus. Jūs apgūsit, kā aprakstīt pagātnes notikumus, plānus nākotnei, paust preferences un dot padomus. Kursa beigās spēsit veikt ikdienas sarunas, saprast vienkāršus tekstus un rakstīt īsas vēstules. CEFR A2 standarts nodrošina starptautiski atzītu kvalitāti.'
  },
  {
    id: 3,
    title: 'Lower Intermediate',
    hours: '100 ak.st.',
    level: 'A2/B1',
    cefr: 'CEFR A2-B1',
    icon: TrendingUp,
    color: 'from-[#4d6a7c] to-[#5d7a8c]',
    description: 'Pāreja no pamata uz vidējo līmeni ar uzsvaru uz praktisko valodas lietojumu.',
    details: 'Lower Intermediate sagatavo pārejai uz B1 līmeni. Apgūsit Present Perfect, Past Continuous, kondicionāļus (First & Second Conditional), pasīvo balsi, netieši runas konstrukcijas. Vārdu krājums tiek būtiski paplašināts ar darba, ceļošanas, veselības un kultūras tematiku. Komunikatīvās aktivitātes ietver diskusijas, lomu spēles, prezentācijas un rakstveida uzdevumus. Kursa mērķis ir attīstīt pašpārliecinātību sarežģītākās situācijās.'
  },
  {
    id: 4,
    title: 'Intermediate',
    hours: '100 ak.st.',
    level: 'B1',
    cefr: 'CEFR B1',
    icon: TrendingUp,
    color: 'from-[#6d8a9c] to-[#7d9aac]',
    description: 'Sasniedziet neatkarīgu valodas lietotāju līmeni ar pilnvērtīgu komunikāciju.',
    details: 'B1 līmenis ir nozīmīgs pavērsiena punkts valodas apguvē. Jūs spēsit brīvi komunicēt lielākajā daļā situāciju, izteikt un pamatot viedokli, aprakstīt pieredzi un mērķus. Gramatika ietver visus galvenos laikus, modālos darbības vārdus, nosacījuma teikumus, frāzes darbības vārdus. Kurss aptver tādas tēmas kā karjera, izglītība, tehnoloģijas, vide. Nodarbības ir pilnībā angļu valodā, akcentējot tekoša runa un autentiska satura izmantošanu.'
  },
  {
    id: 5,
    title: 'Higher Intermediate',
    hours: '100 ak.st.',
    level: 'B2',
    cefr: 'CEFR B2',
    icon: Award,
    color: 'from-[#8d9aac] to-[#9daabc]',
    description: 'Profesionāla angļu valoda profesionālai videi - B2 līmenis.',
    details: 'B2 ir līmenis, kas nodrošina pilnvērtīgu komunikāciju profesionālā un akadēmiskā vidē. Apgūsit sarežģītas gramatikas konstrukcijas (Mixed Conditionals, Inversions, Cleft sentences), plašu idiomātisko valodu un akadēmiskās rakstīšanas prasmes. Spēsit saprast sarežģītus tekstus, tostarp abstraktus, veikt detalizētas prezentācijas, rakstīt pārskatus un esejus. Kurss ir ideāls tiem, kas plāno strādāt starptautiskā vidē vai turpināt studijas angļu valodā.'
  },
  {
    id: 6,
    title: 'Biznesa angļu valoda (Higher Intermediate)',
    hours: '150 ak.st.',
    level: 'B2 Business',
    cefr: 'CEFR B2 + Business',
    icon: Briefcase,
    color: 'from-[#b22234] to-[#8b1a28]',
    description: 'Specializēta B2 līmeņa programma profesionāļiem un vadītājiem.',
    details: 'Šis kurss ir izveidots specifiskām biznesa vajadzībām. Apgūsit, kā vadīt sapulces, veikt prezentācijas, vest sarrunas, rakstīt biznesa vēstules, pārskatus un priekšlikumus. Programma aptver tādas tēmas kā mārketings, finanses, HR, starptautiskā tirdzniecība, projektu vadība. Īpaša uzmanība tiek pievērsta lietišķajai sarakstei, telefona etiķetei, tīklošanās prasmēm. Izmantojam autentiskus biznesa materiālus (raksti, video, case studies).'
  },
  {
    id: 7,
    title: 'Biznesa angļu valoda (Advanced)',
    hours: '150 ak.st.',
    level: 'C1 Business',
    cefr: 'CEFR C1 + Business',
    icon: Briefcase,
    color: 'from-[#8b1a28] to-[#6b0a18]',
    description: 'Augstākā līmeņa biznesa komunikācija stratēģiskai vadībai.',
    details: 'C1 biznesa angļu valoda ir paredzēta augstākā līmeņa vadītājiem un profesionāļiem. Spēsit veikt sarežģītas prezentācijas starptautiskā līmenī, vadīt stratēģiskas diskusijas, analizēt un rakstīt kompleksus pārskatus, veikt sarežģītas sarunas. Programma ietver niansētu valodas lietošanu, kultūras īpatnības, diplomātiju, krīžu komunikāciju. Apgūsit, kā argumentēt sarežģītas pozīcijas, pārliecināt un ietekmēt. Izmantojam autentiskus materiālus no Financial Times, The Economist, Harvard Business Review.'
  }
];

export default function Courses() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="courses" className="py-20 bg-[#f9f7f2]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#b22234] rounded-full mb-6">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#101e33] mb-6">
            Kursu programmas
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            No A1 līdz C1 - profesionāli kursi, kas balstīti uz CEFR (Common European Framework of Reference) standartiem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {courses.map((course) => {
            const Icon = course.icon;
            const isExpanded = expandedId === course.id;

            return (
              <div
                key={course.id}
                data-course-id={course.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 border-t-4 border-[#b22234]"
              >
                <div className={`bg-gradient-to-r ${course.color} p-6 text-white`}>
                  <Icon className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-white/20 px-4 py-1 rounded-full text-sm font-bold">
                      {course.cefr}
                    </span>
                    <span className="text-sm font-semibold">{course.hours}</span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 mb-4 leading-relaxed font-medium">
                    {course.description}
                  </p>

                  {isExpanded && (
                    <div className="mb-4 p-4 bg-[#f9f7f2] rounded-lg border-l-4 border-[#b22234]">
                      <p className="text-gray-800 leading-relaxed text-sm">
                        {course.details}
                      </p>
                    </div>
                  )}

                  <button
                    onClick={() => setExpandedId(isExpanded ? null : course.id)}
                    className="flex items-center text-[#b22234] hover:text-[#8b1a28] font-bold transition-colors"
                  >
                    {isExpanded ? (
                      <>
                        Mazāk <ChevronUp className="w-5 h-5 ml-1" />
                      </>
                    ) : (
                      <>
                        Lasīt vairāk <ChevronDown className="w-5 h-5 ml-1" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
