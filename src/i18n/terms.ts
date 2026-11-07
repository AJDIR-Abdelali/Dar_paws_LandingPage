// Terms of Service in the three site languages. Bodies are trusted static HTML
// (rendered with set:html). Keep the three versions in step, and update
// UPDATED in legal.ts when they change.
import type { Lang } from './ui';

export const OPERATOR = 'AJDIR Abdelali';

type Terms = { title: string; description: string; updated: string; body: string };

const fr: Terms = {
  title: 'Conditions d’utilisation',
  description: 'Les règles d’utilisation de DarPaws : âge minimum, réservations, paiements et responsabilités.',
  updated: 'Dernière mise à jour',
  body: `
<p>Ces conditions s’appliquent à l’application et au site DarPaws. En créant un compte ou en utilisant DarPaws, vous les acceptez. Si vous ne les acceptez pas, n’utilisez pas le service.</p>

<h2>Qui sommes-nous</h2>
<p>DarPaws est exploité par ${OPERATOR}. Contact : <a href="mailto:darpaws2026@gmail.com">darpaws2026@gmail.com</a>.</p>

<h2>Âge minimum</h2>
<p>DarPaws est réservé aux personnes de <strong>18 ans ou plus</strong>. En créant un compte, vous confirmez avoir cet âge. Nous pouvons supprimer un compte s’il apparaît que cette condition n’est pas respectée.</p>

<h2>Ce que fait DarPaws</h2>
<p>DarPaws permet de suivre la santé de ses animaux, de trouver un gardien près de chez soi et de publier des annonces d’animaux perdus ou à adopter. DarPaws met les personnes en relation : nous n’employons pas les gardiens, nous ne gardons pas les animaux et nous ne sommes pas partie à l’accord entre un propriétaire et un gardien.</p>

<h2>Votre compte</h2>
<p>Donnez des informations exactes et gardez votre mot de passe confidentiel. Vous êtes responsable de ce qui est fait avec votre compte. Vous pouvez le supprimer à tout moment.</p>

<h2>Réservations, prix et paiements</h2>
<ul>
  <li>L’application est gratuite. Les gardiens fixent eux-mêmes leurs prix, et le total affiché avant une réservation est une estimation.</li>
  <li><strong>Il n’y a pas de paiement dans l’application.</strong> Le propriétaire et le gardien s’accordent directement sur le prix et le mode de paiement. DarPaws ne reçoit, ne garde et ne rembourse aucune somme.</li>
  <li>Toute annulation ou demande de remboursement se règle directement entre le propriétaire et le gardien.</li>
</ul>
<p>Si un jour nous proposons des paiements ou des frais, nous mettrons ces conditions à jour avant.</p>

<h2>Si vous êtes gardien</h2>
<p>Vous vous engagez à décrire honnêtement vos services et vos prix, à respecter les réservations que vous acceptez et à prendre soin des animaux confiés. Vous êtes responsable de vos obligations légales et fiscales. Le badge « Vérifié » indique un contrôle de notre part : ce n’est pas une garantie sur la personne ou la qualité de ses services.</p>

<h2>Si vous êtes propriétaire</h2>
<p>Vous vous engagez à donner des informations exactes sur votre animal (santé, vaccins, comportement, besoins particuliers) et à prévenir le gardien de tout risque. Rencontrez le gardien et vérifiez qu’il vous convient avant de lui confier votre animal.</p>

<h2>Annonces de la communauté</h2>
<p>Seule l’adoption gratuite est autorisée : la vente d’animaux est interdite. Ne publiez que des annonces réelles et marquez-les comme terminées lorsqu’elles ne sont plus d’actualité. Ne payez jamais pour récupérer un animal ou pour l’adopter, et signalez toute demande d’argent.</p>

<h2>Ce qui est interdit</h2>
<ul>
  <li>Donner de fausses informations, usurper une identité ou publier de faux avis.</li>
  <li>Harceler, menacer ou escroquer une autre personne.</li>
  <li>Maltraiter un animal.</li>
  <li>Publier un contenu illégal, ou un contenu que vous n’avez pas le droit d’utiliser.</li>
  <li>Tenter de perturber le service ou d’accéder aux données d’autres personnes.</li>
</ul>

<h2>Modération</h2>
<p>Nous pouvons masquer un contenu et suspendre ou supprimer un compte qui ne respecte pas ces conditions, notamment après un signalement.</p>

<h2>Vos contenus</h2>
<p>Vos photos et textes restent les vôtres. Vous nous autorisez à les héberger et à les afficher dans le seul but de faire fonctionner DarPaws, y compris sur les pages ouvertes par un lien que vous partagez.</p>

<h2>Informations de santé</h2>
<p>Les rappels, les articles et les informations de santé de DarPaws sont donnés à titre général. Ils ne remplacent pas l’avis d’un vétérinaire. En cas de doute ou d’urgence, consultez un vétérinaire.</p>

<h2>Responsabilité</h2>
<p>DarPaws est fourni tel quel : nous ne garantissons pas qu’il sera toujours disponible ou sans erreur, ni qu’un gardien trouvera un propriétaire ou inversement. Dans les limites permises par la loi, nous ne sommes pas responsables du comportement des utilisateurs, ni des dommages, blessures, pertes ou litiges liés à une réservation, à une garde, à une adoption ou à une rencontre. Rien dans ces conditions ne limite les droits que la loi vous accorde et auxquels il n’est pas permis de renoncer.</p>

<h2>Vos données</h2>
<p>L’utilisation de vos données est expliquée dans la {privacy}.</p>

<h2>Modifications</h2>
<p>Nous pouvons modifier ces conditions. La date en haut de cette page est alors mise à jour. En cas de changement important, nous vous prévenons dans l’application ou sur le site. Continuer à utiliser DarPaws après un changement vaut acceptation.</p>

<h2>Droit applicable</h2>
<p>Ces conditions sont soumises au droit marocain. En cas de litige, nous vous invitons à nous écrire d’abord pour chercher une solution amiable. À défaut, les tribunaux marocains compétents seront saisis.</p>

<h2>Contact</h2>
<p>Questions ou demandes : <a href="mailto:darpaws2026@gmail.com">darpaws2026@gmail.com</a></p>`,
};

