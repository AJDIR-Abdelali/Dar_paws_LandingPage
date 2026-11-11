// Privacy policy and account-deletion page, in the three site languages.
// Bodies are trusted static HTML (rendered with set:html). `{del}` is replaced by the
// localized delete-account link.
import type { Lang } from './ui';

export const UPDATED = { fr: '11 novembre 2026', en: '11 November 2026', ar: '11 نونبر 2026' } as const;

const fr = {
  privacy: {
    title: 'Politique de confidentialité',
    description: 'Quelles données DarPaws collecte, pourquoi, avec qui elles sont partagées et comment les supprimer.',
    updated: 'Dernière mise à jour',
    body: `
<p>DarPaws (« nous », « l’application ») aide les propriétaires d’animaux à suivre la santé de leurs compagnons, à trouver un gardien près de chez eux et à publier des annonces d’animaux perdus ou à adopter. Cette page explique quelles données l’application collecte, pourquoi, et comment les supprimer. DarPaws est exploité par AJDIR Abdelali.</p>

<h2>Les données que nous collectons</h2>
<ul>
  <li><strong>Compte :</strong> nom, adresse e-mail, numéro de téléphone si vous le donnez, et mot de passe (stocké uniquement sous forme chiffrée). Si vous vous connectez avec Google, nous recevons votre nom, votre e-mail et votre photo de profil. Si vous vous connectez avec Apple (iPhone), nous recevons un identifiant Apple, votre e-mail (ou une adresse relais d’Apple si vous choisissez de masquer le vôtre) et votre nom si vous le partagez.</li>
  <li><strong>Vos animaux :</strong> nom, espèce, race, âge, photo, besoins particuliers, vaccins et visites chez le vétérinaire.</li>
  <li><strong>Réservations et avis :</strong> les demandes envoyées ou reçues (dates, services, messages) et les notes et avis laissés.</li>
  <li><strong>Profil de gardien</strong> (seulement si vous devenez gardien) : nom affiché, photo, présentation, services, tarifs, ville et position choisie, visible par les autres utilisateurs sur la carte. Votre numéro de téléphone n’est communiqué au propriétaire qu’après acceptation d’une réservation.</li>
  <li><strong>Annonces de la communauté</strong> (animal perdu ou à adopter) : photos, description, ville, lieu et position de l’annonce. Votre numéro n’est affiché que si vous choisissez de le montrer. Les réponses à une annonce (message et numéro facultatif) sont envoyées à son auteur.</li>
  <li><strong>Localisation :</strong> utilisée pour afficher les gardiens et les annonces proches de vous. Nous gardons votre dernière position connue uniquement pour vous prévenir quand un animal est perdu près de chez vous. Vous pouvez refuser l’accès à la localisation dans les réglages de votre téléphone.</li>
  <li><strong>Signalements et blocages :</strong> le motif et les détails d’un signalement, pour que nous puissions l’examiner, et la liste des personnes que vous bloquez.</li>
  <li><strong>Jeton de notification :</strong> un identifiant Firebase Cloud Messaging pour vous envoyer les notifications de réservation, de rappel et d’animal perdu.</li>
</ul>
<p>Nous n’utilisons ni publicité, ni outil d’analyse ou de pistage, et nous ne vendons pas vos données.</p>

<h2>Comment nous les utilisons</h2>
<p>Uniquement pour faire fonctionner l’application : vous connecter, afficher vos animaux et vos rappels, mettre en relation propriétaires et gardiens, gérer les réservations, les avis et les annonces, assurer la modération et vous envoyer des notifications, que vous pouvez désactiver dans l’application ou dans les réglages du téléphone.</p>

<h2>Avec qui nous les partageons</h2>
<ul>
  <li><strong>Les autres utilisateurs DarPaws :</strong> lors d’une réservation, chacun voit le nom de l’autre et les détails de la demande. Les profils de gardien, les avis et les annonces de la communauté sont visibles par tous les utilisateurs. Une annonce ou un profil de gardien peut aussi être ouvert sur notre site par toute personne qui a son lien (par exemple quand vous le partagez) ; ces pages ne sont pas référencées par les moteurs de recherche.</li>
  <li><strong>Les prestataires qui font tourner l’application :</strong> Render (serveur, Francfort, Allemagne), Neon (base de données, Francfort), Cloudinary (stockage des photos), Google (connexion Google), Apple (connexion avec Apple) et Firebase Cloud Messaging (notifications). Les fonds de carte viennent d’OpenStreetMap, qui voit votre adresse IP lors de leur chargement. Si vous contactez quelqu’un par WhatsApp, la politique de WhatsApp s’applique.</li>
</ul>

<h2>Modération</h2>
<p>Pour protéger la communauté, nous pouvons masquer un avis ou une annonce et suspendre un compte qui ne respecte pas les règles, notamment après un signalement.</p>

<h2>Sécurité</h2>
<p>Tous les échanges entre l’application et notre serveur sont chiffrés (HTTPS). Les mots de passe sont chiffrés et ne sont jamais stockés en clair.</p>

<h2>Conservation et suppression</h2>
<p>Nous conservons vos données tant que votre compte existe. Vous pouvez supprimer votre compte à tout moment dans l’application (<strong>Profil → Supprimer le compte</strong>) ou sur la page {del}. La suppression efface définitivement votre profil, vos animaux, leur suivi de santé, vos réservations, avis, profil de gardien, annonces, signalements, blocages et jetons de notification.</p>

<h2>Âge minimum</h2>
<p>DarPaws est réservé aux personnes de 18 ans ou plus, et nous ne collectons pas sciemment les données de personnes plus jeunes.</p>

<h2>Modifications</h2>
<p>Si nous modifions cette politique, nous mettons à jour la date en haut de cette page.</p>

<h2>Contact</h2>
<p>Questions ou demandes : <a href="mailto:darpaws2026@gmail.com">darpaws2026@gmail.com</a></p>`,
    delLink: 'Supprimer mon compte',
  },
  del: {
    title: 'Supprimer mon compte DarPaws',
    description: 'Supprimez définitivement votre compte DarPaws et toutes ses données.',
    intro: 'La suppression efface définitivement votre profil, vos animaux, vaccins et visites, réservations, avis, profil de gardien, annonces et jetons de notification. Cette action est irréversible.',
    quick: 'Le plus simple est de le faire dans l’application : <strong>Profil → Supprimer le compte</strong>.',
    emailTitle: 'Compte créé avec e-mail et mot de passe',
    email: 'E-mail',
    password: 'Mot de passe',
    confirm: 'Je comprends que mon compte et mes données seront supprimés définitivement',
    submit: 'Supprimer mon compte',
    googleTitle: 'Compte créé avec Google',
    google: 'Écrivez à <a href="mailto:darpaws2026@gmail.com?subject=Supprimer%20mon%20compte%20DarPaws">darpaws2026@gmail.com</a> depuis l’adresse Google utilisée dans DarPaws, avec l’objet « Supprimer mon compte DarPaws ». Nous supprimons le compte et toutes ses données sous 7 jours et vous confirmons par e-mail.',
    deleting: 'Suppression…',
    wrong: 'E-mail ou mot de passe incorrect.',
    failed: 'Une erreur est survenue. Réessayez ou écrivez-nous.',
    done: 'Votre compte et toutes ses données ont été supprimés.',
    privacyLink: 'Politique de confidentialité',
  },
};

