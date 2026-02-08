<template>
  <div class="page home_page">
    <!-- SCHOOLNA INFO SECTION -->
    <section class="schoolna_info">
      <div class="container schoolna_info_content">
        <h1 data-aos="fade-up">{{ $t('home.schoolnaInfo.title') }}</h1>
        <p>
          {{ $t('home.schoolnaInfo.description') }}
        </p>
        <SchoolnaFlexButtons 
          buttonsPositon="centered"
          :buttons="[
            {
              title: $t('home.schoolnaInfo.buttons.requestDemo'),
            },
            {
              title: $t('home.schoolnaInfo.buttons.trial'),
              isReversed: true
            }
          ]"
        />
        <div class="schoolna_dashboard_image" data-aos="fade-up">
          <Image :src="portalItemImg" class="portal_image" data-aos="zoom-in" alt="image" loading="lazy" preview/>
          <img src="/assets/images/rocket.png" alt="image" loading="lazy" class="rocket_img">
        </div>
      </div>
    </section>
    <!-- SCHOOLNA INFO SECTION -->
    <!-- SCHOOLNA FEATURES SECTION -->
    <section class="schoolna_features">
      <div class="container">
        <SectionHeader 
          headerPosition="center"
          :badgeText="$t('home.featuresSection.badge')"
          :title="$t('home.featuresSection.title')"
          :text="$t('home.featuresSection.description')"
        />
        <Features :features="features" />
      </div>
    </section>
    <!-- SCHOOLNA FEATURES SECTION -->
    <!-- SCHOOLNA GET MORE INFO SECTION -->
    <section class="schoolna_get_more_info">
      <div class="container schoolna_get_more_info_content">
        <div class="image" :style="{ transform: globalStore.lang === 'ar' ? 'rotateY(180deg)' : undefined }" data-aos="fade-right" data-aos-delay="500">
          <img src="/assets/images/clapping.svg" alt="image" loading="lazy">
        </div>
        <div class="image" data-aos="zoom-in">
          <img src="/assets/images/more_info_img.svg" alt="image" loading="lazy">
        </div>
        <div class="schoolna_content">
          <SectionHeader 
            headerAnimation="fade-up"
            :badgeText="$t('home.getMoreInfo.badge')"
            :title="$t('home.getMoreInfo.title')"
            :text="$t('home.getMoreInfo.description')"
          />
          <SchoolnaFlexButtons 
            buttonsPositon="start"
            :buttons="[
              {
                title: $t('home.getMoreInfo.buttons.requestDemo'),
              },
              {
                title: $t('home.getMoreInfo.buttons.seeMore'),
                isReversed: true
              }
            ]"
          />
        </div>
      </div>
    </section>
    <!-- SCHOOLNA GET MORE INFO SECTION -->
    <!-- SCHOOLNA STATISTICS SECTION -->
    <SchoolnaStatiistics />
    <!-- SCHOOLNA STATISTICS SECTION -->
    <!-- SCHOOLNA PORTALS SECTION -->
    <section class="schoolna_portals">
      <div class="container schoolna_portals_content">
        <SchoolnaInfoItem :infoItems="portalsItems" />

      </div>
    </section>
    <!-- SCHOOLNA PORTALS SECTION -->
    <!-- SECHOOLNA CLIENTS SECTION -->
    <Clients />
    <!-- SECHOOLNA CLIENTS SECTION -->
    <!-- MANAGE SCHOOLNA SMARTER -->
    <SchoolnaHero 
      :title="$t('home.heroSection.title')"
      :text="$t('home.heroSection.description')"
      :buttons="[
        {
          title: $t('home.heroSection.buttons.requestDemo'),
        },
        {
          title: $t('home.heroSection.buttons.trial'),
          isReversed: true
        }
      ]"
    />
    <!-- MANAGE SCHOOLNA SMARTER -->
    <!-- SCHOOLNA PORTAL USERS -->
    <PortalUsers />
    <!-- SCHOOLNA PORTAL USERS -->
    <!-- SCHOOLNA FAQ -->
    <Faq />
    <!-- SCHOOLNA FAQ -->
  </div>
</template>

