import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

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
      en: {
        translation: {
          whoAreWe: 'Who we are?',
          whyJoinUs: 'Why join us?',
          poolDetails: 'Pool details',
          s1: {
            p1: 'We are Charles 😊 and Mika 😉, a partnership of two French entrepreneurs motivated to democratize the use of crypto-currencies.',
            p2: 'Mika, who helps administrations in their digital transformations, brings his technical and human experience. Charles brings over a decade of experience in software engineering. Together, we are enthusiastically participating in the development of the Cardano network!',
            p3: 'We have been involved in cryptocurrencies since 2017, when we had the chance to make a profit at the top of the market. We discovered the Cardano project at that moment, and since then, we have been following it with great interest. Our goal with ADA Pool Europe is to create a community of people who share our values, believe in Cardano, and to which we would like to offer a good capital pooling experience.',
            p4: 'Our goal with ADA Pool Europe is to create a community of people who share our values, believe in Cardano and to which we offer a good capital pooling experience.',
          },
          s2: {
            p1: 'We are motivated to democratize the use of crypto-currencies.',
            p2: ' high availability infrastructure',
            p3: ' with the lowest possible fees',
            p4: ' open to the largest audience possible',
            p5: ' dedicated and secure servers',
            p6: 'Our Europe-based Cardano staking pool is dedicated to strengthening and decentralizing the Cardano network. \n We offer high-availability, reliable and secure staking, based on two relay nodes and one producer node in enterprise-class server centers. Our goal is to create a good participant experience.',
            p7: "We put a strong focus on the performance and security of our pool infrastructure. We would like to allow as many people as possible to participate in the crypto adventure. That's why, unlike many other pools, we don't charge variable fees (0%).",
            p8: 'By staking your ADAs in our pool, you participate in the operation of the Cardano network.',
          },
        },
      },
      fr: {
        translation: {
          whoAreWe: 'Qui sommes-nous ?',
          whyJoinUs: 'Pourquoi s’engager avec nous ?',
        },
      },
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
