<template>
  <div class="page modules_page">
    <!-- MODULES INFO SECTION -->
    <section class="modules_info_section">
      <SectionHeader 
        headerPosition="center"
        :badgeText="$t('modules_page.schoolna_modules_hero.badgeText')"
        :title="$t('modules_page.schoolna_modules_hero.title')"
        :text="$t('modules_page.schoolna_modules_hero.text')"
      />
      <SchoolnaFlexButtons 
        buttonsPosition="center"
        :buttons="[
          {
            title : $t('modules_page.schoolna_modules_hero.demo_button'),
          },
          {
            title : $t('modules_page.schoolna_modules_hero.trial_button'),
            isReversed : true
          }
        ]"
        
      />
      <img src="../../assets/images/teacher_cursor.svg" class="teacher_portal_cursor" alt="image" loading="lazy">
      <img src="../../assets/images/parent_cursor.svg" class="parent_portal_cursor" alt="image" loading="lazy">
      <img src="../../assets/images/student_cursor.svg" class="student_portal_cursor" alt="image" loading="lazy">
    </section>
    <!-- MODULES INFO SECTION -->
    <!-- MODULES INFO ITEMS -->
    <section class="modules_info_items">
      <div class="container">
        <SchoolnaInfoItem 
          :infoItems="modulesInfoItems.slice(0, 3)"
        />
      </div>
    </section>
    <!-- MODULES INFO ITEMS -->
    <!-- SCHOOLNA HERO SECTION -->
    <SchoolnaHero 
      :title="$t('modules_page.schoolna_modules_management.title')"
      :text="$t('modules_page.schoolna_modules_management.text')"
      :buttons="[
        {
          title : $t('modules_page.schoolna_modules_management.demo_button'),
        },
        {
          title: $t('modules_page.schoolna_modules_management.see_more_button'),
          isReversed : true
        }
      ]"
    />
    <!-- SCHOOLNA HERO SECTION -->
    <!-- MODULES INFO ITEMS -->
    <section class="modules_info_items">
      <div class="container">
        <SchoolnaInfoItem 
          :infoItems="modulesInfoItems.slice(3, 6)"
        />
      </div>
    </section>
    <!-- MODULES INFO ITEMS -->
    <!-- SCHOOLNA CLIENTS SECTION -->
    <Clients />
    <!-- SCHOOLNA CLIENTS SECTION -->
    <!-- MODULES INFO ITEMS -->
    <section class="modules_info_items">
      <div class="container">
        <SchoolnaInfoItem 
          :infoItems="modulesInfoItems.slice(6, modulesInfoItems.length)"
        />
      </div>
    </section>
    <!-- MODULES INFO ITEMS -->
    <!-- SCHOOLNA HERO SECTION -->
    <SchoolnaHero 
      :title="$t('modules_page.schoolna_modules_discover.title')"
      :text="$t('modules_page.schoolna_modules_discover.text')"
      :buttons="[
        {
          title : $t('modules_page.schoolna_modules_discover.demo_button'),
        },
        {
          title: $t('modules_page.schoolna_modules_discover.trial_button'),
          isReversed : true
        }
      ]"
    />
    <!-- SCHOOLNA HERO SECTION -->
    <Faq />
  </div>
</template>

