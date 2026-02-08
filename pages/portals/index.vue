<template>
  <div class="page portals_page">
    <!-- <PageBreadcrumb /> -->
    <!-- SCHOOLNA PORTALS SECTION -->
    <section class="schoolna_portals">
      <div class="container schoolna_portals_content">
        <SchoolnaInfoItem 
          :infoItems="portalItems"
        />
      </div>
    </section>
    <!-- SCHOOLNA PORTALS SECTION -->
    <!-- SCHOOLNA MOCKUP SECTION -->
    <MockupSection
      :headerTitle = "$t('modules_page.schoolna_mockup_hero.title')"
      :headerText = "$t('modules_page.schoolna_mockup_hero.text')"
      :buttonTitle = "$t('modules_page.schoolna_mockup_hero.demo_button')"
      :mockupImg = "schoolnaMockupImg"
    />
    <!-- SCHOOLNA MOCKUP SECTION -->
  </div>
</template>

<script setup>
  // Import all images
  import firstPortalImage from '@/assets/images/first_portal_image.png'
  import adminPortalImg from '@/assets/images/admin_portal_img.png'
  import supervisorPortalImg from '@/assets/images/supervisor_portal_img.png'
  import teacherPortalImg from '@/assets/images/teacher_portal_img.png'
  import studentPortalImg from '@/assets/images/student_portal_img.png'
  import parentPortalImg from '@/assets/images/portal_item_img.png'
  import schoolnaMockupImg from '@/assets/images/schoolna_mockup_img.png'
  // Uncomment these if you need them later:
  // import accountantPortalImg from '@/assets/images/accountant_portal_img.png'
  // import librarianPortalImg from '@/assets/images/librarian_portal_img.png'

  // define portal Items
  const portalItems = ref([
    {
      infoHeader: {
        enBadgeText: 'About',
        arBadgeText: 'عن النظام',
        enTitle: 'Advanced Portals Designed for Every School Member, Elevating Their Efficiency and Performance',
        arTitle: 'بوابات متقدمة صُممت لكل عضو في المدرسة لرفع كفاءته وأدائه',
        enText: 'With advanced tools and smart dashboards, every school member is empowered with a seamless way to manage their tasks, stay organized, and perform more efficiently.',
        arText: 'بفضل الأدوات المتقدمة ولوحات التحكم الذكية، يتمكن كل عضو في المدرسة من إدارة مهامه بسهولة، وتنظيم أعماله، وزيادة إنتاجيته.',
        enButtons: [{ title: 'Get your free trial now!' }],
        arButtons: [{ title: 'احصل على تجربتك المجانية الآن!' }]
      },
      image: firstPortalImage, // Using imported variable
      isReversed: false
    },
    {
      infoHeader: {
        enBadgeText: 'Super Admin',
        arBadgeText: 'المدير العام',
        enTitle: 'Manage all Your School Branches From a Single Dashboard.',
        arTitle: 'إدارة جميع فروع المدرسة من لوحة تحكم واحدة.',
        enText: 'The Super Admin Portal enables you to monitor every detail of your school with clarity and organization. Data is displayed in a structured and accessible way, allowing you to manage operations efficiently and make confident decisions empowered by smart tools that simplify every step.',
        arText: 'تمكّنك بوابة المدير العام من متابعة كل تفاصيل المدرسة بوضوح وتنظيم. يتم عرض البيانات بطريقة منظمة وسهلة الوصول، مما يتيح لك إدارة العمليات بكفاءة واتخاذ قرارات واثقة مدعومة بأدوات ذكية تبسط كل خطوة.',
        enButtons: [
          { title: 'Request a Demo' },
          { title: 'See More', isReversed: true }
        ],
        arButtons: [
          { title: 'اطلب عرضاً تجريبياً' },
          { title: 'اعرف المزيد', isReversed: true }
        ]
      },
      enListTexts: [
        'Manage all school branches through one dashboard',
        'Add and oversee new branches',
        'Monitor all financial transactions'
      ],
      arListTexts: [
        'إدارة جميع فروع المدرسة من خلال لوحة واحدة',
        'إضافة والإشراف على فروع جديدة',
        'متابعة جميع المعاملات المالية'
      ],
      image: adminPortalImg, // Using imported variable
      isReversed: true
    },
    {
      infoHeader: {
        enBadgeText: 'General Supervisor',
        arBadgeText: 'المشرف العام',
        enTitle: 'Comprehensive Oversight and Full Control of Your School',
        arTitle: 'إشراف شامل وسيطرة كاملة على مدرستك',
        enText: 'The General Supervisor Portal gives you a complete view of everything happening within the school from one place. It allows you to monitor performance, organize tasks, and oversee different departments with ease and flexibility supported by precise tools that enhance efficiency and help you achieve the best results.',
        arText: 'توفر لك بوابة المشرف العام رؤية كاملة لكل ما يحدث داخل المدرسة من مكان واحد. تتيح لك متابعة الأداء وتنظيم المهام والإشراف على مختلف الأقسام بسهولة ومرونة مدعومة بأدوات دقيقة تعزز الكفاءة وتساعدك على تحقيق أفضل النتائج.',
        enButtons: [
          { title: 'Request a Demo' },
          { title: 'See More', isReversed: true }
        ],
        arButtons: [
          { title: 'اطلب عرضاً تجريبياً' },
          { title: 'اعرف المزيد', isReversed: true }
        ]
      },
      enListTexts: [
        'Monitor performance across departments',
        'Supervise staff and assign tasks',
        'Generate accounting reports and daily statistics',
        'Manage admissions and registration',
        'Set fees and discounts'
      ],
      arListTexts: [
        'متابعة أداء الأقسام والأنشطة المدرسية',
        'الإشراف على شؤون الموظفين وتوزيع المهام',
        'إصدار التقارير المحاسبية والإحصاءات اليومية',
        'إدارة القبول والتسجيل',
        'تحديد الرسوم والخصومات'
      ],
      image: supervisorPortalImg, // Using imported variable
      isReversed: false
    },
    {
      infoHeader: {
        enBadgeText: "Teachers' Portal",
        arBadgeText: 'بوابة المعلمين',
        enTitle: 'Empowering Teachers with Smart Tools for Seamless Classroom Management',
        arTitle: 'تمكين المعلمين من أدوات ذكية لإدارة الصف بسلاسة',
        enText: "The Teachers' Portal empowers educators with a fully integrated dashboard to organize lessons, manage all classes, and simplify daily tasks. From preparing effective lesson plans to recording attendance with accuracy and tracking student progress, teachers get everything they need in one place, making teaching smarter and more efficient.",
        arText: 'توفر بوابة المعلمين لوحة تحكم متكاملة لتنظيم الدروس، إدارة الفصول، وتبسيط المهام اليومية. من إعداد خطط الدروس بفعالية إلى تسجيل الحضور بدقة وتتبع تقدم الطلاب، يحصل المعلمون على كل ما يحتاجونه في مكان واحد لجعل التدريس أكثر ذكاءً وكفاءة.',
        enButtons: [
          { title: 'Request a Demo' },
          { title: 'See More', isReversed: true }
        ],
        arButtons: [
          { title: 'اطلب عرضاً تجريبياً' },
          { title: 'اعرف المزيد', isReversed: true }
        ]
      },
      enListTexts: [
        'Organize lesson content and learning materials',
        'Record attendance and monitor students',
        "Enter students' grades"
      ],
      arListTexts: [
        'تنظيم محتوى الدروس وإدارة المواد التعليمية',
        'تسجيل الحضور ومتابعة الطلاب',
        'إدخال درجات الطلاب'
      ],
      image: teacherPortalImg, // Using imported variable
      isReversed: true
    },
    {
      infoHeader: {
        enBadgeText: "Students' Portal",
        arBadgeText: 'بوابة الطلاب',
        enTitle: 'Everything a Student Needs... in One Dashboard',
        arTitle: 'كل ما يحتاجه الطالب... في لوحة واحدة',
        enText: "The Students' Portal offers learners a seamless and modern experience to manage their studies independently. It enables them to follow their daily schedules, receive assignments and tasks, check their grades, and communicate directly with their teachers making their educational journey clearer and easier.",
        arText: 'توفر بوابة الطلاب تجربة سلسة وحديثة لإدارة دراستهم بشكل مستقل. تتيح لهم متابعة الجداول اليومية، استلام الواجبات والمهام، الاطلاع على الدرجات، والتواصل المباشر مع المعلمين مما يجعل رحلتهم التعليمية أوضح وأسهل.',
        enButtons: [
          { title: 'Request a Demo' },
          { title: 'See More', isReversed: true }
        ],
        arButtons: [
          { title: 'اطلب عرضاً تجريبياً' },
          { title: 'اعرف المزيد', isReversed: true }
        ]
      },
      enListTexts: [
        'Track class schedules',
        'Access grades and certificates instantly',
        'Communicate directly with teachers and administration',
        'Access learning materials and files easily'
      ],
      arListTexts: [
        'متابعة الجداول الدراسية',
        'الوصول إلى الدرجات والشهادات فوراً',
        'التواصل المباشر مع المعلمين والإدارة',
        'الوصول السهل إلى المواد والملفات التعليمية'
      ],
      image: studentPortalImg, // Using imported variable
      isReversed: false
    },
    {
      infoHeader: {
        enBadgeText: "Parents' Portal",
        arBadgeText: 'بوابة أولياء الأمور',
        enTitle: 'Stay Connected With Your Child\'s Learning Journey',
        arTitle: 'ابقَ على تواصل مع رحلة تعلم طفلك',
        enText: "The Parents' Portal provides guardians with full access to follow up on their children's performance, attendance, grades, and communicate easily with teachers and the school administration to stay engaged in every step of their educational progress.",
        arText: 'توفر بوابة أولياء الأمور وصولاً كاملاً لمتابعة أداء أبنائهم، الحضور، الدرجات، والتواصل بسهولة مع المعلمين والإدارة المدرسية للبقاء على اطلاع دائم بكل خطوات تقدمهم التعليمي.',
        enButtons: [
          { title: 'Request a Demo' },
          { title: 'See More', isReversed: true }
        ],
        arButtons: [
          { title: 'اطلب عرضاً تجريبياً' },
          { title: 'اعرف المزيد', isReversed: true }
        ]
      },
      enListTexts: [
        'Track child attendance and performance',
        'Follow up on grades and reports',
        'Direct communication with teachers and school',
        'Review financial invoices and payments'
      ],
      arListTexts: [
        'متابعة حضور وأداء الأبناء',
        'متابعة الدرجات والتقارير',
        'التواصل المباشر مع المعلمين والمدرسة',
        'مراجعة الفواتير والمدفوعات'
      ],
      image: parentPortalImg, // Using imported variable
      isReversed: true
    }
  ])
</script>

<style lang="scss" scoped>

</style>