<template>
  <div :style="'direction: ' + availableLocales[0].dir">
    <NuxtLayout>
      <NuxtPage />
      <!-- <VideoPopup 
        v-if="globalStore.showVideoPopup"
        :video="globalStore.videoSrc"
        @handleShowVideoPopup="globalStore.handleShowVideoPopup"
      /> -->
    </NuxtLayout>
  </div>
</template>

<script setup>
  const { locale, locales } = useI18n()

  // define global store 
  const globalStore = useGlobalStore()

  const availableLocales = computed(() => {
    return locales.value.filter(i => i.code == locale.value)
  })

  onMounted(()=>{
    globalStore.setLang(useCookie('i18n_redirected').value)
  })
</script>


<style>
/* Flat fade-slide transition */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s ease-out;
} 

.page-enter-from {
  opacity: 0;
  transform: translateX(-20px);
  
}

.page-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>