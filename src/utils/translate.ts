declare global {
  interface Window {
    google: any;
  }
}

const setCookie = (name: string, value: string, days: number = 365) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);

  const baseCookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;

  document.cookie = baseCookie;

  if (
    window.location.hostname === 'dialogs-ab.lv' ||
    window.location.hostname.endsWith('.dialogs-ab.lv')
  ) {
    document.cookie = `${baseCookie};domain=.dialogs-ab.lv`;
  }
};

const getCookie = (name: string): string | null => {
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }

  return null;
};

const deleteCookie = (name: string) => {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;

  if (
    window.location.hostname === 'dialogs-ab.lv' ||
    window.location.hostname.endsWith('.dialogs-ab.lv')
  ) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;domain=.dialogs-ab.lv`;
  }
};

export const changeLanguage = (lang: string) => {
  const normalizedLang = lang.trim().toLowerCase();

  const languageMap: Record<string, string> = {
    lv: '/lv/lv',
    en: '/lv/en',
    ru: '/lv/ru',
  };

  const cookieValue = languageMap[normalizedLang] || '/lv/lv';

  if (normalizedLang === 'lv') {
    deleteCookie('googtrans');
    setCookie('googtrans', '/lv/lv', 365);
  } else {
    setCookie('googtrans', cookieValue, 365);
  }

  window.location.reload();
};

export const getCurrentLanguage = (): string => {
  const googtransCookie = getCookie('googtrans');

  if (googtransCookie) {
    if (googtransCookie.includes('/lv/en')) return 'EN';
    if (googtransCookie.includes('/lv/ru')) return 'RU';
    if (googtransCookie.includes('/lv/lv')) return 'LV';
  }

  return 'LV';
};