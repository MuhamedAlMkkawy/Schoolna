<template>
  <div class="page about_page">
    <!-- <PageBreadcrumb /> -->
    <!-- SCHOOLNA ABOUT SECTION -->
    <section class="aboutus_section">
      <div class="container">
        <SchoolnaInfoItem 
          :infoItems="aboutSchoolna"
        />
      </div>
    </section>
    <!-- SCHOOLNA ABOUT SECTION -->
    <!-- SCHOOLNA STATISTICS -->
    <SchoolnaStatiistics />
    <!-- SCHOOLNA STATISTICS -->
    <!-- SCHOOLNA FEATURES -->
    <section class="schoolna_features_section">
      <SectionHeader 
        headerPosition="center"
        :badgeText="$t('schoolnaOffers.badgeText')"
        :title="$t('schoolnaOffers.title')"
      />
      <div class="container schoolna_features_content">
        <div class="schoolna_feature_item" v-for="(item , index) in schoolna_features" :key="index">
          <h4>{{item?.[globalStore.lang + 'Title']}}</h4>
          <ul class="schoolna_info_list">
            <li v-for="(subItem , subItemIndex) in item?.[globalStore.lang + 'ListTexts']" :key="subItemIndex">{{subItem}}</li>

          </ul>
        </div>  
      </div>
    </section>
    <!-- SCHOOLNA FEATURES -->
    <!-- WHY CHHOSE SCHOOLNA -->
    <section class="whyChooseSchoolna">
      <div class="container why_choose_schoolna_content">
        <SchoolnaInfoItem 
          :isReversed="true"
          :infoItems="whyChooseSchoolna"
        />
      </div>
    </section>
    <!-- WHY CHHOSE SCHOOLNA -->
    <!-- START YOUR SCHOOLNA JOURNEY -->
    <SchoolnaHero
      :title="schoolnaHeroContent[globalStore?.lang].title"
      :text="schoolnaHeroContent[globalStore?.lang].text"
      :list="schoolnaHeroContent[globalStore?.lang].list"
      :buttons="schoolnaHeroContent[globalStore?.lang].buttons"
    />
    <!-- START YOUR SCHOOLNA JOURNEY -->
    <!-- SCHOOLNA PORTAL USERS -->
    <PortalUsers />
    <!-- SCHOOLNA PORTAL USERS -->
  </div>
</template>

