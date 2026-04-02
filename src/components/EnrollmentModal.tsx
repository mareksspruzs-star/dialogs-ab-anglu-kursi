import React, { useState } from 'react';
import { X, CheckCircle, AlertCircle, Shield, MapPin } from 'lucide-react';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseName: string;
  courseSchedule: string;
  courseFormat: string;
}

export default function EnrollmentModal({
  isOpen,
  onClose,
  courseName,
  courseSchedule,
  courseFormat,
}: EnrollmentModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    additionalQuestions: '',
    honeypot: '',
  });

  const [gdprConsent, setGdprConsent] = useState(false);
  const [status, setStatus] =
    useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    if (formData.honeypot) {
      setStatus('error');
      setErrorMessage('Kļūda nosūtot pieteikumu');
      return;
    }

    if (!gdprConsent) {
      setStatus('error');
      setErrorMessage('Lūdzu, piekrītiet personas datu apstrādei');
      return;
    }

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`;

      const { honeypot, ...dataToSend } = formData;

      const payload = {
        name: dataToSend.name,
        email: dataToSend.email,
        phone: dataToSend.phone,
        message: `Pieteikums no kursu kalendāra

Programma: ${courseName}
Grafiks: ${courseSchedule}
Formāts / vieta: ${courseFormat}

Papildu jautājumi:
${dataToSend.additionalQuestions || 'Nav norādīti'}`,
        source: 'calendar-enrollment',
        courseName,
        courseSchedule,
        courseFormat,
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
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
        throw new Error(result.error || 'Neizdevās nosūtīt pieteikumu');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        additionalQuestions: '',
        honeypot: '',
      });
      setGdprConsent(false);

      setTimeout(() => {
        setStatus('idle');
        onClose();
      }, 3000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'Kļūda nosūtot pieteikumu'
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slideUp">
        <div className="sticky top-0 bg-gradient-to-r from-[#101e33] to-[#1a2d4a] text-white px-6 py-5 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-2xl font-bold">Pieteikums kursam</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors"
            aria-label="Aizvērt"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {status === 'success' ? (
            <div className="text-center py-12">
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#101e33] mb-3">
                Paldies!
              </h3>
              <p className="text-gray-700 text-lg">
                Jūsu pieteikums ir saņemts. Mēs drīz ar Jums sazināsimies.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="bg-[#f9f7f2] border-l-4 border-[#b22234] p-4 rounded">
                <p className="text-sm font-semibold text-[#101e33] mb-1">
                  Izvēlētais kurss:
                </p>
                <p className="text-lg font-bold text-[#b22234]">
                  {courseName}
                </p>
                <p className="text-sm text-gray-600 mt-1">{courseSchedule}</p>
                <p className="text-sm text-gray-700 mt-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#b22234]" />
                  {courseFormat}
                </p>
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-[#101e33] mb-2"
                >
                  Vārds, Uzvārds *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b22234] focus:border-transparent transition-all"
                  placeholder="Jūsu vārds un uzvārds"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-[#101e33] mb-2"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b22234] focus:border-transparent transition-all"
                  placeholder="jusu.epasts@piemers.lv"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-[#101e33] mb-2"
                >
                  Tālrunis *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b22234] focus:border-transparent transition-all"
                  placeholder="+371 12345678"
                />
              </div>

              <div>
                <label
                  htmlFor="additionalQuestions"
                  className="block text-sm font-semibold text-[#101e33] mb-2"
                >
                  Papildu jautājumi
                </label>
                <textarea
                  id="additionalQuestions"
                  name="additionalQuestions"
                  value={formData.additionalQuestions}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b22234] focus:border-transparent transition-all resize-none"
                  placeholder="Ja Jums ir kādi jautājumi vai vēlaties ko papildus pastāstīt..."
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

              <div className="flex items-start gap-3 p-4 bg-[#f9f7f2] rounded-lg border border-gray-200">
                <input
                  type="checkbox"
                  id="gdpr-consent"
                  checked={gdprConsent}
                  onChange={(e) => setGdprConsent(e.target.checked)}
                  className="mt-1 w-5 h-5 text-[#b22234] border-gray-300 rounded focus:ring-2 focus:ring-[#b22234] cursor-pointer"
                  required
                />
                <label
                  htmlFor="gdpr-consent"
                  className="text-sm text-gray-700 flex-1 cursor-pointer"
                >
                  <Shield className="w-4 h-4 inline-block mr-1 text-[#b22234]" />
                  Piekrītu savu datu apstrādei pieteikuma apstrādes nolūkos
                  saskaņā ar{' '}
                  <a
                    href="/privatuma-politika"
                    className="text-[#b22234] hover:underline font-semibold"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.hash = 'privatuma-politika';
                    }}
                  >
                    Privātuma politiku
                  </a>
                  .
                </label>
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <p className="text-red-700">{errorMessage}</p>
                </div>
              )}

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-all"
                >
                  Atcelt
                </button>
                <button
                  type="submit"
                  disabled={status === 'loading' || !gdprConsent}
                  className="flex-1 bg-[#b22234] hover:bg-[#8b1a28] text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Nosūta...
                    </>
                  ) : (
                    'Nosūtīt pieteikumu'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}