type Legal = typeof fr;

const en: Legal = {
  privacy: {
    title: 'Privacy Policy',
    description: 'What data DarPaws collects, why, who it is shared with and how to delete it.',
    updated: 'Last updated',
    body: `
<p>DarPaws (“we”, “the app”) helps pet owners keep track of their pets’ health, find a pet sitter nearby and post lost or adoptable pets. This page explains what data the app collects, why, and how you can delete it. DarPaws is operated by AJDIR Abdelali.</p>

<h2>Data we collect</h2>
<ul>
  <li><strong>Account:</strong> your name, email address, phone number if you give it, and password (stored only as a secure hash). If you sign in with Google, we receive your name, email address and profile picture. If you sign in with Apple (iPhone), we receive an Apple user ID, your email address (or an Apple relay address if you choose to hide yours) and your name if you share it.</li>
  <li><strong>Your pets:</strong> name, type, breed, age, photo, special needs, vaccinations and vet visits.</li>
  <li><strong>Bookings and reviews:</strong> requests you send or receive (dates, services, messages) and the ratings and reviews you leave.</li>
  <li><strong>Sitter profile</strong> (only if you become a sitter): display name, photo, bio, services, rates, city and the location you set, which other users see on the map. Your phone number is shared with an owner only after you accept their booking.</li>
  <li><strong>Community posts</strong> (lost or adoptable pets): photos, description, city, place and the post’s location. Your phone number is shown only if you choose to show it. Replies to a post (a message and an optional phone number) go to the person who posted it.</li>
  <li><strong>Location:</strong> used to show sitters and posts near you. We keep your last known location only to alert you when a pet goes missing nearby. You can deny location access in your phone’s settings.</li>
  <li><strong>Reports and blocks:</strong> the reason and details of a report, so we can review it, and the list of people you block.</li>
  <li><strong>Notification token:</strong> a Firebase Cloud Messaging device token, so we can send booking, reminder and lost-pet notifications.</li>
</ul>
<p>We do not use advertising, analytics or tracking tools, and we do not sell your data.</p>

<h2>How we use it</h2>
<p>Only to run the app: to sign you in, show your pets and reminders, connect owners with sitters, handle bookings, reviews and posts, moderate content, and send you notifications, which you can turn off in the app or in your phone’s settings.</p>

<h2>Who we share it with</h2>
<ul>
  <li><strong>Other DarPaws users:</strong> when you book or are booked, each side sees the other’s name and the booking details. Sitter profiles, reviews and community posts are visible to all users. A post or sitter profile can also be opened on our website by anyone who has its link (for example when you share it); these pages are kept out of search engines.</li>
  <li><strong>Service providers that run the app for us:</strong> Render (server, Frankfurt, Germany), Neon (database, Frankfurt), Cloudinary (photo storage), Google (Google Sign-In), Apple (Sign in with Apple) and Firebase Cloud Messaging (notifications). Map tiles are loaded from OpenStreetMap, which sees your IP address when they load. If you contact someone on WhatsApp, WhatsApp’s policy applies.</li>
</ul>

<h2>Moderation</h2>
<p>To keep the community safe, we may hide a review or a post and suspend an account that breaks the rules, for example after a report.</p>

<h2>Security</h2>
<p>All traffic between the app and our server is encrypted (HTTPS). Passwords are hashed and never stored in plain text.</p>

<h2>Keeping and deleting your data</h2>
<p>We keep your data while your account exists. You can delete your account at any time in the app (<strong>Profile → Delete account</strong>) or on the {del} page. Deleting your account permanently removes your profile, pets, health records, bookings, reviews, sitter profile, posts, reports, blocks and notification tokens.</p>

<h2>Minimum age</h2>
<p>DarPaws is only for people aged 18 or over, and we do not knowingly collect data from anyone younger.</p>

<h2>Changes</h2>
<p>If we change this policy, we will update the date at the top of this page.</p>

<h2>Contact</h2>
<p>Questions or requests: <a href="mailto:darpaws2026@gmail.com">darpaws2026@gmail.com</a></p>`,
    delLink: 'Delete my account',
  },
  del: {
    title: 'Delete your DarPaws account',
    description: 'Permanently delete your DarPaws account and all its data.',
    intro: 'Deleting your account permanently removes your profile, pets, vaccinations and vet visits, bookings, reviews, sitter profile, posts and notification tokens. This cannot be undone.',
    quick: 'The quickest way is in the app: <strong>Profile → Delete account</strong>.',
    emailTitle: 'Signed up with email and password',
    email: 'Email',
    password: 'Password',
    confirm: 'I understand my account and data will be permanently deleted',
    submit: 'Delete my account',
    googleTitle: 'Signed up with Google',
    google: 'Email <a href="mailto:darpaws2026@gmail.com?subject=Delete%20my%20DarPaws%20account">darpaws2026@gmail.com</a> from the Google address you use in DarPaws, with the subject “Delete my DarPaws account”. We delete the account and all its data within 7 days and reply to confirm.',
    deleting: 'Deleting…',
    wrong: 'Wrong email or password.',
    failed: 'Something went wrong. Please try again or email us.',
    done: 'Your account and all its data have been deleted.',
    privacyLink: 'Privacy policy',
  },
};

