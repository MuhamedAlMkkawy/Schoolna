<template>
  <div class="page features_page">
    <!-- <PageBreadcrumb /> -->
    <div class="container">
      <!-- SCHOOLNA INFO ITEM -->
      <SchoolnaInfoItem 
        :infoItems="firstFeatureItem"
      />
      <!-- SCHOOLNA INFO ITEM -->
      <PortalUsers />
      <!-- SCHOOLNA INFO ITEM -->
      <SchoolnaInfoItem 
        :infoItems="secondFeatureItem"
      />
    </div>
    <!-- SCHOOLNA UNIQUE FEATURES -->
    <section class="unique_features_section">
      <div class="container">
        <SectionHeader 
          headerPosition="center"
          :badgeText="$t('features_page.schoolna_unique_features.unique_features.badgeText')"
          :title="$t('features_page.schoolna_unique_features.unique_features.title')"
        />
        <UniqueFeatureItems
          :featureItemsContent="uniqueFeatures"
        />
        <SchoolnaFlexButtons 
          :buttons="[
            {
              title : globalStore.lang === 'en' ? 'Request your system.' : 'اطلب نظامك',
              isReversed : true
            }
          ]"
        />
      </div>
    </section>
    <!-- SCHOOLNA UNIQUE FEATURES -->
    <!-- SCHOOLNA ABOUT SECTION -->
    <section class="schoolna_about_features_section">
      <div class="container schoolna_about_features_content">
        <SchoolnaInfoItem 
          :infoItems="aboutFeatures"
        />
      </div>
    </section>
    <!-- SCHOOLNA ABOUT SECTION -->
    <!-- SCHOOLNA TECH SECTION -->
    <section class="schoolna_tech_section">
      <div class="container schoolna_tech_content">
        <SchoolnaInfoItem 
          :infoItems="techFeatures"
        />
      </div>
    </section>
    <!-- SCHOOLNA TECH SECTION -->
    <!-- SCHOOLNA SECURITY HERO SECTION -->
    <SchoolnaHero 
      headerPosition="center"
      :badgeText="currentSecurityHeroSection.badgeText"
      :title="currentSecurityHeroSection.title"
      :text="currentSecurityHeroSection.text"
      :list="currentSecurityHeroSection.list"
      :buttons="currentSecurityHeroSection.buttons"
    />
    <!-- SCHOOLNA SECURITY HERO SECTION -->
    <!-- SCHOOLNA SUPPORT SECTION -->
    <section class="schoolna_support_section">
      <div class="container schoolna_support_content">
        <SectionHeader 
          headerPosition="center"
          :badgeText="globalStore.lang === 'en' ? 'Our Support' : 'دعمنا'"
          :title="globalStore.lang === 'en' ? 'We Support You Step by Step' : 'نحن دعمكم خطوة بخطوة'"
        />
        <UniqueFeatureItems
          :featureItemsContent="supportFeatures"
        />
        <SchoolnaFlexButtons 
          :buttons="[
            {
              title : globalStore.lang === 'en' ? 'Request your system.' : 'اطلب نظامك',
              isReversed : true
            }
          ]"
        />
      </div>
    </section>
    <!-- SCHOOLNA SUPPORT SECTION -->
    <!-- SCHOOLNA NEXT STEP SECTION -->
    <SchoolnaHero
      :title="currenNextStepSection.title"
      :text="currenNextStepSection.text"
      :buttons="currenNextStepSection.buttons"
    />
    <!-- SCHOOLNA NEXT STEP SECTION -->
    <Faq />
  </div>
</template>

