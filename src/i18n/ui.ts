export const PLAY_URL = 'https://play.google.com/store/apps/details?id=ma.darpaws.app';
export const API_URL = 'https://darpaws-api.onrender.com';
export const SUPPORT_EMAIL = 'abdelaliajdir@gmail.com';

export type Lang = 'fr' | 'en' | 'ar';
export const LANGS: Lang[] = ['fr', 'en', 'ar'];
export const LANG_LABELS: Record<Lang, string> = { fr: 'FR', en: 'EN', ar: 'عربي' };

const fr = {
  dir: 'ltr',
  meta: {
    title: 'DarPaws — Vos animaux entre de bonnes mains',
    description: 'Suivez la santé de vos animaux et trouvez un pet-sitter de confiance près de chez vous à Casablanca. Gratuit sur Google Play.',
  },
  nav: { features: 'Fonctionnalités', how: 'Comment ça marche', caretakers: 'Devenir pet‑sitter', blog: 'Blog', faq: 'FAQ' },
  download: 'Télécharger',
  play: { small: 'Disponible sur', big: 'Google Play' },
  hero: {
    eyebrow: 'Nouveau à Casablanca',
    title: 'Vos animaux entre de bonnes mains',
    lead: 'Suivez la santé de vos animaux et trouvez un pet‑sitter de confiance près de chez vous, en quelques secondes.',
    secondary: 'Voir comment ça marche',
    chips: ['Gratuit', 'Sans publicité', 'Android'],
    float: {
      vaccine: { title: 'Rage · Luna', text: 'Rappel dans 8 jours' },
      booking: { title: 'Réservation acceptée', text: 'Sara · mar. 27 oct. · 260 MAD' },
    },
  },
  features: {
    eyebrow: 'Fonctionnalités',
    title: 'Tout ce dont votre animal a besoin, dans une seule appli',
    rows: [
      {
        key: 'health',
        title: 'Le carnet de santé, toujours dans votre poche',
        text: 'Vaccins, visites chez le vétérinaire et notes au même endroit. L’appli vous montre les prochains rappels pour ne rien oublier.',
        points: ['Un profil par animal, avec l’âge en ans et en mois', 'Historique des vaccins et des visites', 'Modifier ou supprimer en un geste'],
      },
      {
        key: 'map',
        title: 'Des pet‑sitters de confiance, près de chez vous',
        text: 'Trouvez sur la carte les pet‑sitters de votre quartier. Comparez leurs services, leurs prix et les avis des autres propriétaires.',
        points: ['Un prix par service : à l’heure, par promenade, par nuit ou par séance', 'Les jours où ils sont disponibles', 'Avis laissés après une vraie garde'],
      },
      {
        key: 'bookings',
        title: 'Réservez en connaissant le prix',
        text: 'Choisissez le jour, les heures, les services et vos animaux. Le total estimé s’affiche avant d’envoyer la demande.',
        points: ['Total estimé avant d’envoyer', 'Seulement les créneaux où le pet‑sitter est libre', 'Pas de double réservation'],
      },
      {
        key: 'plans',
        title: 'Un imprévu ? Proposez une autre heure',
        text: 'Chacun peut proposer un nouveau créneau, l’autre accepte ou refuse. Toutes vos réservations sont aussi dans un calendrier.',
        points: ['Calendrier de vos réservations', 'WhatsApp ou appel une fois la réservation acceptée', 'Rappel la veille'],
      },
    ],
    grid: [
      { title: 'Français, English, العربية', text: 'L’appli parle votre langue, de gauche à droite ou de droite à gauche.' },
      { title: 'Continuer avec Google', text: 'Un compte en un geste, sans mot de passe à retenir.' },
      { title: '24 h ou AM/PM', text: 'Choisissez comment l’heure s’affiche.' },
      { title: 'Signaler ou bloquer', text: 'Un menu ⋯ sur chaque profil, avis et réservation.' },
      { title: 'Mode sombre', text: 'Confortable le soir, ou selon votre téléphone.' },
      { title: 'Vos données restent à vous', text: 'Supprimez votre compte et vos données quand vous voulez.' },
    ],
  },
  how: {
    eyebrow: 'Comment ça marche',
    title: 'Partez l’esprit tranquille en 3 étapes',
    steps: [
      { title: 'Créez votre compte', text: 'Avec votre e-mail ou Google, puis ajoutez vos animaux.' },
      { title: 'Choisissez un pet‑sitter', text: 'Comparez profils, prix, disponibilités et avis sur la carte.' },
      { title: 'Réservez et profitez', text: 'Envoyez votre demande avec le total estimé. Une fois acceptée, écrivez‑lui sur WhatsApp.' },
    ],
  },
  caretaker: {
    eyebrow: 'Pour les amoureux des animaux',
    title: 'Devenez pet‑sitter sur DarPaws',
    text: 'Créez votre profil, fixez un prix pour chaque service, vos horaires de la semaine et vos jours off. Les propriétaires près de chez vous ne réservent que quand vous êtes libre.',
    cta: 'Créer mon profil dans l’appli',
    cards: [
      { name: 'Sara B.', meta: 'Promenade · Luna 🐶', when: 'Sam. 30 oct · 9:00', status: 'Nouvelle demande' },
      { name: 'Youssef A.', meta: 'Garde · Milo 🐱', when: '2–5 nov.', status: 'Acceptée' },
    ],
    rate: 'Vos prix',
    rateValue: '50 MAD / h · 30 MAD / promenade',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions fréquentes',
    items: [
      { q: 'DarPaws est-il gratuit ?', a: 'Oui. L’application est gratuite et sans publicité. Les pet‑sitters fixent un prix par service (à l’heure, par promenade, par nuit ou par séance) et vous voyez le total estimé avant de réserver.' },
      { q: 'Et si je dois changer la date ?', a: 'Depuis la réservation, vous ou le pet‑sitter pouvez proposer une nouvelle heure. L’autre accepte ou refuse, et le prix estimé est recalculé.' },
      { q: 'Dans quelles villes ?', a: 'Nous commençons à Casablanca. Les pet‑sitters d’autres villes peuvent déjà créer leur profil.' },
      { q: 'Comment choisir un pet‑sitter ?', a: 'Regardez son profil, ses services, son tarif, la distance et les avis d’autres propriétaires. Vous pouvez aussi lui écrire un message avec votre demande.' },
      { q: 'Et sur iPhone ?', a: 'DarPaws est disponible sur Android. La version iPhone est prévue.' },
      { q: 'Comment supprimer mon compte ?', a: 'Dans l’appli : Profil → Supprimer le compte, ou depuis notre page web dédiée. Toutes vos données sont effacées.' },
    ],
  },
  blog: {
    eyebrow: 'Blog',
    title: 'Conseils pour vos compagnons',
    all: 'Tous les articles',
    read: 'Lire l’article',
    empty: 'Les premiers articles arrivent bientôt.',
    back: 'Tous les articles',
    pageTitle: 'Le blog DarPaws',
    pageText: 'Conseils pratiques pour prendre soin de vos animaux au Maroc.',
  },
  final: {
    title: 'Prêt à faire plaisir à votre compagnon ?',
    text: 'Téléchargez DarPaws gratuitement et trouvez un pet‑sitter près de chez vous.',
  },
  footer: {
    tagline: 'Prendre soin des animaux, ensemble.',
    product: 'Produit',
    legal: 'Légal',
    privacy: 'Confidentialité',
    deleteAccount: 'Supprimer mon compte',
    contact: 'Contact',
    rights: 'Tous droits réservés.',
  },
  dateLocale: 'fr-FR',
};