const ar: Legal = {
  privacy: {
    title: 'سياسة الخصوصية',
    description: 'ما هي البيانات التي يجمعها DarPaws، ولماذا، ومع من تتم مشاركتها، وكيف تحذفها.',
    updated: 'آخر تحديث',
    body: `
<p>يساعد DarPaws («نحن»، «التطبيق») أصحاب الحيوانات على متابعة صحة حيواناتهم، وإيجاد حارس قريب منهم، ونشر إعلانات الحيوانات الضائعة أو المعروضة للتبني. توضح هذه الصفحة البيانات التي يجمعها التطبيق، ولماذا، وكيف يمكنك حذفها. مُشغّل DarPaws: AJDIR Abdelali.</p>

<h2>البيانات التي نجمعها</h2>
<ul>
  <li><strong>الحساب:</strong> الاسم والبريد الإلكتروني ورقم الهاتف إذا أدخلته وكلمة المرور (تُحفظ مشفّرة فقط). إذا سجّلت الدخول بحساب Google، نتلقى اسمك وبريدك الإلكتروني وصورة ملفك. إذا سجّلت الدخول باستخدام Apple (iPhone)، نتلقى معرّف Apple وبريدك الإلكتروني (أو عنوان وسيط من Apple إذا اخترت إخفاء بريدك) واسمك إذا شاركته.</li>
  <li><strong>حيواناتك:</strong> الاسم والنوع والسلالة والعمر والصورة والاحتياجات الخاصة واللقاحات وزيارات البيطري.</li>
  <li><strong>الحجوزات والتقييمات:</strong> الطلبات التي ترسلها أو تستقبلها (التواريخ والخدمات والرسائل) والتقييمات والآراء التي تتركها.</li>
  <li><strong>ملف الحارس</strong> (فقط إذا أصبحت حارسًا): الاسم المعروض والصورة والنبذة والخدمات والأسعار والمدينة والموقع الذي تختاره، ويظهر للمستخدمين على الخريطة. لا يُشارَك رقم هاتفك مع صاحب الحيوان إلا بعد قبول الحجز.</li>
  <li><strong>إعلانات المجتمع</strong> (حيوان ضائع أو للتبني): الصور والوصف والمدينة والمكان وموقع الإعلان. لا يظهر رقمك إلا إذا اخترت إظهاره. الردود على الإعلان (رسالة ورقم اختياري) تُرسل إلى صاحبه.</li>
  <li><strong>الموقع:</strong> يُستعمل لعرض الحراس والإعلانات القريبة منك. نحتفظ بآخر موقع معروف لك فقط لتنبيهك عند ضياع حيوان بالقرب منك. يمكنك رفض الوصول إلى الموقع من إعدادات هاتفك.</li>
  <li><strong>البلاغات والحظر:</strong> سبب البلاغ وتفاصيله حتى نتمكن من مراجعته، وقائمة الأشخاص الذين تحظرهم.</li>
  <li><strong>رمز الإشعارات:</strong> معرّف Firebase Cloud Messaging لإرسال إشعارات الحجوزات والتذكيرات والحيوانات الضائعة.</li>
</ul>
<p>لا نستعمل الإعلانات ولا أدوات التحليل أو التتبّع، ولا نبيع بياناتك.</p>

<h2>كيف نستعملها</h2>
<p>فقط لتشغيل التطبيق: تسجيل دخولك، وعرض حيواناتك وتذكيراتك، وربط أصحاب الحيوانات بالحراس، وإدارة الحجوزات والتقييمات والإعلانات، والإشراف على المحتوى، وإرسال الإشعارات التي يمكنك إيقافها من التطبيق أو من إعدادات الهاتف.</p>

<h2>مع من نشاركها</h2>
<ul>
  <li><strong>مستخدمو DarPaws الآخرون:</strong> عند الحجز، يرى كل طرف اسم الآخر وتفاصيل الطلب. ملفات الحراس والتقييمات وإعلانات المجتمع مرئية لجميع المستخدمين. يمكن أيضًا فتح الإعلان أو ملف الحارس على موقعنا من طرف أي شخص يملك رابطه (مثلًا عند مشاركته)، وهذه الصفحات غير مفهرسة في محركات البحث.</li>
  <li><strong>مزوّدو الخدمات الذين يشغّلون التطبيق:</strong> Render (الخادم، فرانكفورت، ألمانيا)، وNeon (قاعدة البيانات، فرانكفورت)، وCloudinary (تخزين الصور)، وGoogle (تسجيل الدخول بـGoogle)، وApple (تسجيل الدخول باستخدام Apple)، وFirebase Cloud Messaging (الإشعارات). تُحمَّل الخرائط من OpenStreetMap الذي يرى عنوان IP الخاص بك عند تحميلها. إذا تواصلت مع شخص عبر واتساب، تُطبَّق سياسة واتساب.</li>
</ul>

<h2>الإشراف</h2>
<p>لحماية المجتمع، يمكننا إخفاء تقييم أو إعلان وتعليق حساب لا يحترم القواعد، خاصة بعد بلاغ.</p>

<h2>الأمان</h2>
<p>جميع الاتصالات بين التطبيق وخادمنا مشفّرة (HTTPS). كلمات المرور مشفّرة ولا تُحفظ أبدًا كنص واضح.</p>

<h2>الاحتفاظ بالبيانات وحذفها</h2>
<p>نحتفظ ببياناتك ما دام حسابك موجودًا. يمكنك حذف حسابك في أي وقت من التطبيق (<strong>الملف ← حذف الحساب</strong>) أو من صفحة {del}. يحذف ذلك نهائيًا ملفك وحيواناتك وسجلها الصحي وحجوزاتك وتقييماتك وملف الحارس وإعلاناتك وبلاغاتك وقائمة الحظر ورموز الإشعارات.</p>

<h2>السن الأدنى</h2>
<p>DarPaws مخصص للأشخاص البالغين 18 سنة فما فوق، ولا نجمع عن قصد بيانات من هم أصغر سنًا.</p>

<h2>التعديلات</h2>
<p>إذا عدّلنا هذه السياسة، نحدّث التاريخ في أعلى هذه الصفحة.</p>

<h2>التواصل</h2>
<p>للأسئلة أو الطلبات: <a href="mailto:darpaws2026@gmail.com">darpaws2026@gmail.com</a></p>`,
    delLink: 'حذف حسابي',
  },
  del: {
    title: 'حذف حسابك في DarPaws',
    description: 'احذف حسابك في DarPaws وجميع بياناته نهائيًا.',
    intro: 'حذف الحساب يزيل نهائيًا ملفك وحيواناتك ولقاحاتها وزيارات البيطري والحجوزات والتقييمات وملف الحارس والإعلانات ورموز الإشعارات. لا يمكن التراجع عن ذلك.',
    quick: 'أسهل طريقة من التطبيق: <strong>الملف ← حذف الحساب</strong>.',
    emailTitle: 'حساب أُنشئ بالبريد الإلكتروني وكلمة المرور',
    email: 'البريد الإلكتروني',
    password: 'كلمة المرور',
    confirm: 'أفهم أن حسابي وبياناتي ستُحذف نهائيًا',
    submit: 'حذف حسابي',
    googleTitle: 'حساب أُنشئ بـGoogle',
    google: 'راسلنا على <a href="mailto:darpaws2026@gmail.com?subject=Delete%20my%20DarPaws%20account">darpaws2026@gmail.com</a> من عنوان Google الذي تستعمله في DarPaws، بالموضوع «حذف حسابي في DarPaws». نحذف الحساب وجميع بياناته خلال 7 أيام ونؤكد لك بالبريد.',
    deleting: 'جارٍ الحذف…',
    wrong: 'البريد الإلكتروني أو كلمة المرور غير صحيحة.',
    failed: 'حدث خطأ. حاول مرة أخرى أو راسلنا.',
    done: 'تم حذف حسابك وجميع بياناته.',
    privacyLink: 'سياسة الخصوصية',
  },
};

export const legal: Record<Lang, Legal> = { fr, en, ar };
