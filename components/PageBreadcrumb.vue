<template>
  <section class="breadcrumb_section">
    <div class="container">
      <h1>{{ pageTitle}}</h1>
      <div class="breadcrumb_section_content">
        <NuxtLink :to="$localeRoute('/')">{{$t('header.navigation.home')}}</NuxtLink>
        <span> / </span>
        <NuxtLink>
          {{ pageTitle}}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
  const {t} = useI18n()


  const pageTitle = computed(() => {
    const path = useRoute().path
    const key = path.split('/').pop() || 'home'
    if (key === 'home') return t('header.navigation.home')
    if (key === 'about') return t('header.navigation.about')
    if (key === 'features') return t('header.navigation.features')
    if (key === 'modules') return t('header.navigation.modules')
    if (key === 'portals') return t('header.navigation.portals')
    if (key === 'contact_us') return t('header.navigation.contactUs')
    return ''
  })
</script>

<style lang="scss" scoped>

</style>