<script setup>
  // define global store
  const globalStore = useGlobalStore()

  // ✅ Import media
  import aboutVideo from "@/assets/videos/about_video.mp4"

  // DEFINE about Schoolna 
  const aboutSchoolna = ref([
    {
      infoHeader: {
        enBadgeText: 'About us',
        arBadgeText: 'من نحن',
        enTitle: 'Your Smart Gateway to Modern Education',
        arTitle: 'بوابتك الذكية نحو التعليم الحديث',
        enText: `Schoolna is a system developed by Mazaya experts to become a single platform that unites all stakeholders within the school. It provides administrators with all the tools they need to efficiently manage operations and control finances and invoices in an organized, accessible way. Teachers receive practical tools to manage classes and evaluate students, while students can track their academic tasks and view their results instantly. Parents, on the other hand, can monitor their children’s progress directly without relying on traditional follow-up methods.`,
        arText: `Schoolna هو نظام تم تطويره من قبل خبراء مزايا ليكون منصة واحدة تجمع جميع أصحاب المصلحة داخل المدرسة. يوفر للإداريين جميع الأدوات التي يحتاجونها لإدارة العمليات بكفاءة والتحكم في الشؤون المالية والفواتير بطريقة منظمة وسهلة الوصول. ويحصل المعلمون على أدوات عملية لإدارة الصفوف وتقييم الطلاب، بينما يمكن للطلاب متابعة مهامهم الدراسية وعرض نتائجهم فوراً. أما أولياء الأمور فيمكنهم متابعة تقدم أبنائهم بشكل مباشر دون الاعتماد على طرق المتابعة التقليدية.`,
        enButtons: [
          { title: 'Request a Demo' },
          { title: 'Learn more about Mazaya', isReversed: true }
        ],
        arButtons: [
          { title: 'طلب تجريبي' },
          { title: 'تعرف على المزايا', isReversed: true }
        ]
      },
      enListTexts: [
        'Centralized registration and admission for enrollment requests.',
        'Accurate tracking of attendance and absence.',
        'A fully integrated financial system for invoices and fees.',
        'A comprehensive dashboard for top management.',
        'Interactive tools for teachers, students, and parents to enhance communication and monitoring.',
        'Access homework & tasks: Know what’s due and when.',
        'Get instant notifications: Be the first to know about'
      ],
      arListTexts: [
        'تسجيل وقبول مركزي لطلبات التسجيل.',
        'تتبع دقيق للحضور والغياب.',
        'نظام مالي متكامل بالكامل للفواتير والرسوم.',
        'لوحة تحكم شاملة للإدارة العليا.',
        'أدوات تفاعلية للمعلمين والطلاب وأولياء الأمور لتعزيز التواصل والمتابعة.',
        'الوصول إلى الواجبات والمهام: اعرف ما هو مطلوب ومتى.',
        'الحصول على إشعارات فورية: كن أول من يعرف بالتحديثات الهامة.'
      ],
      video: aboutVideo, // ✅ use imported video
    },
  ])

  // DEFINE FEATURES
  const schoolna_features = ref([
    {
      enTitle: 'For Administrators',
      arTitle: 'للإداريين',
      enListTexts: [
        'AI-powered smart analytics.',
        'Early prediction of student needs and capabilities.',
        'Interactive reports that support strategic planning.',
        'A paperless school with complete digital archiving.'
      ],
      arListTexts: [
        'تحليلات ذكية مدعومة بالذكاء الاصطناعي.',
        'التنبؤ المبكر باحتياجات الطلاب وقدراتهم.',
        'تقارير تفاعلية تدعم التخطيط الاستراتيجي.',
        'مدرسة بدون أوراق مع أرشفة رقمية كاملة.'
      ]
    },
    {
      enTitle: 'For Teachers',
      arTitle: 'للمعلمين',
      enListTexts: [
        "Suggested lesson plans tailored to students' levels.",
        'AI-based assessment tools for grading',
        'A smart dashboard to track strengths and weaknesses for each class.',
        'More time to innovate and be creative in teaching.'
      ],
      arListTexts: [
        'خطط دروس مقترحة تتناسب مع مستويات الطلاب.',
        'أدوات تقييم تعتمد على الذكاء الاصطناعي لتصحيح الدرجات.',
        'لوحة تحكم ذكية لتتبع نقاط القوة والضعف في كل صف.',
        'المزيد من الوقت للابتكار والإبداع في التدريس.'
      ]
    },
    {
      enTitle: 'For Students & Parents',
      arTitle: 'للطلاب وأولياء الأمور',
      enListTexts: [
        "Personalized learning experiences tailored to each student's style.",
        'Predictive notifications before any delay or underperformance.',
        'A virtual assistant guiding students throughout their educational journey',
        'A complete learning experience without time or place limitations.'
      ],
      arListTexts: [
        'تجارب تعليمية مخصصة تتناسب مع أسلوب كل طالب.',
        'إشعارات تنبؤية قبل حدوث أي تأخير أو ضعف في الأداء.',
        'مساعد افتراضي يوجه الطلاب طوال رحلتهم التعليمية.',
        'تجربة تعليمية متكاملة دون قيود زمنية أو مكانية.'
      ]
    }
  ])

  // DEFINE WHY CHOOSE SCHOOLNA 
  const whyChooseSchoolna = ref([
    {
      infoHeader: {
        enBadgeText: 'Why choose Schoolna?',
        arBadgeText: 'لماذا تختار Schoolna؟',
        enTitle: 'Unique Place Where The Magic Of Learning Starts.',
        arTitle: 'مكان فريد تبدأ فيه سحر التعلم.',
        enText: 'Schoolna is a flexible, integrated system that connects all aspects of the school into one digital learning platform with a user-friendly interface for everyone: administrators, teachers, students, and parents.',
        arText: 'Schoolna هو نظام مرن ومتكامل يربط جميع جوانب المدرسة في منصة تعليمية رقمية واحدة بواجهة سهلة الاستخدام للجميع: الإداريين، المعلمين، الطلاب، وأولياء الأمور.',
        enButtons: [
          { title: 'Book your free consultation now', isReversed: true }
        ],
        arButtons: [
          { title: 'احجز استشارتك المجانية الآن', isReversed: true }
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
        'نظام مرن ومتكامل يربط جميع جوانب المدرسة في منصة تعليمية رقمية واحدة.',
        'واجهة سهلة الاستخدام للجميع: الإداريين، المعلمين، الطلاب، وأولياء الأمور.',
        'أمان متقدم للبيانات باستخدام أحدث تقنيات الأمن السيبراني.',
        'قابل للتخصيص بالكامل لتلبية احتياجات أي مدرسة بغض النظر عن حجمها.',
        'تم اختباره واعتماده من قبل مدارس رائدة، وحقق تحسينات ملموسة في إدارة المدارس.'
      ],
      video: aboutVideo, // ✅ use imported video
    }
  ])

  // HERO SECTION
  const schoolnaHeroContent = ref({
    en: {
      title: 'Start Your Journey with Schoolna Today',
      text: 'Start today with Schoolna… and transform your school management into success beyond expectations!',
      list: ['Speed & accuracy', 'Full financial control', 'Effective communication'],
      buttons: [
        { title: 'Request a Demo' },
        { title: 'Trial', isReversed: true }
      ]
    },
    ar: {
      title: 'ابدأ رحلتك مع Schoolna اليوم',
      text: 'ابدأ اليوم مع Schoolna… وحوّل إدارة مدرستك إلى نجاح يفوق التوقعات!',
      list: ['السرعة والدقة', 'تحكم مالي كامل', 'تواصل فعال'],
      buttons: [
        { title: 'اطلب تجربة' },
        { title: 'نسخة تجريبية', isReversed: true }
      ]
    }
})
</script>


<style lang="scss" scoped>
  $firstFeatureColor: rgb(40, 182, 190);
  $secondFeatureColor: rgb(255, 153, 0);
  $thirdFeatureColor: rgb(71, 121, 255);
  .schoolna_features_section{

    .schoolna_features_content{
      @include displayFlex($align : stretch , $justify : space-between ,$wrap : wrap);
      position: relative;
      .schoolna_feature_item{
        max-width: 50%;
        flex-grow: 1;
        padding: 24px;
        border-radius: 20px;
        border: 1px dashed ;
        h4{
          font-size: 20px;
          font-weight: 700;
          // margin-bottom: 25px;
        }
        &:nth-of-type(1){
          border-color: $firstFeatureColor;
          background: rgba($firstFeatureColor, 0.1);
        }
        &:nth-of-type(2){
          border-color: $secondFeatureColor;
          background: rgba($secondFeatureColor, 0.1);
        }
        &:nth-of-type(3){
          max-width: unset;
          border-color: $thirdFeatureColor;
          background: rgba($thirdFeatureColor, 0.1);
        }
        @media (max-width : 767px){
          max-width: 49%;
          padding-inline: 12px;
          .schoolna_info_list{
            margin-top: 0;
          }
        }
        @media (max-width : 567px){
          max-width: 100%;
        }
      }
      &::after{
        content: '';
        background-image: url('../../assets/images/pencil.svg');
        background-repeat: no-repeat;
        background-size: contain;
        position: absolute;
        right: 50px;
        top: -150px;
        width: 100px;
        height: 100px;
        z-index: 9;
      }
    }
  }
</style>