<template>
  <div :class="['schoolna_info_item' , {'reversed_item' : props.isReversed}]" v-for="(item , index) in props.infoItems" :key="index">
    <div class="schoolna_info_text">
      <SectionHeader 
        headerPosition="start"
        headerAnimation="fade-up"
        :badgeText="item?.infoHeader?.[globalStore.lang + 'BadgeText']"
        :title="item?.infoHeader?.[globalStore.lang + 'Title']"
        :text="item?.infoHeader?.[globalStore.lang + 'Text']"
      />
      <ul class="schoolna_info_list" v-if="item?.[globalStore.lang + 'ListTexts']">
        <li 
          v-for="(listText , index) in item?.[globalStore.lang + 'ListTexts']" 
          :key="index" 
          v-html="listText"
          data-aos="fade-up"
          :data-aos-delay="index * 200"
        ></li>
      </ul>
      <SchoolnaFlexButtons 
        v-if="item?.infoHeader?.[globalStore.lang + 'Buttons']"
        buttonsPositon="start"
        :buttons="item?.infoHeader?.[globalStore.lang + 'Buttons']"
      />
    </div>
    <div class="image">
      <div class="module_number" v-if="item?.stats?.module">
        <span>{{globalStore.lang === 'en' ? 'Module' : 'الوحدة'}}</span>
        {{ item?.stats?.module }}
      </div>
      <button class="video_player" v-if="item?.video" data-aos="zoom-in" data-aos-delay="500" @click="globalStore.handleShowVideoPopup(item?.video)">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
          <path d="M17.5 34.375C26.8198 34.375 34.375 26.8198 34.375 17.5C34.375 8.18019 26.8198 0.625 17.5 0.625C8.18019 0.625 0.625 8.18019 0.625 17.5C0.625 26.8198 8.18019 34.375 17.5 34.375Z" fill="#F24646"/>
          <path d="M13.9146 25.0954L25.8351 18.213C25.96 18.1408 26.0638 18.0369 26.1359 17.9118C26.2081 17.7867 26.246 17.6449 26.246 17.5005C26.246 17.3562 26.2081 17.2143 26.1359 17.0893C26.0638 16.9642 25.96 16.8603 25.8351 16.788L13.9146 9.90492C13.7894 9.83325 13.6476 9.79566 13.5033 9.7959C13.359 9.79614 13.2173 9.83421 13.0924 9.90631C12.9674 9.97841 12.8636 10.082 12.7911 10.2068C12.7187 10.3316 12.6803 10.4732 12.6797 10.6174V24.3825C12.6802 24.5268 12.7186 24.6685 12.791 24.7933C12.8634 24.9181 12.9672 25.0218 13.0922 25.0939C13.2172 25.1661 13.3589 25.2042 13.5032 25.2044C13.6475 25.2047 13.7893 25.1671 13.9146 25.0954Z" fill="#FFFCEE"/>
        </svg>
      </button>
      <Image :src="item?.image"  data-aos="zoom-in" data-aos-delay="500" v-if="item?.image" alt="image" loading="lazy" preview />
      <video :src="item?.video"  @click="globalStore.handleShowVideoPopup(item?.video)"  data-aos="zoom-in" data-aos-delay="500" v-if="item?.video" muted></video>
    </div>
  </div>
</template>

<script setup>
  // define global store 
  const globalStore = useGlobalStore()


  // define props
  const props = defineProps({
    infoItems: {
      type: Array,
      required: true
    },
    isReversed: {
      type: Boolean,
      default: false
    }
  })
</script>

<style lang="scss" scoped>

</style>