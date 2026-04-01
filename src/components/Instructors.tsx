import { Award, BookOpen, Globe, GraduationCap } from 'lucide-react';

const instructors = [
  {
    id: 1,
    name: 'Aija Abaroviča',
    title: 'Vecākā pasniedzēja',
    specialization: 'Biznesa, lietišķā, ekonomika, medicīna, autotransports,vispārējā angļu valoda',
    experience: '15+ gadi',
    education: 'Bc. angļu filoloģijā, Latvijas Universitāte',
    icon: Award
  },
  {
    id: 2,
    name: 'Ainārs Rendors',
    title: 'Valodu pasniedzējs',
    specialization: 'Vispārējā angļu valoda, Tulks',
    experience: '12+ gadi',
    education: 'Angļu valodas skolotājs, Latvijas Universitāte',
    icon: Globe
  },
  {
    id: 3,
    name: 'Liesma Sāviča',
    title: 'Vecākā pasniedzēja',
    specialization: 'Vispārējā angļu valoda, Tulks',
    experience: '15+ gadi',
    education: 'Mg. tulkošanā un terminoloģijā, Bc. ped., angļu valoda un literatūra, Ventspils Augstskola, Latvijas Universitāte',
    icon: BookOpen
  }
];

export default function Instructors() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#101e33] to-[#1a2d4a] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#b22234] rounded-full mb-6">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Mūsu pasniedzēji
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Pieredzējuši profesionāļi ar augstāko izglītību un atbilstošu kvalifikāciju
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {instructors.map((instructor) => {
            const Icon = instructor.icon;

            return (
              <div
                key={instructor.id}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border-2 border-[#b22234]/30 hover:border-[#b22234] hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-20 h-20 bg-[#b22234] rounded-full flex items-center justify-center mb-6 mx-auto shadow-xl">
                  <Icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-center mb-2">
                  {instructor.name}
                </h3>
                <p className="text-[#b22234] text-center font-bold mb-6 text-lg">
                  {instructor.title}
                </p>

                <div className="space-y-4 text-gray-200">
                  <div className="bg-white/5 p-3 rounded-lg">
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Specializācija</p>
                    <p className="font-semibold">{instructor.specialization}</p>
                  </div>
                  <div className="bg-white/5 p-3 rounded-lg">
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Pieredze</p>
                    <p className="font-semibold">{instructor.experience}</p>
                  </div>
                  <div className="bg-white/5 p-3 rounded-lg">
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Izglītība</p>
                    <p className="font-semibold">{instructor.education}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-300 text-lg mb-6">
            Visi mūsu pasniedzēji regulāri pilnveido savas prasmes un izmanto modernākās mācību metodes
          </p>
        </div>
      </div>
    </section>
  );
}