<script setup>
  import portalItemImg from '@/assets/images/portal_item_img.png'
  const {t} = useI18n()
  
  // define global store 
  const globalStore = useGlobalStore()

  // DEFINE FEATURES
  const features = ref([
    {
      icon: "<i class='pi pi-users'></i>",
      title: t('home.features.studentManagement.title'),
      description: t('home.features.studentManagement.description')
    },
    {
      icon: "<i class='pi pi-calendar'></i>",
      title: t('home.features.timetableScheduling.title'),
      description: t('home.features.timetableScheduling.description')
    },
    {
      icon: "<i class='pi pi-chart-bar'></i>",
      title: t('home.features.performanceTracking.title'),
      description: t('home.features.performanceTracking.description')
    }
  ])

  // DEFINE SCHOOLNA PORTALS
  const portalsItems = ref([
    {
      infoHeader: {
        enBadgeText: 'Father Portal',
        arBadgeText: 'بوابة ولي الأمر',
        enTitle: "Track Your Child's Performance with the Parent View",
        arTitle: 'تابع أداء طفلك من خلال بوابة ولي الأمر',
        enText: "Stay connected to your child’s academic journey — anytime, anywhere. The Parent View provides a clear, real-time view of your child’s attendance, grades, homework, and school behavior.",
        arText: 'ابقَ على اتصال برحلة طفلك التعليمية في أي وقت ومن أي مكان. توفر بوابة ولي الأمر رؤية واضحة وفورية لحضور طفلك ودرجاته وواجباته وسلوكه المدرسي.'
      },
      enListTexts: [
        "<span>Monitor attendance: </span> Track presence, absences, and late arrivals",
        "<span>Access homework & tasks: </span> Know what’s due and when.",
        "<span>Get instant notifications: </span> Be the first to know about important updates."
      ],
      arListTexts: [
        "<span>متابعة الحضور: </span> تتبع الحضور والغياب والتأخرات",
        "<span>الوصول إلى الواجبات والمهام: </span> تعرف على ما يجب إنجازه ومواعيده.",
        "<span>الحصول على إشعارات فورية: </span> كن أول من يعرف عن التحديثات الهامة."
      ],
      image: portalItemImg
    },
    {
      infoHeader: {
        enBadgeText: 'All Portals',
        arBadgeText: 'جميع البوابات',
        enTitle: 'Smart Chatbot for Support & Communication',
        arTitle: 'روبوت محادثة ذكي للدعم والتواصل',
        enText: 'Our intelligent chatbot is available 24/7 to answer your questions, guide you through the system, and connect you with the right information — instantly and effortlessly.',
        arText: 'روبوت المحادثة الذكي متاح على مدار الساعة للإجابة عن استفساراتك، وإرشادك خلال النظام، وربطك بالمعلومات الصحيحة بسرعة وسهولة.'
      },
      image: portalItemImg
    },
    {
      infoHeader: {
        enBadgeText: 'Teacher Portal',
        arBadgeText: 'بوابة المعلم',
        enTitle: 'All-in-One Teacher Dashboard',
        arTitle: 'لوحة تحكم شاملة للمعلم',
        enText: 'Empower teachers with a smart and efficient dashboard designed to simplify daily tasks and improve classroom management.',
        arText: 'مكّن المعلمين من خلال لوحة تحكم ذكية وفعالة مصممة لتبسيط المهام اليومية وتحسين إدارة الفصول الدراسية.'
      },
      enListTexts: [
        'Centralized workspace for managing students, classes, and materials',
        'Easy homework and exam creation with automated distribution',
        'Send announcements or feedback directly to students or parents'
      ],
      arListTexts: [
        'مساحة عمل مركزية لإدارة الطلاب والفصول والمواد',
        'إنشاء الواجبات والاختبارات بسهولة مع التوزيع التلقائي',
        'إرسال الإشعارات أو الملاحظات مباشرة للطلاب أو أولياء الأمور'
      ],
      image: portalItemImg
    },
    {
      infoHeader: {
        enBadgeText: 'Student Portal',
        arBadgeText: 'بوابة الطالب',
        enTitle: 'Smart Chatbot for Support & Communication',
        arTitle: 'روبوت محادثة ذكي للدعم والتواصل',
        enText: 'Our intelligent chatbot is available 24/7 to answer your questions, guide you through the system, and connect you with the right information — instantly and effortlessly.',
        arText: 'روبوت المحادثة الذكي متاح على مدار الساعة للإجابة عن استفساراتك، وإرشادك خلال النظام، وربطك بالمعلومات الصحيحة بسرعة وسهولة.'
      },
      image: portalItemImg
    }
  ]);

</script>

<style lang="scss" scoped>

</style>