const ar: typeof fr = {
  dir: 'rtl',
  meta: {
    title: 'DarPaws — حيواناتك في أيدٍ أمينة',
    description: 'تابع صحة حيواناتك واعثر على مربٍّ موثوق بالقرب منك في الدار البيضاء. مجاني على Google Play.',
  },
  nav: { features: 'المميزات', how: 'كيف يعمل', caretakers: 'كن مربّياً', blog: 'المدونة', faq: 'أسئلة شائعة' },
  download: 'حمّل التطبيق',
  play: { small: 'متوفر على', big: 'Google Play' },
  hero: {
    eyebrow: 'جديد في الدار البيضاء',
    title: 'حيواناتك في أيدٍ أمينة',
    lead: 'تابع صحة حيواناتك واعثر على مربٍّ موثوق بالقرب منك، في ثوانٍ.',
    secondary: 'شاهد كيف يعمل',
    chips: ['مجاني', 'بدون إعلانات', 'أندرويد'],
    float: {
      vaccine: { title: 'داء الكلب · لونا', text: 'تذكير بعد 8 أيام' },
      booking: { title: 'تم قبول الحجز', text: 'سارة · الثلاثاء 27 أكتوبر · 260 درهم' },
    },
  },
  features: {
    eyebrow: 'المميزات',
    title: 'كل ما يحتاجه حيوانك، في تطبيق واحد',
    rows: [
      {
        key: 'health',
        title: 'دفتر الصحة، دائماً في جيبك',
        text: 'اللقاحات وزيارات البيطري والملاحظات في مكان واحد، والتطبيق يذكّرك بالمواعيد القادمة.',
        points: ['ملف لكل حيوان، مع العمر بالسنوات والأشهر', 'سجل اللقاحات والزيارات', 'التعديل أو الحذف بلمسة'],
      },
      {
        key: 'map',
        title: 'مربّون موثوقون، بالقرب منك',
        text: 'اعثر على الخريطة على المربّين في حيّك. قارن خدماتهم وأسعارهم وتقييمات المالكين الآخرين.',
        points: ['سعر لكل خدمة: بالساعة، للتمشية، لليلة أو للجلسة', 'الأيام التي يكونون فيها متاحين', 'تقييمات بعد حجز حقيقي'],
      },
      {
        key: 'bookings',
        title: 'احجز وأنت تعرف السعر',
        text: 'اختر اليوم والساعات والخدمات وحيواناتك. يظهر المجموع التقديري قبل إرسال الطلب.',
        points: ['المجموع التقديري قبل الإرسال', 'فقط الأوقات التي يكون فيها المربّي متاحاً', 'لا حجز مزدوج'],
      },
      {
        key: 'plans',
        title: 'تغيّرت خططك؟ اقترح وقتاً آخر',
        text: 'يمكن لكل طرف اقتراح موعد جديد، والطرف الآخر يقبل أو يرفض. وكل حجوزاتك في تقويم واحد.',
        points: ['تقويم لحجوزاتك', 'واتساب أو اتصال بعد قبول الحجز', 'تذكير قبل الموعد بيوم'],
      },
    ],
    grid: [
      { title: 'العربية، Français، English', text: 'التطبيق يتحدث لغتك، من اليمين إلى اليسار أو العكس.' },
      { title: 'المتابعة بحساب Google', text: 'حساب بلمسة واحدة، بدون كلمة سر تحفظها.' },
      { title: '24 ساعة أو ص/م', text: 'اختر طريقة عرض الوقت.' },
      { title: 'الإبلاغ أو الحظر', text: 'قائمة ⋯ على كل ملف وتقييم وحجز.' },
      { title: 'الوضع الداكن', text: 'مريح في المساء، أو حسب هاتفك.' },
      { title: 'بياناتك ملكك', text: 'احذف حسابك وبياناتك متى شئت.' },
    ],
  },
  how: {
    eyebrow: 'كيف يعمل',
    title: 'سافر مرتاح البال في 3 خطوات',
    steps: [
      { title: 'أنشئ حسابك', text: 'بالبريد الإلكتروني أو بحساب Google، ثم أضف حيواناتك.' },
      { title: 'اختر مربّياً', text: 'قارن الملفات والأسعار والأوقات المتاحة والتقييمات على الخريطة.' },
      { title: 'احجز واستمتع', text: 'أرسل طلبك مع المجموع التقديري. بعد القبول، راسله على واتساب.' },
    ],
  },
  caretaker: {
    eyebrow: 'لمحبي الحيوانات',
    title: 'كن مربّياً على DarPaws',
    text: 'أنشئ ملفك، حدّد سعراً لكل خدمة، وساعات عملك في الأسبوع وأيام عطلتك. المالكون القريبون منك يحجزون فقط عندما تكون متاحاً.',
    cta: 'أنشئ ملفي في التطبيق',
    cards: [
      { name: 'سارة ب.', meta: 'تمشية · لونا 🐶', when: 'السبت 30 أكتوبر · 9:00', status: 'طلب جديد' },
      { name: 'يوسف أ.', meta: 'رعاية · ميلو 🐱', when: '2–5 نونبر', status: 'مقبول' },
    ],
    rate: 'أسعارك',
    rateValue: '50 درهم / ساعة · 30 درهم / تمشية',
  },
  faq: {
    eyebrow: 'أسئلة شائعة',
    title: 'أسئلة شائعة',
    items: [
      { q: 'هل DarPaws مجاني؟', a: 'نعم، التطبيق مجاني وبدون إعلانات. المربّون يحددون سعراً لكل خدمة (بالساعة، للتمشية، لليلة أو للجلسة)، وترى المجموع التقديري قبل الحجز.' },
      { q: 'وإذا احتجت لتغيير الموعد؟', a: 'من صفحة الحجز، يمكنك أنت أو المربّي اقتراح وقت جديد. الطرف الآخر يقبل أو يرفض، ويُعاد حساب السعر التقديري.' },
      { q: 'في أي مدن؟', a: 'نبدأ من الدار البيضاء، ويمكن للمربّين في مدن أخرى إنشاء ملفاتهم من الآن.' },
      { q: 'كيف أختار مربّياً؟', a: 'اطّلع على ملفه وخدماته وسعره والمسافة وتقييمات المالكين الآخرين، ويمكنك أيضاً إرسال رسالة مع طلبك.' },
      { q: 'وماذا عن الآيفون؟', a: 'DarPaws متوفر على أندرويد، ونسخة الآيفون قادمة.' },
      { q: 'كيف أحذف حسابي؟', a: 'من التطبيق: الملف الشخصي ← حذف الحساب، أو من صفحة الويب المخصصة. تُحذف كل بياناتك.' },
    ],
  },
  blog: {
    eyebrow: 'المدونة',
    title: 'نصائح لرفاقك',
    all: 'كل المقالات',
    read: 'اقرأ المقال',
    empty: 'المقالات الأولى قادمة قريباً.',
    back: 'كل المقالات',
    pageTitle: 'مدونة DarPaws',
    pageText: 'نصائح عملية للعناية بحيواناتك في المغرب.',
  },
  final: {
    title: 'مستعد لإسعاد رفيقك؟',
    text: 'حمّل DarPaws مجاناً واعثر على مربٍّ بالقرب منك.',
  },
  footer: {
    tagline: 'نعتني بالحيوانات، معاً.',
    product: 'المنتج',
    legal: 'قانوني',
    privacy: 'الخصوصية',
    deleteAccount: 'حذف حسابي',
    contact: 'اتصل بنا',
    rights: 'جميع الحقوق محفوظة.',
  },
  dateLocale: 'ar-MA',
};