const en: Terms = {
  title: 'Terms of Service',
  description: 'The rules for using DarPaws: minimum age, bookings, payments and responsibilities.',
  updated: 'Last updated',
  body: `
<p>These terms apply to the DarPaws app and website. By creating an account or using DarPaws, you accept them. If you do not accept them, please do not use the service.</p>

<h2>Who we are</h2>
<p>DarPaws is operated by ${OPERATOR}. Contact: <a href="mailto:darpaws2026@gmail.com">darpaws2026@gmail.com</a>.</p>

<h2>Minimum age</h2>
<p>DarPaws is only for people aged <strong>18 or over</strong>. By creating an account, you confirm that you are. We may delete an account if it appears this condition is not met.</p>

<h2>What DarPaws does</h2>
<p>DarPaws lets you keep track of your pets’ health, find a pet sitter nearby and post lost or adoptable pets. DarPaws connects people: we do not employ sitters, we do not look after pets, and we are not a party to the agreement between an owner and a sitter.</p>

<h2>Your account</h2>
<p>Give accurate information and keep your password private. You are responsible for what is done with your account. You can delete it at any time.</p>

<h2>Bookings, prices and payments</h2>
<ul>
  <li>The app is free. Sitters set their own prices, and the total shown before a booking is an estimate.</li>
  <li><strong>There is no payment in the app.</strong> The owner and the sitter agree directly on the price and how to pay. DarPaws does not receive, hold or refund any money.</li>
  <li>Any cancellation or refund request is settled directly between the owner and the sitter.</li>
</ul>
<p>If we ever offer payments or charge fees, we will update these terms first.</p>

<h2>If you are a sitter</h2>
<p>You agree to describe your services and prices honestly, to honor the bookings you accept and to take good care of the pets entrusted to you. You are responsible for your own legal and tax obligations. The “Verified” badge means we carried out a check: it is not a guarantee about the person or the quality of their services.</p>

<h2>If you are an owner</h2>
<p>You agree to give accurate information about your pet (health, vaccines, behavior, special needs) and to warn the sitter of any risk. Meet the sitter and make sure they suit you before you entrust your pet to them.</p>

<h2>Community posts</h2>
<p>Only free adoption is allowed: selling animals is forbidden. Only publish real posts, and mark them as finished when they no longer apply. Never pay to get a pet back or to adopt, and report any request for money.</p>

<h2>What is not allowed</h2>
<ul>
  <li>Giving false information, impersonating someone or posting fake reviews.</li>
  <li>Harassing, threatening or scamming another person.</li>
  <li>Mistreating an animal.</li>
  <li>Publishing illegal content, or content you do not have the right to use.</li>
  <li>Trying to disrupt the service or to access other people’s data.</li>
</ul>

<h2>Moderation</h2>
<p>We may hide content and suspend or delete an account that breaks these terms, for example after a report.</p>

<h2>Your content</h2>
<p>Your photos and texts remain yours. You allow us to host and display them for the sole purpose of running DarPaws, including on pages opened from a link you share.</p>

<h2>Health information</h2>
<p>The reminders, articles and health information in DarPaws are general information. They do not replace the advice of a vet. If in doubt, or in an emergency, see a vet.</p>

<h2>Responsibility</h2>
<p>DarPaws is provided as is: we do not guarantee that it will always be available or free of errors, or that a sitter will find an owner or the other way around. To the extent the law allows, we are not responsible for the behavior of users, or for damage, injury, loss or disputes linked to a booking, pet sitting, an adoption or a meeting. Nothing in these terms limits rights that the law gives you and that cannot be waived.</p>

<h2>Your data</h2>
<p>How your data is used is explained in the {privacy}.</p>

<h2>Changes</h2>
<p>We may change these terms. The date at the top of this page is then updated. If a change is important, we will let you know in the app or on the website. Continuing to use DarPaws after a change means you accept it.</p>

<h2>Applicable law</h2>
<p>These terms are governed by Moroccan law. If there is a dispute, please write to us first so we can look for a friendly solution. Otherwise, it will go to the competent Moroccan courts.</p>

<h2>Contact</h2>
<p>Questions or requests: <a href="mailto:darpaws2026@gmail.com">darpaws2026@gmail.com</a></p>`,
};