<script setup>
  // ✅ Import images
  import portalImg from "@/assets/images/portal_item_img.png";

  // ✅ Import videos
  import aboutVideo from "@/assets/videos/about_video.mp4";

  // DEFINE MODULES ITEMS
  const modulesInfoItems = ref([
    {
      infoHeader: {
        enBadgeText: "School Performance Insight",
        arBadgeText: "رؤية أداء المدرسة",
        enTitle:
          "An intelligent dashboard that gives you a strategic overview to manage your school with ease",
        arTitle: "لوحة ذكية تمنحك رؤية استراتيجية لإدارة مدرستك بسهولة",
        enText:
          "A fully integrated control panel that provides a comprehensive and in-depth vision, helping you monitor school performance across academic, administrative, and financial aspects empowering you to manage with smarter decisions and higher professionalism.",
        arText:
          "لوحة تحكم متكاملة توفر رؤية شاملة وعميقة، تساعدك على متابعة أداء المدرسة في الجوانب الأكاديمية والإدارية والمالية، مما يمكّنك من الإدارة بقرارات أكثر ذكاءً واحترافية أعلى.",
        enButtons: [
          { title: "Request a Demo" },
          { title: "See More", isReversed: true },
        ],
        arButtons: [
          { title: "اطلب عرضاً تجريبياً" },
          { title: "اعرف المزيد", isReversed: true },
        ],
      },
      enListTexts: [
        "Accurate statistics covering both students and teachers from every angle.",
        "Detailed, real-time tracking of attendance and absence.",
        "Live financial and academic indicators reflecting reality instantly.",
        "Simplified reports that give you speed in insights and precision in decision-making.",
      ],
      arListTexts: [
        "إحصاءات دقيقة تغطي الطلاب والمعلمين من جميع الجوانب.",
        "تتبع مفصل وفوري للحضور والغياب.",
        "مؤشرات مالية وأكاديمية حية تعكس الواقع لحظة بلحظة.",
        "تقارير مبسطة تمنحك سرعة في الرؤية ودقة في اتخاذ القرار.",
      ],
      image: portalImg,
      stats: { module: 1 },
    },
    {
      infoHeader: {
        enBadgeText: "Financial Management",
        arBadgeText: "الإدارة المالية",
        enTitle: "Comprehensive financial management from a single platform, all in one place.",
        arTitle: "إدارة مالية شاملة من منصة واحدة وفي مكان واحد.",
        enText:
          "With Schoolna, you can easily access all financial transactions and aspects of financial management from setting fees for each grade level, to issuing invoices and sending account statements with accuracy and transparency, all the way to detailed financial reports that provide you with a complete view, helping you make quick and informed decisions for seamless financial management.",
        arText:
          "مع Schoolna يمكنك الوصول بسهولة إلى جميع المعاملات والجوانب المالية بدءًا من تحديد الرسوم لكل مرحلة دراسية، مرورًا بإصدار الفواتير وإرسال كشوف الحسابات بدقة وشفافية، وصولاً إلى التقارير المالية التفصيلية التي تمنحك رؤية كاملة وتساعدك على اتخاذ قرارات سريعة ومدروسة لإدارة مالية سلسة.",
        enButtons: [
          { title: "Request a Demo" },
          { title: "See More", isReversed: true },
        ],
        arButtons: [
          { title: "اطلب عرضاً تجريبياً" },
          { title: "اعرف المزيد", isReversed: true },
        ],
      },
      enListTexts: [
        "Connects administration, teachers, students, and parents",
        "Uses modern technologies and intelligent systems to boost efficiency",
      ],
      arListTexts: [
        "يربط الإدارة والمعلمين والطلاب وأولياء الأمور.",
        "يستخدم تقنيات حديثة وأنظمة ذكية لزيادة الكفاءة.",
      ],
      video: aboutVideo,
      stats: { module: 2 },
    },
    {
      infoHeader: {
        enBadgeText: "Admissions & Registration",
        arBadgeText: "القبول والتسجيل",
        enTitle: "Transition and registration requests seamlessly.",
        arTitle: "طلبات الانتقال والتسجيل بكل سهولة.",
        enText:
          "With Schoolna, you can manage all admission and registration processes from one place starting from receiving online applications, to document verification, conducting interviews, and finally accepting students and issuing results. All in an organized, transparent way that gives you a complete view and helps you track all applications to minimize loss and increase enrollment rates!",
        arText:
          "مع Schoolna يمكنك إدارة جميع عمليات القبول والتسجيل من مكان واحد بدءًا من استقبال الطلبات عبر الإنترنت، مرورًا بالتحقق من المستندات وإجراء المقابلات، وصولاً إلى قبول الطلاب وإصدار النتائج. كل ذلك بطريقة منظمة وشفافة تمنحك رؤية شاملة وتساعدك على متابعة جميع الطلبات لتقليل الفاقد وزيادة معدلات الالتحاق!",
        enButtons: [
          { title: "Request a Demo" },
          { title: "See More", isReversed: true },
        ],
        arButtons: [
          { title: "اطلب عرضاً تجريبياً" },
          { title: "اعرف المزيد", isReversed: true },
        ],
      },
      enListTexts: [
        "Easily manage online applications and documents",
        "Track interviews and admission stages step by step",
        "Issue admission results and send clear notifications to students and parents",
        "Complete overview of all applications and reports to support accurate decision-making",
      ],
      arListTexts: [
        "إدارة سهلة للطلبات والمستندات عبر الإنترنت.",
        "متابعة المقابلات ومراحل القبول خطوة بخطوة.",
        "إصدار نتائج القبول وإرسال إشعارات واضحة للطلاب وأولياء الأمور.",
        "رؤية شاملة لجميع الطلبات وتقارير لدعم اتخاذ قرارات دقيقة.",
      ],
      video: aboutVideo,
      stats: { module: 3 },
    },
    {
      infoHeader: {
        enBadgeText: "Reports",
        arBadgeText: "التقارير",
        enTitle: "All the reports you need, right at your fingertips.",
        arTitle: "كل التقارير التي تحتاجها بين يديك.",
        enText:
          "With Schoolna, all your school's data is organized and easy to understand. From tracking students' academic performance and attendance to monitoring the school's financial status, everything is available to you instantly. Detailed reports allow you to make quick and accurate decisions, supporting your educational and administrative teams in a smarter and more effective way.",
        arText:
          "مع Schoolna تصبح جميع بيانات مدرستك منظمة وسهلة الفهم. بدءًا من متابعة الأداء الأكاديمي للطلاب والحضور إلى مراقبة الوضع المالي للمدرسة، كل شيء متاح لك فورًا. التقارير التفصيلية تمكنك من اتخاذ قرارات سريعة ودقيقة، مما يدعم فرقك التعليمية والإدارية بطريقة أكثر ذكاءً وفعالية.",
        enButtons: [
          { title: "Request a Demo" },
          { title: "See More", isReversed: true },
        ],
        arButtons: [
          { title: "اطلب عرضاً تجريبياً" },
          { title: "اعرف المزيد", isReversed: true },
        ],
      },
      enListTexts: [
        "Comprehensive financial reports: collections, invoices, balances, and detailed account statements.",
        "Precise tracking of collection rates and revenues across different grade levels.",
        "Comprehensive administrative reports: attendance, student data, and parent reports.",
        "Ready-to-use statistics and analytics to support your strategic decisions",
      ],
      arListTexts: [
        "تقارير مالية شاملة: التحصيلات، الفواتير، الأرصدة، وكشوف الحساب التفصيلية.",
        "تتبع دقيق لمعدلات التحصيل والإيرادات عبر المراحل الدراسية المختلفة.",
        "تقارير إدارية شاملة: الحضور، بيانات الطلاب، وتقارير أولياء الأمور.",
        "إحصاءات وتحليلات جاهزة لدعم قراراتك الاستراتيجية.",
      ],
      video: aboutVideo,
      stats: { module: 4 },
    },
    {
      infoHeader: {
        enBadgeText: "Attendance Management",
        arBadgeText: "إدارة الحضور",
        enTitle: "Accurate attendance tracking made easy.",
        arTitle: "تتبع الحضور بدقة وسهولة.",
        enText:
          "With Schoolna, monitoring student attendance becomes clearer and more efficient, from recording attendance electronically for each class and grade to comprehensive daily and monthly reports and instant notifications to parents when their children are absent. All supported by analytics that help you improve discipline and enhance overall performance within the school.",
        arText:
          "مع Schoolna يصبح متابعة حضور الطلاب أوضح وأكثر كفاءة، من تسجيل الحضور إلكترونيًا لكل فصل ومرحلة دراسية إلى تقارير يومية وشهرية شاملة، مع إشعارات فورية لأولياء الأمور عند غياب أبنائهم. كل ذلك مدعوم بتحليلات تساعدك على تحسين الانضباط وتعزيز الأداء العام داخل المدرسة.",
        enButtons: [
          { title: "Request a Demo" },
          { title: "See More", isReversed: true },
        ],
        arButtons: [
          { title: "اطلب عرضاً تجريبياً" },
          { title: "اعرف المزيد", isReversed: true },
        ],
      },
      enListTexts: [
        "Real-time attendance tracking for all classes and grade levels.",
        "Fast and accurate electronic recording.",
        "Daily and monthly reports to easily track absences.",
        "Direct notifications sent to parents.",
        "Smart analytics that help boost discipline.",
      ],
      arListTexts: [
        "تتبع الحضور في الوقت الفعلي لجميع الفصول والمراحل الدراسية.",
        "تسجيل إلكتروني سريع ودقيق.",
        "تقارير يومية وشهرية لتتبع الغياب بسهولة.",
        "إشعارات مباشرة تُرسل إلى أولياء الأمور.",
        "تحليلات ذكية تساعد على تعزيز الانضباط.",
      ],
      video: aboutVideo,
      stats: { module: 5 },
    },
    {
      infoHeader: {
        enBadgeText: "Assignments Management",
        arBadgeText: "إدارة الواجبات",
        enTitle: "Smart management of school assignments.",
        arTitle: "إدارة ذكية للواجبات المدرسية.",
        enText:
          "With Schoolna, tracking student assignments has never been easier. From assigning tasks electronically to receiving answers to tracking corrections and providing feedback in an organized and efficient way, all in one place. This simplifies communication between teachers and students, enhancing student engagement and academic progress.",
        arText:
          "مع Schoolna لم يكن تتبع واجبات الطلاب أسهل من قبل. بدءًا من تكليف المهام إلكترونيًا، مرورًا باستقبال الإجابات، إلى تتبع التصحيحات وتقديم الملاحظات بطريقة منظمة وفعالة، كل ذلك في مكان واحد. مما يسهل التواصل بين المعلمين والطلاب ويعزز تفاعل الطلاب وتقدمهم الأكاديمي.",
        enButtons: [
          { title: "Request a Demo" },
          { title: "See More", isReversed: true },
        ],
        arButtons: [
          { title: "اطلب عرضاً تجريبياً" },
          { title: "اعرف المزيد", isReversed: true },
        ],
      },
      enListTexts: [
        "Instant tracking of assignments for all students and grade levels.",
        "Quick and accurate electronic recording.",
        "Easy-to-follow reports for monitoring progress.",
        "Direct notifications to parents.",
        "Smart analytics to boost student performance.",
      ],
      arListTexts: [
        "تتبع فوري للواجبات لجميع الطلاب والمراحل الدراسية.",
        "تسجيل إلكتروني سريع ودقيق.",
        "تقارير سهلة المتابعة لمراقبة التقدم.",
        "إشعارات مباشرة لأولياء الأمور.",
        "تحليلات ذكية لتعزيز أداء الطلاب.",
      ],
      video: aboutVideo,
      stats: { module: 6 },
    },
    {
      infoHeader: {
        enBadgeText: "Grades Management",
        arBadgeText: "إدارة الدرجات",
        enTitle: "Manage the grades of all your students effortlessly!",
        arTitle: "إدارة درجات جميع الطلاب بسهولة!",
        enText:
          "From recording student grades to announcing results and issuing certificates, Schoolna provides an integrated system that simplifies every aspect of grade management. Each step is done with precision and clarity, offering you a comprehensive view and effective communication with students and parents.",
        arText:
          "بدءًا من تسجيل درجات الطلاب إلى إعلان النتائج وإصدار الشهادات، توفر Schoolna نظامًا متكاملًا يبسط كل جانب من جوانب إدارة الدرجات. يتم تنفيذ كل خطوة بدقة ووضوح، مما يمنحك رؤية شاملة وتواصلاً فعالاً مع الطلاب وأولياء الأمور.",
        enButtons: [
          { title: "Request a Demo" },
          { title: "See More", isReversed: true },
        ],
        arButtons: [
          { title: "اطلب عرضاً تجريبياً" },
          { title: "اعرف المزيد", isReversed: true },
        ],
      },
      enListTexts: [
        "Track student grades across all grade levels.",
        "Analytical reports revealing student performance levels.",
        "Results instantly available through the online portal.",
        "Direct notifications to parents about grades.",
      ],
      arListTexts: [
        "تتبع درجات الطلاب عبر جميع المراحل الدراسية.",
        "تقارير تحليلية تكشف مستويات أداء الطلاب.",
        "النتائج متاحة فورًا عبر البوابة الإلكترونية.",
        "إشعارات مباشرة لأولياء الأمور حول الدرجات.",
      ],
      video: aboutVideo,
      stats: { module: 7 },
    },
    {
      infoHeader: {
        enBadgeText: "Timetable Management",
        arBadgeText: "إدارة الجداول",
        enTitle: "Well-organized timetables for all school levels!",
        arTitle: "جداول منظمة لجميع المراحل الدراسية!",
        enText:
          "Schoolna enables you to create and manage timetables for all grade levels in your school and send them to teachers and students effortlessly, without the hassle.",
        arText:
          "تمكّنك Schoolna من إنشاء وإدارة الجداول لجميع المراحل الدراسية في مدرستك وإرسالها إلى المعلمين والطلاب بسهولة ودون عناء.",
        enButtons: [
          { title: "Request a Demo" },
          { title: "See More", isReversed: true },
        ],
        arButtons: [
          { title: "اطلب عرضاً تجريبياً" },
          { title: "اعرف المزيد", isReversed: true },
        ],
      },
      enListTexts: [
        "Create timetables quickly and accurately.",
        "Avoid any conflicts between lessons and teachers.",
        "Direct access to timetables through the online portal.",
      ],
      arListTexts: [
        "إنشاء الجداول بسرعة ودقة.",
        "تجنب أي تعارض بين الدروس والمعلمين.",
        "الوصول المباشر إلى الجداول عبر البوابة الإلكترونية.",
      ],
      video: aboutVideo,
      stats: { module: 8 },
    },
    {
      infoHeader: {
        enBadgeText: "Behavioral Tracking",
        arBadgeText: "متابعة السلوك",
        enTitle: "Track your students' behaviours and achievements with ease",
        arTitle: "تابع سلوكيات وإنجازات طلابك بسهولة",
        enText:
          "Schoolna provides a dedicated section for managing student behaviour, allowing you to record both positive and negative behaviours accurately and clearly, helping to reinforce good practices and address unwanted behaviours.",
        arText:
          "توفر Schoolna قسمًا مخصصًا لإدارة سلوكيات الطلاب، مما يتيح لك تسجيل السلوكيات الإيجابية والسلبية بدقة ووضوح، بما يساعد على تعزيز الممارسات الجيدة ومعالجة السلوكيات غير المرغوبة.",
        enButtons: [
          { title: "Request a Demo" },
          { title: "See More", isReversed: true },
        ],
        arButtons: [
          { title: "اطلب عرضاً تجريبياً" },
          { title: "اعرف المزيد", isReversed: true },
        ],
      },
      enListTexts: [
        "Easily add reasons for behaviour (positive or negative).",
        "Organize and track student behaviours effectively.",
        "Clear reports that assist teachers and administrators.",
        "Instant notifications to parents for better communication and transparency.",
        "Motivate your students to excel and improve their behaviour with Schoolna.",
      ],
      arListTexts: [
        "إضافة أسباب السلوك (الإيجابي أو السلبي) بسهولة.",
        "تنظيم وتتبع سلوكيات الطلاب بفعالية.",
        "تقارير واضحة تساعد المعلمين والإداريين.",
        "إشعارات فورية لأولياء الأمور لزيادة التواصل والشفافية.",
        "حفّز طلابك على التفوق وتحسين سلوكهم مع Schoolna.",
      ],
      video: aboutVideo,
      stats: { module: 9 },
    },
  ]);