<script setup>
  // define globalStore
  const globalStore = useGlobalStore()

  // import videos
  import aboutVideo from '@/assets/videos/about_video.mp4'

  // import images
  import uniqueFeature1 from '@/assets/images/unique_feature_img_1.svg'
  import uniqueFeature2 from '@/assets/images/unique_feature_img_2.svg'
  import uniqueFeature3 from '@/assets/images/unique_feature_img_3.svg'
  import uniqueFeature4 from '@/assets/images/unique_feature_img_4.svg'
  import uniqueFeature5 from '@/assets/images/unique_feature_img_5.svg'
  import uniqueFeature6 from '@/assets/images/unique_feature_img_6.svg'
  import uniqueFeature7 from '@/assets/images/unique_feature_img_7.svg'
  import uniqueFeature8 from '@/assets/images/unique_feature_img_8.svg'

  import schoolnaAboutFeatures from '@/assets/images/schoolna_about_features.svg'
  import schoolnaTechFeatures from '@/assets/images/schoolna_tech_features.svg'

  import support1 from '@/assets/images/support_features_1.svg'
  import support2 from '@/assets/images/support_features_2.svg'
  import support3 from '@/assets/images/support_features_3.svg'
  import support4 from '@/assets/images/support_features_4.svg'
  import support5 from '@/assets/images/support_features_5.svg'
  import support6 from '@/assets/images/support_features_6.svg'


  // define schoolna features - First Item
  const firstFeatureItem = ref([
    {
      infoHeader: {
        enBadgeText: 'About us',
        arBadgeText: 'من نحن',
        enTitle: 'Everything You Need to Manage Your School … in One Integrated System',
        arTitle: 'كل ما تحتاجه لإدارة مدرستك... في نظام واحد متكامل',
        enText: `Management, monitoring, and effective communication through the most advanced modern systems and technologies for school management in the Gulf region. It brings together school administration, teachers, students, and their parents on one unified platform that provides each of them with the tools they need.`,
        arText: `الإدارة، والمتابعة، والتواصل الفعال من خلال أحدث الأنظمة والتقنيات الحديثة لإدارة المدارس في منطقة الخليج. يجمع النظام بين الإدارة المدرسية والمعلمين والطلاب وأولياء الأمور على منصة موحدة تقدم لكل منهم الأدوات التي يحتاجونها.`,
        enButtons: [
          { title: 'Get your free trial now!', isReversed: true }
        ],
        arButtons: [
          { title: 'احصل على نسختك التجريبية الآن!', isReversed: true }
        ]
      },
      enListTexts: [
        'A flexible, integrated system that connects all aspects of the school into one digital learning platform.',
        'A user-friendly interface for everyone: administrators, teachers, students, and parents.',
        'Advanced data security using the latest cybersecurity technologies',
        'Fully customizable to meet the needs of any school, regardless of size.',
        'Tried, tested, and trusted by leading schools, delivering tangible improvements in school management'
      ],
      arListTexts: [
        'نظام مرن ومتكامل يربط جميع جوانب المدرسة على منصة تعليمية رقمية واحدة.',
        'واجهة سهلة الاستخدام للجميع: الإداريون، المعلمون، الطلاب، وأولياء الأمور.',
        'أمان بيانات متقدم باستخدام أحدث تقنيات الأمن السيبراني.',
        'قابل للتخصيص بالكامل ليتناسب مع احتياجات أي مدرسة، مهما كان حجمها.',
        'مجرب وموثوق به من قبل المدارس الرائدة، ويحقق تحسينات ملموسة في إدارة المدرسة.'
      ],
      video: aboutVideo
    }
  ])


  // define schoolna features - Second Item
  const secondFeatureItem = ref([
    {
      infoHeader: {
        enButtons: [
          { title: 'Order your system now!' },
          { title: 'Get a free trial version!', isReversed: true }
        ],
        arButtons: [
          { title: 'اطلب نظامك الآن!' },
          { title: 'احصل على نسخة تجريبية مجانية!', isReversed: true }
        ]
      },
      enListTexts: [
        'A flexible, integrated system that connects all aspects of the school into one digital learning platform.',
        'A user-friendly interface for everyone: administrators, teachers, students, and parents.',
        'Advanced data security using the latest cybersecurity technologies',
        'Fully customizable to meet the needs of any school, regardless of size.',
        'Tried, tested, and trusted by leading schools, delivering tangible improvements in school management'
      ],
      arListTexts: [
        'نظام مرن ومتكامل يربط جميع جوانب المدرسة على منصة تعليمية رقمية واحدة.',
        'واجهة سهلة الاستخدام للجميع: الإداريون، المعلمون، الطلاب، وأولياء الأمور.',
        'أمان بيانات متقدم باستخدام أحدث تقنيات الأمن السيبراني.',
        'قابل للتخصيص بالكامل ليتناسب مع احتياجات أي مدرسة، مهما كان حجمها.',
        'مجرب وموثوق به من قبل المدارس الرائدة، ويحقق تحسينات ملموسة في إدارة المدرسة.'
      ],
      video: aboutVideo
    }
  ])


  // Define Unique Features
  const uniqueFeatures = [
    {
      image: uniqueFeature1,
      enTitle: "Your Time is Managed Smartly Through the System!",
      arTitle: "وقتك يُدار بذكاء من خلال النظام!",
      enDescription:
        "Schoolna reduces repetitive tasks, helping teachers and admins work faster and focus on what matters most.",
      arDescription:
        "يقلل Schoolna من المهام المتكررة، مما يساعد المعلمين والإداريين على العمل بشكل أسرع والتركيز على ما هو أكثر أهمية.",
    },
    {
      image: uniqueFeature2,
      enTitle: "Instant Reports Based on Accurate Data!",
      arTitle: "تقارير فورية مبنية على بيانات دقيقة!",
      enDescription:
        "Schoolna’s instant, data-driven reports reveal performance, highlight improvements, and deliver faster results.",
      arDescription:
        "توفر تقارير Schoolna الفورية المبنية على البيانات أداءً واضحًا وتسهم في تحسين النتائج بسرعة.",
    },
    {
      image: uniqueFeature3,
      enTitle: "A Modern Learning Experience with Higher Efficiency!",
      arTitle: "تجربة تعليمية حديثة بكفاءة أعلى!",
      enDescription:
        "Schoolna boosts student performance by streamlining schedules, tracking progress, and enabling continuous communication.",
      arDescription:
        "يعزز Schoolna أداء الطلاب من خلال تنظيم الجداول وتتبع التقدم وتمكين التواصل المستمر.",
    },
    {
      image: uniqueFeature4,
      enTitle: "A Flexible System no Matter How Many School Branches you Have!",
      arTitle: "نظام مرن مهما كان عدد فروع مدرستك!",
      enDescription:
        "Schoolna scales with your school and branches, offering unified data and efficient management from one platform.",
      arDescription:
        "يتوسع Schoolna مع مدرستك وفروعها، ويقدم بيانات موحدة وإدارة فعالة من خلال منصة واحدة.",
    },
    {
      image: uniqueFeature5,
      enTitle: "Expenses and Revenue Management",
      arTitle: "إدارة النفقات والإيرادات",
      enDescription:
        "Schoolna helps manage finances by handling fees, invoices, and instant notifications, reducing errors and improving clarity.",
      arDescription:
        "يساعد Schoolna في إدارة الشؤون المالية من خلال معالجة الرسوم والفواتير والإشعارات الفورية، مما يقلل الأخطاء ويحسن الوضوح.",
    },
    {
      image: uniqueFeature6,
      enTitle: "Manage and Organize all Financial Details",
      arTitle: "إدارة وتنظيم جميع التفاصيل المالية",
      enDescription:
        "Schoolna cuts printing and paperwork costs with organized e-documentation, giving you instant access to any information.",
      arDescription:
        "يقلل Schoolna من تكاليف الطباعة والأوراق من خلال التوثيق الإلكتروني المنظم، ويوفر لك وصولاً فوريًا إلى أي معلومة.",
    },
    {
      image: uniqueFeature7,
      enTitle: "Attendance and Absence Tracking",
      arTitle: "تتبع الحضور والغياب",
      enDescription:
        "All details of student and teacher attendance and absence are at the administration’s fingertips, with instant compliance reports.",
      arDescription:
        "جميع تفاصيل حضور وغياب الطلاب والمعلمين في متناول الإدارة، مع تقارير فورية للامتثال.",
    },
    {
      image: uniqueFeature8,
      enTitle: "Student Performance Tracking",
      arTitle: "تتبع أداء الطلاب",
      enDescription:
        "With Schoolna, you can track student performance across all stages, subjects, and exams, while teachers add notes to support their improvement.",
      arDescription:
        "مع Schoolna، يمكنك تتبع أداء الطلاب عبر جميع المراحل والمواد والاختبارات، مع إمكانية إضافة الملاحظات من قبل المعلمين لدعم التحسين.",
    },
  ];



  // define about features
  const aboutFeatures = ref([
    {
      infoHeader: {
        enBadgeText: 'About us',
        arBadgeText: 'من نحن',
        enTitle: 'Schoolna Provides Your School with a Complete Experience for Every School Day!',
        arTitle: 'Schoolna يوفر لمدرستك تجربة متكاملة لكل يوم دراسي!',
        enButtons: [
          { title: 'Get your free trial now!', isReversed: true }
        ],
        arButtons: [
          { title: 'احصل على نسختك التجريبية مجاناً الآن!', isReversed: true }
        ]
      },
      enListTexts: [
        'Instant attendance and absence tracking with no delays or paperwork',
        'Organized timetable that includes classes and activities accurately',
        'Instant alerts and notifications for teachers, students, and parents',
        'Smart electronic archiving that eliminates traditional paperwork',
        'Step-by-step monitoring of academic progress with complete clarity',
      ],
      arListTexts: [
        'تتبع فوري للحضور والغياب بدون تأخير أو أوراق.',
        'جدول دراسي منظم يشمل الحصص والأنشطة بدقة.',
        'تنبيهات وإشعارات فورية للمعلمين والطلاب وأولياء الأمور.',
        'أرشفة إلكترونية ذكية تلغي الأعمال الورقية التقليدية.',
        'متابعة تدريجية لتقدم الطالب الأكاديمي بكل وضوح.',
      ],
      image: schoolnaAboutFeatures
    }
  ])


  // define tech features
  const techFeatures = ref([
    {
      infoHeader: {
        enBadgeText: 'About us',
        arBadgeText: 'من نحن',
        enTitle: 'Technical Features That Make the System Practical and Flexible',
        arTitle: 'مزايا تقنية تجعل النظام عملياً ومرناً',
        enText: 'Schoolna is not just a traditional System, but a system built on the latest technologies:',
        arText: 'Schoolna ليس مجرد نظام تقليدي، بل نظام مبني على أحدث التقنيات:',
        enButtons: [
          { title: 'Get your free trial now!', isReversed: true }
        ],
        arButtons: [
          { title: 'احصل على نسختك التجريبية مجاناً الآن!', isReversed: true }
        ]
      },
      enListTexts: [
        'Works efficiently on all devices of all types.',
        'Features a smooth interface in both Arabic and English.',
        'Customizable settings according to each school’s policy and needs.',
      ],
      arListTexts: [
        'يعمل بكفاءة على جميع أنواع الأجهزة.',
        'يتميز بواجهة سلسة باللغتين العربية والإنجليزية.',
        'إعدادات قابلة للتخصيص وفقاً لسياسة واحتياجات كل مدرسة.',
      ],
      image: schoolnaTechFeatures
    }
  ])


  // define security schoolna hero
  const securityContent = {
    en: {
      badgeText: 'Security',
      title: 'Your Data Security Is Our Top Priority at Schoolna',
      text: 'Start today with Schoolna… and transform your school management into success beyond expectations!',
      list: [
        'Every piece of information is encrypted to keep it safe from any breach, ensuring complete data protection for your school.',
        'Regular backups guarantee that data never disappears, even under the toughest conditions.',
        'Access permissions are precisely designed so each user only sees what they need, nothing more.',
        'And with continuous updates, the system keeps evolving and remains resilient against new threats.'
      ],
      buttons: [
        { title: 'Request a Demo' },
        { title: 'Trial', isReversed: true }
      ]
    },
    ar: {
      badgeText: 'الأمان',
      title: 'أمان بياناتك هو أولويتنا القصوى في Schoolna',
      text: 'ابدأ اليوم مع Schoolna… وحوّل إدارة مدرستك إلى نجاح يفوق التوقعات!',
      list: [
        'يتم تشفير كل معلومة لحمايتها من أي اختراق، مما يضمن حماية كاملة لبيانات مدرستك.',
        'النسخ الاحتياطي المنتظم يضمن عدم فقدان البيانات حتى في أصعب الظروف.',
        'تصميم صلاحيات الوصول بدقة بحيث يرى كل مستخدم ما يحتاجه فقط، ولا أكثر.',
        'ومع التحديثات المستمرة، يظل النظام يتطور ويصمد أمام التهديدات الجديدة.'
      ],
      buttons: [
        { title: 'اطلب عرضاً تجريبياً' },
        { title: 'نسخة تجريبية', isReversed: true }
      ]
    }
  }

  const currentSecurityHeroSection = computed(() => {
    return globalStore.lang === 'ar' ? securityContent.ar : securityContent.en
  })


  // define next step
  const nextStepContent = {
    en: {
      title: 'Your Next Step Toward a Smarter, More Advanced School!',
      text: `Whether you manage a small school or a large educational institution, Schoolna
            helps you organize your school day, simplify operations, and gives you peace of
            mind through smart, integrated management`,
      buttons: [
        { title: 'Request a Demo' },
        { title: 'Trial', isReversed: true }
      ]
    },
    ar: {
      title: 'خطوتك القادمة نحو مدرسة أكثر ذكاءً وتطوراً!',
      text: `سواء كنت تدير مدرسة صغيرة أو مؤسسة تعليمية كبيرة، يساعدك Schoolna
              في تنظيم يوم مدرستك، تبسيط العمليات، ويمنحك راحة البال من خلال إدارة ذكية ومتكاملة`,
      buttons: [
        { title: 'اطلب عرضاً تجريبياً' },
        { title: 'نسخة تجريبية', isReversed: true }
      ]
    }
  }

  const currenNextStepSection = computed(() => {
    return globalStore.lang === 'ar' ? nextStepContent.ar : nextStepContent.en
  })


  // ✅ Define Support Features
  const supportFeatures = ref([
    {
      image: support1,
      enTitle: "Initial Consultation",
      arTitle: "الاستشارة الأولية",
      enDescription:
        "We listen to your needs, understand your institution’s requirements, and help you choose the best solutions for you.",
      arDescription:
        "نستمع لاحتياجاتك، ونفهم متطلبات مؤسستك، ونساعدك في اختيار أفضل الحلول المناسبة لك.",
    },
    {
      image: support2,
      enTitle: "System Customization",
      arTitle: "تخصيص النظام",
      enDescription:
        "We configure the system to match your school’s structure, policies, educational stages, and management style without complexity.",
      arDescription:
        "نقوم بتهيئة النظام ليتناسب مع هيكل مدرستك، وسياساتها، ومراحلها التعليمية، وأسلوب إدارتها، دون أي تعقيد.",
    },
    {
      image: support3,
      enTitle: "System Launch and Go-Live",
      arTitle: "إطلاق النظام والتشغيل الفعلي",
      enDescription:
        "Once the system is ready, we officially activate it with a support team following up closely to ensure smooth operations.",
      arDescription:
        "بعد تجهيز النظام، نقوم بتفعيله رسميًا مع فريق دعم يتابع بشكل مستمر لضمان سير العمليات بسلاسة.",
    },
    {
      image: support4,
      enTitle: "Live Demo",
      arTitle: "عرض حي للنظام",
      enDescription:
        "We provide you with a real-time system demo to explore its interfaces, features, and ease of use, with a full explanation of all benefits.",
      arDescription:
        "نوفر لك عرضًا حيًا للنظام لتستكشف الواجهات والخصائص وسهولة الاستخدام، مع شرح كامل لجميع الفوائد.",
    },
    {
      image: support5,
      enTitle: "Data Migration",
      arTitle: "نقل البيانات",
      enDescription:
        "We import your old data from previous systems or manual files, ensuring accuracy and confidentiality.",
      arDescription:
        "نقوم باستيراد بياناتك القديمة من الأنظمة السابقة أو الملفات اليدوية مع ضمان الدقة والسرية.",
    },
    {
      image: support6,
      enTitle: "Ongoing Post-Launch Support",
      arTitle: "دعم مستمر بعد الإطلاق",
      enDescription:
        "We don’t leave you after delivery. Our team is always ready to answer inquiries, provide updates, and handle any technical support requests.",
      arDescription:
        "لا نغادرك بعد التسليم. فريقنا دائمًا جاهز للرد على الاستفسارات، وتقديم التحديثات، والتعامل مع أي طلبات دعم فني.",
    },
  ]);

</script>


<style lang="scss" scoped>
  .unique_features_section{
    padding-block: 100px 50px;
  }

  // .schoolna_about_section{
  //   .schoolna_about_item{
  //     .image{
  //       width: 50%;
  //     }
  //   }
  // }
</style>