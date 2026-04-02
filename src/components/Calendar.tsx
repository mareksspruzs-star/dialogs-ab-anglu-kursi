import { useState } from 'react';
import { Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';
import EnrollmentModal from './EnrollmentModal';

const schedules = [
  // --- 1. Angļu valoda (bez priekšzināšanām) [9 GRUPAS] ---
  { id: 1, program: "Angļu valoda (bez priekšzināšanām)", courseId: 1, startDate: "16.04.2026", endDate: "09.06.2026", time: "08:00–11:00", intensity: "5x nedēļā, darba dienās", format: "Klātiene (Rīga, centrs)", price: "Bezmaksas*" },
  { id: 2, program: "Angļu valoda (bez priekšzināšanām)", courseId: 1, startDate: "16.04.2026", endDate: "09.06.2026", time: "09:00–12:00", intensity: "5x nedēļā, darba dienās", format: "Klātiene (Rīga, centrs)", price: "Bezmaksas*" },
  { id: 3, program: "Angļu valoda (bez priekšzināšanām)", courseId: 1, startDate: "16.04.2026", endDate: "09.06.2026", time: "12:00–15:00", intensity: "5x nedēļā, darba dienās", format: "Klātiene (Rīga, centrs)", price: "Bezmaksas*" },
  { id: 4, program: "Angļu valoda (bez priekšzināšanām)", courseId: 1, startDate: "16.04.2026", endDate: "09.06.2026", time: "17:00–20:00", intensity: "5x nedēļā, darba dienās", format: "Klātiene (Rīga, centrs)", price: "Bezmaksas*" },
  { id: 5, program: "Angļu valoda (bez priekšzināšanām)", courseId: 1, startDate: "20.04.2026", endDate: "11.06.2026", time: "08:00–11:00", intensity: "5x nedēļā, darba dienās", format: "Online", price: "Bezmaksas*" },
  { id: 6, program: "Angļu valoda (bez priekšzināšanām)", courseId: 1, startDate: "20.04.2026", endDate: "11.06.2026", time: "09:00–12:00", intensity: "5x nedēļā, darba dienās", format: "Online", price: "Bezmaksas*" },
  { id: 7, program: "Angļu valoda (bez priekšzināšanām)", courseId: 1, startDate: "20.04.2026", endDate: "11.06.2026", time: "12:00–15:00", intensity: "5x nedēļā, darba dienās", format: "Online", price: "Bezmaksas*" },
  { id: 8, program: "Angļu valoda (bez priekšzināšanām)", courseId: 1, startDate: "21.04.2026", endDate: "12.06.2026", time: "16:00–19:00", intensity: "5x nedēļā, darba dienās", format: "Online", price: "Bezmaksas*" },
  { id: 9, program: "Angļu valoda (bez priekšzināšanām)", courseId: 1, startDate: "21.04.2026", endDate: "12.06.2026", time: "19:00–22:00", intensity: "5x nedēļā, darba dienās", format: "Online", price: "Bezmaksas*" },

  // --- 2. Angļu valoda (ar priekšzināšanām) (Elementary) [9 GRUPAS] ---
  { id: 10, program: "Angļu valoda (ar priekšzināšanām) (Elementary)", courseId: 2, startDate: "20.04.2026", endDate: "26.05.2026", time: "09:00–12:00", intensity: "5x nedēļā, darba dienās", format: "Klātiene (Rīga, centrs)", price: "Bezmaksas*" },
  { id: 11, program: "Angļu valoda (ar priekšzināšanām) (Elementary)", courseId: 2, startDate: "20.04.2026", endDate: "26.05.2026", time: "11:00–14:00", intensity: "5x nedēļā, darba dienās", format: "Online", price: "Bezmaksas*" },
  { id: 12, program: "Angļu valoda (ar priekšzināšanām) (Elementary)", courseId: 2, startDate: "20.04.2026", endDate: "26.05.2026", time: "12:00–15:00", intensity: "5x nedēļā, darba dienās", format: "Klātiene (Rīga, centrs)", price: "Bezmaksas*" },
  { id: 13, program: "Angļu valoda (ar priekšzināšanām) (Elementary)", courseId: 2, startDate: "21.04.2026", endDate: "27.05.2026", time: "15:00–18:00", intensity: "5x nedēļā, darba dienās", format: "Online", price: "Bezmaksas*" },
  { id: 14, program: "Angļu valoda (ar priekšzināšanām) (Elementary)", courseId: 2, startDate: "21.04.2026", endDate: "27.05.2026", time: "16:00–19:00", intensity: "5x nedēļā, darba dienās", format: "Online", price: "Bezmaksas*" },
  { id: 15, program: "Angļu valoda (ar priekšzināšanām) (Elementary)", courseId: 2, startDate: "21.04.2026", endDate: "27.05.2026", time: "17:00–20:00", intensity: "5x nedēļā, darba dienās", format: "Klātiene (Rīga, centrs)", price: "Bezmaksas*" },
  { id: 16, program: "Angļu valoda (ar priekšzināšanām) (Elementary)", courseId: 2, startDate: "21.04.2026", endDate: "27.05.2026", time: "17:00–20:00", intensity: "5x nedēļā, darba dienās", format: "Klātiene (Rīga, centrs)", price: "Bezmaksas*" },
  { id: 17, program: "Angļu valoda (ar priekšzināšanām) (Elementary)", courseId: 2, startDate: "21.04.2026", endDate: "27.05.2026", time: "19:00–22:00", intensity: "5x nedēļā, darba dienās", format: "Online", price: "Bezmaksas*" },
  { id: 18, program: "Angļu valoda (ar priekšzināšanām) (Elementary)", courseId: 2, startDate: "27.04.2026", endDate: "02.06.2026", time: "16:00–19:00", intensity: "5x nedēļā, darba dienās", format: "Klātiene (Sigulda)", price: "Bezmaksas*" },

  // --- 3. Angļu valoda (ar priekšzināšanām) (Lower Intermediate) [9 GRUPAS] ---
  { id: 19, program: "Angļu valoda (ar priekšzināšanām) (Lower Intermediate)", courseId: 3, startDate: "16.04.2026", endDate: "22.05.2026", time: "09:00–12:00", intensity: "5x nedēļā, darba dienās", format: "Klātiene (Rīga, centrs)", price: "Bezmaksas*" },
  { id: 20, program: "Angļu valoda (ar priekšzināšanām) (Lower Intermediate)", courseId: 3, startDate: "17.04.2026", endDate: "25.05.2026", time: "08:00–11:00", intensity: "5x nedēļā, darba dienās", format: "Online", price: "Bezmaksas*" },
  { id: 21, program: "Angļu valoda (ar priekšzināšanām) (Lower Intermediate)", courseId: 3, startDate: "17.04.2026", endDate: "25.05.2026", time: "11:00–14:00", intensity: "5x nedēļā, darba dienās", format: "Online", price: "Bezmaksas*" },
  { id: 22, program: "Angļu valoda (ar priekšzināšanām) (Lower Intermediate)", courseId: 3, startDate: "17.04.2026", endDate: "25.05.2026", time: "12:00–15:00", intensity: "5x nedēļā, darba dienās", format: "Klātiene (Rīga, centrs)", price: "Bezmaksas*" },
  { id: 23, program: "Angļu valoda (ar priekšzināšanām) (Lower Intermediate)", courseId: 3, startDate: "17.04.2026", endDate: "25.05.2026", time: "17:00–20:00", intensity: "5x nedēļā, darba dienās", format: "Klātiene (Rīga, centrs)", price: "Bezmaksas*" },
  { id: 24, program: "Angļu valoda (ar priekšzināšanām) (Lower Intermediate)", courseId: 3, startDate: "20.04.2026", endDate: "26.05.2026", time: "18:00–21:00", intensity: "5x nedēļā, darba dienās", format: "Online", price: "Bezmaksas*" },
  { id: 25, program: "Angļu valoda (ar priekšzināšanām) (Lower Intermediate)", courseId: 3, startDate: "22.04.2026", endDate: "27.05.2026", time: "17:00–20:00", intensity: "5x nedēļā, darba dienās", format: "Online", price: "Bezmaksas*" },
  { id: 26, program: "Angļu valoda (ar priekšzināšanām) (Lower Intermediate)", courseId: 3, startDate: "22.04.2026", endDate: "28.05.2026", time: "08:00–11:00", intensity: "5x nedēļā, darba dienās", format: "Klātiene (Rīga, centrs)", price: "Bezmaksas*" },
  { id: 27, program: "Angļu valoda (ar priekšzināšanām) (Lower Intermediate)", courseId: 3, startDate: "29.04.2026", endDate: "04.06.2026", time: "19:00–22:00", intensity: "5x nedēļā, darba dienās", format: "Klātiene (Sigulda)", price: "Bezmaksas*" },

  // --- 4. Angļu valoda (ar priekšzināšanām) (Intermediate) [6 GRUPAS] ---
  { id: 28, program: "Angļu valoda (ar priekšzināšanām) (Intermediate)", courseId: 4, startDate: "23.04.2026", endDate: "28.05.2026", time: "15:00–18:00", intensity: "5x nedēļā, darba dienās", format: "Online", price: "Bezmaksas*" },
  { id: 29, program: "Angļu valoda (ar priekšzināšanām) (Intermediate)", courseId: 4, startDate: "23.04.2026", endDate: "28.05.2026", time: "17:00–20:00", intensity: "5x nedēļā, darba dienās", format: "Online", price: "Bezmaksas*" },
  { id: 30, program: "Angļu valoda (ar priekšzināšanām) (Intermediate)", courseId: 4, startDate: "23.04.2026", endDate: "28.05.2026", time: "18:00–21:00", intensity: "5x nedēļā, darba dienās", format: "Online", price: "Bezmaksas*" },
  { id: 31, program: "Angļu valoda (ar priekšzināšanām) (Intermediate)", courseId: 4, startDate: "24.04.2026", endDate: "01.06.2026", time: "09:00–12:00", intensity: "5x nedēļā, darba dienās", format: "Klātiene (Rīga, centrs)", price: "Bezmaksas*" },
  { id: 32, program: "Angļu valoda (ar priekšzināšanām) (Intermediate)", courseId: 4, startDate: "24.04.2026", endDate: "01.06.2026", time: "12:00–15:00", intensity: "5x nedēļā, darba dienās", format: "Klātiene (Rīga, centrs)", price: "Bezmaksas*" },
  { id: 33, program: "Angļu valoda (ar priekšzināšanām) (Intermediate)", courseId: 4, startDate: "24.04.2026", endDate: "01.06.2026", time: "17:00–20:00", intensity: "5x nedēļā, darba dienās", format: "Klātiene (Rīga, centrs)", price: "Bezmaksas*" },
];

export default function Calendar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<{
    name: string;
    schedule: string;
    format: string;
  } | null>(null);

  const handleEnrollClick = (
    program: string,
    startDate: string,
    endDate: string,
    time: string,
    format: string
  ) => {
    setSelectedCourse({
      name: program,
      schedule: `${startDate} – ${endDate} (${time})`,
      format,
    });
    setIsModalOpen(true);
  };

  const scrollToCourse = () => {
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="calendar" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#b22234] rounded-full mb-6">
            <CalendarIcon className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#101e33] mb-6 text-balance">
            Kursu kalendārs
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto underline decoration-[#b22234]/30 underline-offset-8">
            Tuvākās plānotās grupas
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Desktop Skats */}
          <div className="hidden lg:block overflow-hidden shadow-2xl rounded-2xl border border-gray-200">
            <table className="w-full bg-white text-sm">
              <thead className="bg-[#101e33] text-white">
                <tr>
                  <th className="px-6 py-5 text-left font-bold uppercase tracking-wider">Mācību programma</th>
                  <th className="px-6 py-5 text-left font-bold uppercase tracking-wider">Periods</th>
                  <th className="px-6 py-5 text-left font-bold uppercase tracking-wider">Laiks / Vieta</th>
                  <th className="px-6 py-5 text-left font-bold uppercase tracking-wider">Maksa</th>
                  <th className="px-6 py-5 text-center font-bold uppercase tracking-wider">Pieteikšanās</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {schedules.map((schedule, index) => (
                  <tr
                    key={schedule.id}
                    className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white hover:bg-red-50/30 transition-colors'}
                  >
                    <td className="px-6 py-5">
                      <button
                        onClick={() => scrollToCourse()}
                        className="font-bold text-[#101e33] hover:text-[#b22234] text-left underline decoration-dotted underline-offset-4 decoration-gray-300 hover:decoration-[#b22234]"
                      >
                        {schedule.program}
                      </button>
                    </td>
                    <td className="px-6 py-5">
                      <div className="font-semibold text-gray-900">
                        {schedule.startDate} – {schedule.endDate}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{schedule.intensity}</div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center text-gray-900 font-medium">
                        <Clock className="w-4 h-4 mr-2 text-[#b22234]" /> {schedule.time}
                      </div>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <MapPin className="w-3 h-3 mr-1" /> {schedule.format}
                      </div>
                    </td>
                    <td className="px-6 py-5 font-bold text-[#b22234] text-base">{schedule.price}</td>
                    <td className="px-6 py-5 text-center">
                      <button
                        onClick={() =>
                          handleEnrollClick(
                            schedule.program,
                            schedule.startDate,
                            schedule.endDate,
                            schedule.time,
                            schedule.format
                          )
                        }
                        className="bg-[#b22234] text-white px-6 py-2.5 rounded-lg font-bold hover:bg-[#8b1a28] transition-all shadow-md hover:shadow-lg active:scale-95"
                      >
                        Pieteikties
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobilais Skats */}
          <div className="lg:hidden space-y-4">
            {schedules.map((schedule) => (
              <div
                key={schedule.id}
                className="bg-white p-5 shadow-lg rounded-xl border-l-4 border-[#b22234]"
              >
                <button
                  onClick={() => scrollToCourse()}
                  className="text-lg font-bold text-[#101e33] mb-3 text-left block leading-tight"
                >
                  {schedule.program}
                </button>
                <div className="space-y-2.5 text-sm text-gray-600 mb-5">
                  <div className="flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-2 text-gray-400" /> {schedule.startDate} – {schedule.endDate}
                  </div>
                  <div className="flex items-center font-semibold text-gray-800">
                    <Clock className="w-4 h-4 mr-2 text-[#b22234]" /> {schedule.time} ({schedule.intensity})
                  </div>
                  <div className="flex items-center italic">
                    <MapPin className="w-4 h-4 mr-2 text-gray-400" /> {schedule.format}
                  </div>
                  <div className="text-[#b22234] font-extrabold text-xl mt-3">
                    Maksa: {schedule.price}
                  </div>
                </div>
                <button
                  onClick={() =>
                    handleEnrollClick(
                      schedule.program,
                      schedule.startDate,
                      schedule.endDate,
                      schedule.time,
                      schedule.format
                    )
                  }
                  className="w-full bg-[#b22234] text-white py-3.5 rounded-xl font-bold shadow-lg active:scale-95 transition-transform"
                >
                  Pieteikties
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#101e33] p-8 rounded-2xl text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">*Svarīga informācija par apmaksu</h3>
              <p className="text-gray-300 leading-relaxed max-w-4xl">
                BEZMAKSAS mācību grupas tiek plānotas sadarbībā ar Nodarbinātības valsts aģentūru (NVA).
                Ja Jums ir derīgs apmācību kupons, apmācību izmaksas tiek segtas pilnā apmērā.
                Sazinieties ar mums, lai precizētu reģistrācijas procesu.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
          </div>
        </div>
      </div>

      {selectedCourse && (
        <EnrollmentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          courseName={selectedCourse.name}
          courseSchedule={selectedCourse.schedule}
          courseFormat={selectedCourse.format}
        />
      )}
    </section>
  );
}