const en: typeof fr = {
  dir: 'ltr',
  meta: {
    title: 'DarPaws — Your pets in good hands',
    description: 'Track your pets’ health and find a trusted pet sitter near you in Casablanca. Free on Google Play.',
  },
  nav: { features: 'Features', how: 'How it works', caretakers: 'Become a sitter', blog: 'Blog', faq: 'FAQ' },
  download: 'Download',
  play: { small: 'Get it on', big: 'Google Play' },
  hero: {
    eyebrow: 'New in Casablanca',
    title: 'Your pets in good hands',
    lead: 'Keep track of your pets’ health and find a trusted pet sitter near you, in seconds.',
    secondary: 'See how it works',
    chips: ['Free', 'No ads', 'Android'],
    float: {
      vaccine: { title: 'Rabies · Luna', text: 'Due in 8 days' },
      booking: { title: 'Booking accepted', text: 'Sara · Tue 27 Oct · 260 MAD' },
    },
  },
  features: {
    eyebrow: 'Features',
    title: 'Everything your pet needs, in one app',
    rows: [
      {
        key: 'health',
        title: 'Their health record, always in your pocket',
        text: 'Vaccinations, vet visits and notes in one place. The app shows what’s coming up next so you never miss a date.',
        points: ['A profile for every pet, with age in years and months', 'Vaccination and vet visit history', 'Edit or delete in one tap'],
      },
      {
        key: 'map',
        title: 'Trusted pet sitters, near you',
        text: 'Find pet sitters in your neighbourhood on the map. Compare their services, prices and reviews from other owners.',
        points: ['A price per service: per hour, walk, night or session', 'The days they are available', 'Reviews left after a real booking'],
      },
      {
        key: 'bookings',
        title: 'Book knowing the price',
        text: 'Pick the day, the hours, the services and your pets. The estimated total shows before you send the request.',
        points: ['Estimated total before you send', 'Only times when the sitter is free', 'No double bookings'],
      },
      {
        key: 'plans',
        title: 'Plans changed? Propose a new time',
        text: 'Either side can suggest a new time; the other accepts or declines. All your bookings are in a calendar too.',
        points: ['A calendar of your bookings', 'WhatsApp or call once a booking is accepted', 'A reminder the day before'],
      },
    ],
    grid: [
      { title: 'English, Français, العربية', text: 'The app speaks your language, left-to-right or right-to-left.' },
      { title: 'Continue with Google', text: 'An account in one tap, no password to remember.' },
      { title: '24-hour or AM/PM', text: 'Choose how times are shown.' },
      { title: 'Report or block', text: 'A ⋯ menu on every profile, review and booking.' },
      { title: 'Dark mode', text: 'Easy on the eyes at night, or follows your phone.' },
      { title: 'Your data stays yours', text: 'Delete your account and your data whenever you want.' },
    ],
  },
  how: {
    eyebrow: 'How it works',
    title: 'Travel with peace of mind in 3 steps',
    steps: [
      { title: 'Create your account', text: 'With your email or Google, then add your pets.' },
      { title: 'Pick a pet sitter', text: 'Compare profiles, prices, availability and reviews on the map.' },
      { title: 'Book and relax', text: 'Send your request with the estimated total. Once accepted, message them on WhatsApp.' },
    ],
  },
  caretaker: {
    eyebrow: 'For animal lovers',
    title: 'Become a pet sitter on DarPaws',
    text: 'Create your profile and set a price for each service, your weekly hours and your days off. Owners near you can only book when you’re free.',
    cta: 'Create my profile in the app',
    cards: [
      { name: 'Sara B.', meta: 'Walking · Luna 🐶', when: 'Sat, Oct 30 · 9:00', status: 'New request' },
      { name: 'Youssef A.', meta: 'Sitting · Milo 🐱', when: 'Nov 2–5', status: 'Accepted' },
    ],
    rate: 'Your prices',
    rateValue: '50 MAD / h · 30 MAD / walk',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Frequently asked questions',
    items: [
      { q: 'Is DarPaws free?', a: 'Yes. The app is free and has no ads. Pet sitters set a price for each service (per hour, walk, night or session), and you see the estimated total before you book.' },
      { q: 'What if I need to change the date?', a: 'From the booking, you or the sitter can propose a new time. The other accepts or declines, and the estimated price is recalculated.' },
      { q: 'Which cities?', a: 'We’re starting in Casablanca. Pet sitters in other cities can already create their profile.' },
      { q: 'How do I choose a pet sitter?', a: 'Check their profile, services, rate, distance and reviews from other owners. You can also add a message to your request.' },
      { q: 'What about iPhone?', a: 'DarPaws is available on Android. An iPhone version is planned.' },
      { q: 'How do I delete my account?', a: 'In the app: Profile → Delete account, or on our dedicated web page. All your data is erased.' },
    ],
  },
  blog: {
    eyebrow: 'Blog',
    title: 'Tips for your companions',
    all: 'All articles',
    read: 'Read the article',
    empty: 'The first articles are coming soon.',
    back: 'All articles',
    pageTitle: 'The DarPaws blog',
    pageText: 'Practical tips for caring for your pets in Morocco.',
  },
  final: {
    title: 'Ready to make your companion happy?',
    text: 'Download DarPaws for free and find a pet sitter near you.',
  },
  footer: {
    tagline: 'Caring for pets, together.',
    product: 'Product',
    legal: 'Legal',
    privacy: 'Privacy',
    deleteAccount: 'Delete my account',
    contact: 'Contact',
    rights: 'All rights reserved.',
  },
  dateLocale: 'en-GB',
};

export const ui = { fr, en, ar };
export const t = (lang: Lang) => ui[lang];
export const base = (lang: Lang) => (lang === 'fr' ? '' : `/${lang}`);

// "/ar/blog/x" → "/blog/x"; "/en" → "/"
export const stripLang = (pathname: string) => {
  const p = pathname.replace(/^\/(en|ar)(?=\/|$)/, '');
  return p === '' ? '/' : p;
};
// Same page in another language: ("ar", "/blog/x") → "/ar/blog/x"
export const localizedPath = (lang: Lang, barePath: string) =>
  lang === 'fr' ? barePath : barePath === '/' ? `/${lang}` : `/${lang}${barePath}`;
