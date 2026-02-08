<template>
  <section class="faq_section">
    <SectionHeader 
      headerPosition="center"
      :badgeText="$t('faqHeader.badgeText')"
      :title="$t('faqHeader.title')"
    />
    <div class="container">
      <div class="card">
          <Accordion 
            data-aos="fade-up" 
            :data-aos-delay="index * 200" 
            v-for="(item , index) in faqData" 
            :key="item.id"
            :value="activeAccordion"
          >
              <AccordionPanel :value="item.id" @click="activeAccordion = item.id">
                  <AccordionHeader>{{ item[globalStore.lang + 'FaqQuestion'] }}</AccordionHeader>
                  <AccordionContent>
                      <p class="m-0">
                        {{ item[globalStore.lang + 'FaqAnswer'] }}
                      </p>
                  </AccordionContent>
              </AccordionPanel>
          </Accordion>
      </div>
    </div>
  </section>
</template>

<script setup>
  import Accordion from 'primevue/accordion';
  import AccordionPanel from 'primevue/accordionpanel';
  import AccordionHeader from 'primevue/accordionheader';
  import AccordionContent from 'primevue/accordioncontent';

  // define globalStore 
  const globalStore = useGlobalStore()

  // define active accordion
  const activeAccordion = ref(1);

  const faqData = [
    {
      id: 1,
      enFaqQuestion: 'Can the system be customized to fit our school’s needs?',
      enFaqAnswer: 'Yes, Schoolna is highly flexible and can be adjusted to match each school’s policies and operational needs, both administrative and academic.',
      arFaqQuestion: 'هل يمكن تخصيص النظام ليتناسب مع احتياجات مدرستنا؟',
      arFaqAnswer: 'نعم، نظام Schoolna مرن للغاية ويمكن تعديله ليتوافق مع سياسات المدرسة واحتياجاتها التشغيلية، سواء الإدارية أو الأكاديمية.',
    },
    {
      id: 2,
      enFaqQuestion: 'Who can use the system ?',
      enFaqAnswer: 'The system is intended for educational institutions, such as schools, colleges, universities, and vocational schools. It is not intended for individuals or families.',
      arFaqQuestion: 'من يمكنه استخدام النظام؟',
      arFaqAnswer: 'النظام مخصص للمؤسسات التعليمية مثل المدارس، الكليات، الجامعات، والمعاهد المهنية. ولا يُقصد به الاستخدام الفردي أو العائلي.',
    },
    {
      id: 3,
      enFaqQuestion: 'Can the system be customized to fit our school’s needs?',
      enFaqAnswer: 'Yes, Schoolna is highly flexible and can be adjusted to match each school’s policies and operational needs, both administrative and academic.',
      arFaqQuestion: 'هل يمكن تخصيص النظام ليتناسب مع احتياجات مدرستنا؟',
      arFaqAnswer: 'نعم، نظام Schoolna مرن للغاية ويمكن تعديله ليتوافق مع سياسات المدرسة واحتياجاتها التشغيلية، سواء الإدارية أو الأكاديمية.',
    },
    {
      id: 4,
      enFaqQuestion: 'Who can use the system ?',
      enFaqAnswer: 'The system is intended for educational institutions, such as schools, colleges, universities, and vocational schools. It is not intended for individuals or families.',
      arFaqQuestion: 'من يمكنه استخدام النظام؟',
      arFaqAnswer: 'النظام مخصص للمؤسسات التعليمية مثل المدارس، الكليات، الجامعات، والمعاهد المهنية. ولا يُقصد به الاستخدام الفردي أو العائلي.',
    },
  ];




</script>

<style lang="scss" scoped>
  .card{
    max-width: 900px;
    margin: 0 auto;
    .p-accordionpanel{
      background: #FFF;
      box-shadow: 0 5px 16px 0 rgba(8, 15, 52, 0.06);
      border-radius: 14px;
      border-bottom: none;
      margin-bottom: 20px;
      overflow: hidden;
    }
  }
</style>