</script>


<style lang="scss" scoped>
  // STYLE MODULES INFO SECTION
  section.modules_info_section{
    position: relative;
    width: fit-content;
    margin: 0 auto 40px;
    img{
      max-width: 100px;
      height: fit-content;
      object-fit: contain;
      position: absolute;
      &.teacher_portal_cursor{
        // right: 20%;
        top: 42%;
        animation: animateTeacherPortalImg 2s infinite linear alternate-reverse;
        @media (max-width : 992px){
          top: 54%;
          // right: 19%;
        }
      }
      &.parent_portal_cursor{
        top: 54%;
        animation: animateParentPortalImg 2s infinite linear alternate-reverse;
      }
      &.student_portal_cursor{
        top: 82%;
        left: 60%;
        animation: animateStudentPortalImg 1.5s infinite linear alternate-reverse;
      }
      @media (max-width : 400px){
        display: none;
      }
    }
  }


  @keyframes animateTeacherPortalImg {
    from {
      right: 0%;
    }
    to {
      right: 3%;
    }
  }

  @keyframes animateParentPortalImg {
    from {
      left: 3%;
    }
    to {
      left: 0%;
    }
  }

  @keyframes animateStudentPortalImg {
    from {
      top: 84%;
    }
    to {
      top: 90%;
    }
  }
</style>