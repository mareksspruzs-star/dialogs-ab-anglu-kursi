import { Star, Quote, Users } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Māra Liepiņa',
    role: 'Biznesa analītiķe',
    text: 'Dialogs AB kursi man palīdzēja sasniegt B2 līmeni tikai 8 mēnešu laikā! Pasniedzēji ir profesionāli, un atmosfēra grupā ir draudzīga. Tagad brīvi komunikēju darba tikšanās ar ārzemju partneriem.',
    rating: 5
  },
  {
    id: 2,
    name: 'Jānis Bērziņš',
    role: 'IT speciālists',
    text: 'Biznesa angļu valodas kurss bija tieši tas, kas man vajadzēja. Apguvu prezentāciju prasmes un tehnisko terminoloģiju. Oficiālā apliecība man noderēja CV. Iesaku!',
    rating: 5
  },
  {
    id: 3,
    name: 'Laura Kalniņa',
    role: 'Restorāna vadītāja',
    text: 'Sāku ar nulles līmeni un tagad brīvi sazinos ar ārvalstu klientiem. Kursu grafiks ir ērti pielāgojams darba grafikam. Paldies Dialogs AB par profesionalitāti!',
    rating: 5
  },
  {
    id: 4,
    name: 'Andris Ozoliņš',
    role: 'Finanšu direktors',
    text: 'Mācījos Advanced līmenī. Kurss sniedza dziļas zināšanas par biznesa angļu valodu - no sarunu stratēģijām līdz sarežģītiem finanšu terminiem. Rezultāti pārsniedza cerības!',
    rating: 5
  },
  {
    id: 5,
    name: 'Kristīne Pētersone',
    role: 'Mārketinga vadītāja',
    text: 'Lieliska pieredze! Mazās grupas ļāva daudz praktizēt runāšanu. Pasniedzēji vienmēr bija gatavi palīdzēt. NVA kuponi arī bija lielisks bonuss - varēju mācīties bez maksas!',
    rating: 5
  },
  {
    id: 6,
    name: 'Roberts Krūmiņš',
    role: 'Projektu vadītājs',
    text: 'Intermediate kurss man deva pārliecību komunicēt starptautiskos projektos. Akreditēta iestāde ar pierādītu pieredzi - tas bija izšķirošais faktors, izvēloties Dialogs AB.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#b22234] rounded-full mb-6">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#101e33] mb-6">
            Atsauksmes
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Ko saka mūsu absolventi par Dialogs AB kursiem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#f9f7f2] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-[#b22234] relative"
            >
              <div className="absolute top-4 right-4 text-[#b22234] opacity-10">
                <Quote className="w-20 h-20" />
              </div>

              <div className="flex items-center mb-5 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#b22234] fill-current" />
                ))}
              </div>

              <p className="text-gray-800 mb-6 leading-relaxed italic relative z-10">
                "{testimonial.text}"
              </p>

              <div className="border-t-2 border-[#b22234]/20 pt-5 relative z-10">
                <p className="font-bold text-[#101e33] text-lg">{testimonial.name}</p>
                <p className="text-sm text-gray-600 font-medium">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg mb-6">Pievienojieties simtiem apmierinātu absolventu!</p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSegSpdKJ4G-3oBDknG3sp4F0FmIB0uDdEacDhpBvw3VApUTbg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#b22234] hover:bg-[#8b1a28] text-white px-10 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Sākt mācīties tagad
          </a>
        </div>
      </div>
    </section>
  );
}