const ar: Terms = {
  title: 'شروط الاستخدام',
  description: 'قواعد استخدام DarPaws: السن الأدنى، والحجوزات، والأداء، والمسؤوليات.',
  updated: 'آخر تحديث',
  body: `
<p>تسري هذه الشروط على تطبيق وموقع DarPaws. بإنشاء حساب أو باستخدام DarPaws فإنك توافق عليها. إذا لم توافق عليها، فلا تستخدم الخدمة.</p>

<h2>من نحن</h2>
<p>مُشغّل DarPaws: ${OPERATOR}. للتواصل: <a href="mailto:darpaws2026@gmail.com">darpaws2026@gmail.com</a>.</p>

<h2>السن الأدنى</h2>
<p>DarPaws مخصص للأشخاص البالغين <strong>18 سنة فما فوق</strong>. بإنشاء حساب، فإنك تؤكد أنك بلغت هذا السن. يمكننا حذف الحساب إذا تبيّن أن هذا الشرط غير محترم.</p>

<h2>ماذا يقدّم DarPaws</h2>
<p>يتيح لك DarPaws متابعة صحة حيواناتك، وإيجاد حارس قريب منك، ونشر إعلانات الحيوانات الضائعة أو المعروضة للتبني. يربط DarPaws بين الأشخاص فقط: نحن لا نشغّل الحراس، ولا نعتني بالحيوانات، ولسنا طرفًا في الاتفاق بين صاحب الحيوان والحارس.</p>

<h2>حسابك</h2>
<p>قدّم معلومات صحيحة واحتفظ بكلمة المرور لنفسك. أنت مسؤول عمّا يتم بحسابك. يمكنك حذفه في أي وقت.</p>

<h2>الحجوزات والأسعار والأداء</h2>
<ul>
  <li>التطبيق مجاني. يحدد الحراس أسعارهم بأنفسهم، والمبلغ الإجمالي المعروض قبل الحجز هو مبلغ تقديري.</li>
  <li><strong>لا يوجد أداء داخل التطبيق.</strong> يتفق صاحب الحيوان والحارس مباشرة على السعر وطريقة الأداء. لا يتلقى DarPaws أي مبلغ، ولا يحتفظ به، ولا يردّه.</li>
  <li>تتم تسوية أي إلغاء أو طلب استرجاع للمال مباشرة بين صاحب الحيوان والحارس.</li>
</ul>
<p>إذا قدّمنا يومًا خدمة أداء أو رسومًا، فسنحدّث هذه الشروط قبل ذلك.</p>

<h2>إذا كنت حارسًا</h2>
<p>تلتزم بوصف خدماتك وأسعارك بصدق، واحترام الحجوزات التي تقبلها، والعناية بالحيوانات التي تُعهد إليك. أنت مسؤول عن التزاماتك القانونية والضريبية. تعني شارة «موثّق» أننا قمنا بعملية تحقق، وهي ليست ضمانًا بشأن الشخص أو جودة خدماته.</p>

<h2>إذا كنت صاحب حيوان</h2>
<p>تلتزم بتقديم معلومات صحيحة عن حيوانك (الصحة، اللقاحات، السلوك، الاحتياجات الخاصة) وبإخبار الحارس بأي خطر. قابل الحارس وتأكد من أنه يناسبك قبل أن تعهد إليه بحيوانك.</p>

<h2>إعلانات المجتمع</h2>
<p>التبني المجاني فقط هو المسموح به، وبيع الحيوانات ممنوع. انشر إعلانات حقيقية فقط، وأنهِها عندما لا تعود قائمة. لا تدفع أبدًا لاسترجاع حيوان أو لتبنّيه، وأبلغ عن أي طلب للمال.</p>

<h2>ما هو ممنوع</h2>
<ul>
  <li>تقديم معلومات كاذبة، أو انتحال هوية شخص آخر، أو نشر تقييمات مزيفة.</li>
  <li>مضايقة شخص آخر أو تهديده أو النصب عليه.</li>
  <li>إساءة معاملة حيوان.</li>
  <li>نشر محتوى غير قانوني، أو محتوى لا يحق لك استعماله.</li>
  <li>محاولة تعطيل الخدمة أو الوصول إلى بيانات أشخاص آخرين.</li>
</ul>

<h2>الإشراف</h2>
<p>يمكننا إخفاء أي محتوى، وتعليق أو حذف الحساب الذي لا يحترم هذه الشروط، خاصة بعد بلاغ.</p>

<h2>محتواك</h2>
<p>تبقى صورك ونصوصك ملكًا لك. أنت تسمح لنا باستضافتها وعرضها بهدف واحد هو تشغيل DarPaws، بما في ذلك الصفحات التي تُفتح من رابط تشاركه.</p>

<h2>المعلومات الصحية</h2>
<p>التذكيرات والمقالات والمعلومات الصحية في DarPaws معلومات عامة، ولا تعوّض نصيحة الطبيب البيطري. عند الشك أو في حالة الطوارئ، استشر طبيبًا بيطريًا.</p>

<h2>المسؤولية</h2>
<p>يُقدَّم DarPaws كما هو: لا نضمن أنه سيكون متاحًا دائمًا أو خاليًا من الأخطاء، ولا أن يجد الحارس صاحب حيوان أو العكس. في الحدود التي يسمح بها القانون، لسنا مسؤولين عن سلوك المستخدمين، ولا عن الأضرار أو الإصابات أو الخسائر أو النزاعات المرتبطة بحجز أو حراسة أو تبنٍّ أو لقاء. لا يحدّ أي شيء في هذه الشروط من الحقوق التي يمنحها لك القانون ولا يجوز التنازل عنها.</p>

<h2>بياناتك</h2>
<p>كيفية استخدام بياناتك موضحة في {privacy}.</p>

<h2>التعديلات</h2>
<p>يمكننا تعديل هذه الشروط، ويتم حينها تحديث التاريخ في أعلى هذه الصفحة. عند أي تغيير مهم، نخبرك في التطبيق أو على الموقع. استمرارك في استخدام DarPaws بعد التغيير يعني موافقتك عليه.</p>

<h2>القانون المطبق</h2>
<p>تخضع هذه الشروط للقانون المغربي. عند أي نزاع، نرجو أن تراسلنا أولًا للبحث عن حل ودي. وإلا فيُعرض النزاع على المحاكم المغربية المختصة.</p>

<h2>التواصل</h2>
<p>للأسئلة أو الطلبات: <a href="mailto:darpaws2026@gmail.com">darpaws2026@gmail.com</a></p>`,
};

export const terms: Record<Lang, Terms> = { fr, en, ar };
