import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Shield } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    honeypot: '',
  });
  const [gdprConsent, setGdprConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    if (formData.honeypot) {
      setStatus('error');
      setErrorMessage('Kļūda nosūtot ziņojumu');
      return;
    }

    if (!gdprConsent) {
      setStatus('error');
      setErrorMessage('Lūdzu, piekrītiet personas datu apstrādei');
      return;
    }

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`;
      console.log('apiUrl FRONTENDĀ =', apiUrl);

      const { honeypot, ...dataToSend } = formData;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      const responseText = await response.text();
      let result: { error?: string; message?: string } = {};

      if (responseText) {
        try {
          result = JSON.parse(responseText);
        } catch {
          throw new Error('Serveris atgrieza nederīgu atbildi');
        }
      }

      if (!response.ok) {
        throw new Error(result.error || 'Neizdevās nosūtīt ziņojumu');
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '', honeypot: '' });
      setGdprConsent(false);

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'Kļūda nosūtot ziņojumu'
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="kontakti" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Sazinies ar mums</h2>
          <p className="text-xl text-slate-600">
            Ir jautājumi? Mēs labprāt atbildēsim!
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          {status === 'success' ? (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Paldies!</h3>
              <p className="text-slate-600">
                Jūsu ziņojums ir nosūtīts. Mēs sazināsimies ar jums tuvākajā laikā.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-slate-700 mb-2"
                >
                  Vārds *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Jūsu vārds"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-slate-700 mb-2"
                >
                  E-pasts *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="jusu.epasts@piemers.lv"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-slate-700 mb-2"
                >
                  Tālrunis
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="+371 12345678"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-slate-700 mb-2"
                >
                  Ziņojums *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Jūsu ziņojums..."
                />
              </div>

              <div className="hidden">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <input
                  type="checkbox"
                  id="gdpr-consent"
                  checked={gdprConsent}
                  onChange={(e) => setGdprConsent(e.target.checked)}
                  className="mt-1 w-5 h-5 text-[#b22234] border-slate-300 rounded focus:ring-2 focus:ring-[#b22234] cursor-pointer"
                  required
                />
                <label
                  htmlFor="gdpr-consent"
                  className="text-sm text-slate-700 flex-1 cursor-pointer"
                >
                  <Shield className="w-4 h-4 inline-block mr-1 text-[#b22234]" />
                  Piekrītu savu personas datu apstrādei, lai SIA "Dialogs AB" varētu
                  sazināties ar mani un sniegt atbildi uz manu pieprasījumu. Dati
                  netiks nodoti trešajām personām.{' '}
                  <a
                    href="https://www.dialogs-ab.lv/par-mums/privatuma-politika/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#b22234] hover:underline font-semibold"
                  >
                    Privātuma politika
                  </a>
                </label>
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <p className="text-red-700">{errorMessage}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading' || !gdprConsent}
                className="w-full bg-[#b22234] hover:bg-[#8b1a28] text-white font-semibold py-4 px-6 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Nosūta...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Nosūtīt ziņojumu
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}