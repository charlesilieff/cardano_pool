import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { englishContent } from './content/english';
import { frenchContent } from './content/french';

const updateContent = () => {
  document.getElementById('whoAreWe')!!.innerHTML = i18next.t('whoAreWe');
  document.getElementById('whyJoinUs')!!.innerHTML = i18next.t('whoAreWe');
  document.getElementById('poolDetails')!!.innerHTML = i18next.t('poolDetails');
  document.getElementById('s1.title')!!.innerHTML = i18next.t('whoAreWe');
  document.getElementById('s1.p1')!!.innerHTML = i18next.t('s1.p1');
  document.getElementById('s1.p2')!!.innerHTML = i18next.t('s1.p2');
  document.getElementById('s1.p3')!!.innerHTML = i18next.t('s1.p3');
  document.getElementById('s1.p4')!!.innerHTML = i18next.t('s1.p4');
  document.getElementById('s2.title')!!.innerHTML = i18next.t('poolDetails');
  document.getElementById('s2.p1')!!.innerHTML = i18next.t('s2.p1');
  document.getElementById('s2.p2')!!.innerHTML = i18next.t('s2.p2');
  document.getElementById('s2.p3')!!.innerHTML = i18next.t('s2.p3');
  document.getElementById('s2.p4')!!.innerHTML = i18next.t('s2.p4');
};

i18next.use(LanguageDetector).init(
  {
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: englishContent,
      fr: frenchContent,
    },
  },
  function (err, t) {
    // init set content
    updateContent();
  }
);

// document.getElementById('whoAreWe')!!.innerHTML = i18next.t('whoAreWe');
// document.getElementById('whoAreWe')!!.innerHTML = i18next.t('whoAreWe');
// document.getElementById('whoAreWe')!!.innerHTML = i18next.t('whoAreWe');
// document.getElementById('whoAreWe')!!.innerHTML = i18next.t('whoAreWe');
// document.getElementById('whoAreWe')!!.innerHTML = i18next.t('whoAreWe');
// document.getElementById('whoAreWe')!!.innerHTML = i18next.t('whoAreWe');
// document.getElementById('whoAreWe')!!.innerHTML = i18next.t('whoAreWe');
// document.getElementById('whoAreWe')!!.innerHTML = i18next.t('whoAreWe');
// document.getElementById('whoAreWe')!!.innerHTML = i18next.t('whoAreWe');
// document.getElementById('whoAreWe')!!.innerHTML = i18next.t('whoAreWe');
// document.getElementById('whoAreWe')!!.innerHTML = i18next.t('whoAreWe');
// document.getElementById('whoAreWe')!!.innerHTML = i18next.t('whoAreWe');
// document.getElementById('whoAreWe')!!.innerHTML = i18next.t('whoAreWe');
// document.getElementById('whoAreWe')!!.innerHTML = i18next.t('whoAreWe');
// document.getElementById('whoAreWe')!!.innerHTML = i18next.t('whoAreWe');
// document.getElementById('whoAreWe')!!.innerHTML = i18next.t('whoAreWe');
// document.getElementById('whoAreWe')!!.innerHTML = i18next.t('whoAreWe');

document.querySelector('#lang-en')!!.addEventListener('click', () => {
  i18next.changeLanguage('en');
});

document.querySelector('#lang-fr')!!.addEventListener('click', () => {
  i18next.changeLanguage('fr');
});

i18next.on('languageChanged', () => {
  updateContent();
});
