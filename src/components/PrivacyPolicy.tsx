import { ArrowLeft, Shield } from 'lucide-react';

export default function PrivacyPolicy() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = '';
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={scrollToTop}
          className="mb-6 flex items-center gap-2 text-[#b22234] hover:text-[#8b1a28] font-semibold transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Atpakaļ
        </button>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-[#b22234]" />
            <h1 className="text-4xl font-bold text-[#101e33]">Privātuma politika</h1>
          </div>

          <p className="text-sm text-slate-600 mb-8">
            Spēkā no: 2024. gada 1. janvāra
          </p>

          <div className="space-y-8 text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-[#101e33] mb-4">1. Vispārīgie noteikumi</h2>
              <p>
                SIA "Dialogs AB" (turpmāk - Sabiedrība) apņemas aizsargāt Jūsu personas datus un ievērot Eiropas Savienības Vispārīgās datu aizsardzības regulas (GDPR) prasības. Šī privātuma politika paskaidro, kā mēs vācam, apstrādājam un aizsargājam Jūsu personas datus.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#101e33] mb-4">2. Datu pārzinis</h2>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="font-semibold">SIA "Dialogs AB"</p>
                <p>Reģistrācijas Nr.: 40003372060</p>
                <p>Adrese: Akadēmijas laukums 1-1, Rīga, LV-1050</p>
                <p>E-pasts: info@dialogs-ab.lv</p>
                <p>Tālrunis: 67432343</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[101e33] mb-4">3. Kādi dati tiek vākti</h2>
              <p className="mb-3">Mēs vācam un apstrādājam šādus personas datus:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Vārds un uzvārds</strong> - lai identificētu Jūs kā klientu vai apmeklētāju</li>
                <li><strong>E-pasta adrese</strong> - lai sazinātos ar Jums un sniegtu atbildi uz Jūsu jautājumiem</li>
                <li><strong>Tālruņa numurs</strong> - lai nepieciešamības gadījumā sazinātos ar Jums</li>
                <li><strong>Ziņojuma saturs</strong> - lai saprastu Jūsu jautājumu vai pieprasījumu</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#101e33] mb-4">4. Datu apstrādes mērķis un juridiskais pamats</h2>
              <p className="mb-3">Jūsu personas dati tiek apstrādāti šādiem mērķiem:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Atbildēt uz Jūsu jautājumiem un pieprasījumiem (juridiskais pamats: Jūsu piekrišana)</li>
                <li>Sniegt informāciju par mūsu pakalpojumiem un kursiem (juridiskais pamats: Jūsu piekrišana)</li>
                <li>Uzturēt klientu attiecības (juridiskais pamats: līguma izpilde)</li>
                <li>Izpildīt juridiskās saistības (juridiskais pamats: juridisko pienākumu izpilde)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#101e33] mb-4">5. Datu saglabāšanas termiņš</h2>
              <p>
                Jūsu personas dati tiek glabāti tikai tik ilgi, cik tas ir nepieciešams mērķu sasniegšanai, kuru dēļ tie tika vākti:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Kontaktformas dati: līdz 24 mēnešiem pēc pēdējās saziņas</li>
                <li>Klientu dati: saskaņā ar normatīvo aktu prasībām (parasti 5-7 gadi)</li>
                <li>Grāmatvedības dokumenti: saskaņā ar Grāmatvedības likumu (5 gadi)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#101e33] mb-4">6. Datu nodošana trešajām personām</h2>
              <p>
                Mēs <strong>nenododam</strong> Jūsu personas datus trešajām personām komercnolūkiem. Jūsu dati var tikt nodoti tikai šādos gadījumos:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Ja to prasa likums vai valsts institūcijas</li>
                <li>Mūsu IT pakalpojumu sniedzējiem (ar datu apstrādes līgumu)</li>
                <li>Ar Jūsu skaidru piekrišanu</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#101e33] mb-4">7. Jūsu tiesības</h2>
              <p className="mb-3">Saskaņā ar GDPR Jums ir šādas tiesības:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Tiesības piekļūt datiem</strong> - Jūs varat pieprasīt piekļuvi saviem personas datiem</li>
                <li><strong>Tiesības labot datus</strong> - Jūs varat pieprasīt labot neprecīzus datus</li>
                <li><strong>Tiesības dzēst datus</strong> - Jūs varat pieprasīt dzēst savus datus ("tiesības tikt aizmirstam")</li>
                <li><strong>Tiesības ierobežot apstrādi</strong> - Jūs varat pieprasīt ierobežot datu apstrādi</li>
                <li><strong>Tiesības uz datu pārnesamību</strong> - Jūs varat saņemt savus datus strukturētā formātā</li>
                <li><strong>Tiesības atsaukt piekrišanu</strong> - Jūs jebkurā laikā varat atsaukt savu piekrišanu</li>
                <li><strong>Tiesības iesniegt sūdzību</strong> - Jūs varat iesniegt sūdzību Datu valsts inspekcijai</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#101e33] mb-4">8. Datu drošība</h2>
              <p>
                Mēs izmantojam mūsdienīgus tehniskos un organizatoriskos pasākumus, lai aizsargātu Jūsu personas datus pret nejaušu vai nelikumīgu iznīcināšanu, pazaudēšanu, izmaiņām, neatļautu izpaušanu vai piekļuvi. Mūsu drošības pasākumi ietver:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>SSL šifrēšanu visai datu pārsūtīšanai</li>
                <li>Ierobežotu piekļuvi datiem tikai pilnvarotiem darbiniekiem</li>
                <li>Regulāras datu rezerves kopijas</li>
                <li>Darbinieku apmācību par datu aizsardzību</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#101e33] mb-4">9. Sīkdatnes (Cookies)</h2>
              <p>
                Mūsu tīmekļa vietne izmanto sīkdatnes, lai uzlabotu lietošanas pieredzi. Papildinformāciju par sīkdatņu izmantošanu skatiet mūsu sīkdatņu politikā.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#101e33] mb-4">10. Izmaiņas privātuma politikā</h2>
              <p>
                Mēs paturam tiesības jebkurā laikā mainīt šo privātuma politiku. Visas izmaiņas stāsies spēkā pēc to publicēšanas mūsu tīmekļa vietnē. Iesakām regulāri pārskatīt šo lapu, lai būtu informēts par jaunākajām izmaiņām.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#101e33] mb-4">11. Kontaktinformācija</h2>
              <p className="mb-3">
                Ja Jums ir jautājumi par šo privātuma politiku vai vēlaties izmantot savas tiesības, lūdzu, sazinieties ar mums:
              </p>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p><strong>E-pasts:</strong> info@dialogs-ab.lv</p>
                <p><strong>Tālrunis:</strong> 67432343</p>
                <p><strong>Adrese:</strong> Akadēmijas laukums 1-1, Rīga, LV-1050</p>
              </div>
            </section>

            <section className="border-t pt-6 mt-8">
              <p className="text-sm text-slate-600">
                <strong>Datu valsts inspekcija</strong><br />
                Ja uzskatāt, ka Jūsu tiesības uz datu aizsardzību ir pārkāptas, Jūs varat iesniegt sūdzību:<br />
                E-pasts: pasts@dvi.gov.lv<br />
                Tālrunis: +371 67 22 31 31<br />
                Adrese: Elijas iela 17, Rīga, LV-1050
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
