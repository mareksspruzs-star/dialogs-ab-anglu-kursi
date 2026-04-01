declare global {
  interface Window {
    google: any;
  }
}

const setCookie = (name: string, value: string, days: number = 365) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};

const getCookie = (name: string): string | null => {
  const nameEQ = name + "=";
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
};

export const changeLanguage = (lang: string) => {
  const languageMap: { [key: string]: string } = {
    'LV': '/lv/lv',
    'EN': '/lv/en',
    'RU': '/lv/ru'
  };

  const cookieValue = languageMap[lang] || '/lv/lv';

  if (lang === 'LV') {
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
  }

  return 'LV';
};
