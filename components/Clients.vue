<template>
  <section class="clients_section">
    <div class="container">
      <SectionHeader 
        headerPosition="center"
        :badgeText="$t('clientsHeader.badgeText')"
        :title="$t('clientsHeader.title')"
      />

      <ClientsSlider 
        :images="images"
        :breakpoints="breakpoints"
      />
    </div>
  </section>
</template>

<script setup>
  import client1 from '@/assets/images/1.png'
  import client2 from '@/assets/images/2.png'
  import client3 from '@/assets/images/3.png'
  import client4 from '@/assets/images/4.png'

  
  const images = ref([
    {
      id : 1,
      url : client1
    },
    {
      id : 2,
      url : client2
    },
    {
      id : 3,
      url : client3
    },
    {
      id : 4,
      url : client4
    }
  ])


  const breakpoints = {
    // 320px and up
    320: {
      itemsToShow: 2,
      snapAlign: 'start',
    },
    // 567 and up
    567: {
      itemsToShow: 3,
      snapAlign: 'start',
    },
    // 500px and up
    767: {
      itemsToShow: 4,
      snapAlign: 'start',
    },
  }
</script>

<style lang="scss" scoped>
  section.clients_section{
    background: rgba($mainColorRgb , 0.1);
  }
</style>