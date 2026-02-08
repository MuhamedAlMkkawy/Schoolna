<template>
  <header class="schoolna_header">
    <div class="container schoolna_header_content">
      <div class="image">
        <img src="/assets/images/logo.svg" alt="image" loading="lazy">
      </div>
      <ul class="schoolna_header_links">
        <li
          :class="{ 'active': $route.path === '/' || $route.path.endsWith('/en') }"
        >
          <NuxtLink :to="$localeRoute('/')">{{$t('header.navigation.home')}}</NuxtLink>
        </li>
        <li
          :class="{ 'active': $route.path.endsWith('/about') }"
        >
          <NuxtLink :to="$localeRoute('/about')">{{$t('header.navigation.about')}}</NuxtLink>
        </li>
        <li
          :class="{ 'active': $route.path.endsWith('/features') }"
        >
          <NuxtLink :to="$localeRoute('/features')">{{$t('header.navigation.features')}}</NuxtLink>
        </li>
        <li
          :class="{ 'active': $route.path.endsWith('/modules') }"
        >
          <NuxtLink :to="$localeRoute('/modules')">{{$t('header.navigation.modules')}}</NuxtLink>
        </li>
        <li
          :class="{ 'active': $route.path.endsWith('/portals') }"
        >
          <NuxtLink :to="$localeRoute('/portals')">{{$t('header.navigation.portals')}}</NuxtLink>
        </li>
        <li
          :class="{ 'active': $route.path.endsWith('/contact_us') }"
        >
          <NuxtLink :to="$localeRoute('/contact_us')">{{$t('header.navigation.contactUs')}}</NuxtLink>
        </li>
      </ul>
      <div class="schoolna_header_buttons">
        <button class="mobile_menu_controller main-btn" @click="showMobileMenu = !showMobileMenu">
          <i class="pi pi-bars"></i>
        </button>
        <NuxtLink :to="$localeRoute('/contact_us')" class="main-btn">{{$t('header.buttons.getStart')}}</NuxtLink>
        <LanguageSwitch />
      </div>
    </div>

  </header>
  <!-- <div :class="['schoolna_mobile_links' , {active : showMobileMenu}]">
    <div class="image">
      <img src="../assets/images/mobile_logo.svg" alt="image" loading="lazy">
    </div>
    <button class="pi pi-times close_mobile_menu" @click="showMobileMenu = !showMobileMenu"></button>
    <ul class="schoolna_header_links">
      <li
        :class="{ 'active': $route.path === '/' || $route.path.endsWith('/en') }"
      >
        <NuxtLink :to="$localeRoute('/')">{{$t('header.navigation.home')}}</NuxtLink>
      </li>
      <li
        :class="{ 'active': $route.path.endsWith('/about') }"
      >
        <NuxtLink :to="$localeRoute('/about')">{{$t('header.navigation.about')}}</NuxtLink>
      </li>
      <li
        :class="{ 'active': $route.path.endsWith('/features') }"
      >
        <NuxtLink :to="$localeRoute('/features')">{{$t('header.navigation.features')}}</NuxtLink>
      </li>
      <li
        :class="{ 'active': $route.path.endsWith('/modules') }"
      >
        <NuxtLink :to="$localeRoute('/modules')">{{$t('header.navigation.modules')}}</NuxtLink>
      </li>
      <li
        :class="{ 'active': $route.path.endsWith('/portals') }"
      >
        <NuxtLink :to="$localeRoute('/portals')">{{$t('header.navigation.portals')}}</NuxtLink>
      </li>
      <li
        :class="{ 'active': $route.path.endsWith('/contact_us') }"
      >
        <NuxtLink :to="$localeRoute('/contact_us')">{{$t('header.navigation.contactUs')}}</NuxtLink>
      </li>
    </ul>
  </div> -->
  <PageBreadcrumb v-if="$route.path != '/' && $route.path != '/ar' && $route.path != '/ar/'" />
</template>
<script setup>
  // HANDLE TOGGLE MOBILE MENU
  const showMobileMenu = ref(false)

  watchEffect(()=>{
    if(useRoute().path){
      showMobileMenu.value = false
    }
  })
</script>

<style lang="scss" scoped>

</style>