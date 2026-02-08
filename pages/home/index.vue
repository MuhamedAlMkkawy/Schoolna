<template>
  <div class="page home_page">
    <!-- Render all sections dynamically -->
    <template v-if="getResult?.data?.pages[0]?.sections">
      <section
        v-for="section in getResult?.data?.pages[0]?.sections?.filter(
          (sec) => sec.visible,
        )"
        :key="section?.id"
        :class="section?.name.toLowerCase().replace(/\s+/g, '_')"
      >
        <div
          :class="[
            'container  ',
            // `schoolna_${section?.name?.toLowerCase()}_content`,
          ]"
        >
          <template
            v-for="component in section?.components"
            :key="component?._id"
          >
            <!-- ###### LOGO ###### -->
            <div
              v-if="component?.type == 'logo'"
              :class="['image ', component?.content?.customClasses]"
              :style="{
                maxWidth: component?.content?.width,
                maxHeight: component?.content?.height,
              }"
            >
              <img
                :src="component?.content?.image"
                :alt="component?.type"
                loading="lazy"
              />
            </div>
            <!-- ###### NAV MENU ###### -->
            <ul
              v-if="component.type === 'nav-menu'"
              :class="[
                `schoolna_${section?.name?.toLowerCase()}_links`,
                component?.content?.customClasses,
                {
                  active:
                    section.name.toLowerCase() === 'header' && showMobileMenu,
                },
              ]"
            >
              <div
                class="image"
                v-if="section.name.toLowerCase() === 'header' && showMobileMenu"
              >
                <img
                  src="@/assets/images/mobile_logo.svg"
                  alt="image"
                  loading="lazy"
                />
              </div>
              <button
                class="pi pi-times close_mobile_menu"
                @click="showMobileMenu = !showMobileMenu"
                v-if="section.name.toLowerCase() === 'header' && showMobileMenu"
              ></button>

              <li
                v-for="(item, index) in component?.content?.items"
                :id="index"
                :class="{
                  active: $route.path == item?.link,
                }"
              >
                <NuxtLink :to="$localeRoute(item?.link)">
                  {{ item?.title }}
                </NuxtLink>
              </li>
            </ul>
            <!-- ###### BUTTONS ###### -->
            <div
              v-if="component.type == 'buttons'"
              :class="['flex_buttons ', component?.content?.customClasses]"
            >
              <button
                v-for="button in component?.content?.items"
                @click="handleLinkTarget(button)"
                :class="['main-btn ', { reversed: button?.reversed }]"
              >
                {{ button?.title }}
                <i v-if="button?.icon" :class="button?.icon"></i>
              </button>
            </div>
            <!-- ###### CUSTOM HTML ###### -->
            <div
              :class="component?.content?.customClasses"
              v-if="component.type === 'custom-html'"
              v-html="parsedHtml(component?.content?.html)"
            />
          </template>
          <!-- FOR HEADER ONLY -->
          <!-- THE HEADER BUTTONS OF LANG , MOBILE MENU AND CONTACT BUTTON IN HEADER -->
          <div
            class="schoolna_header_buttons"
            v-if="section?.name?.toLowerCase() == 'header'"
          >
            <button
              class="mobile_menu_controller main-btn"
              @click="showMobileMenu = !showMobileMenu"
            >
              <i class="pi pi-bars"></i>
            </button>
            <NuxtLink :to="$localeRoute('/contact_us')" class="main-btn">{{
              $t("header.buttons.getStart")
            }}</NuxtLink>
            <LanguageSwitch />
          </div>
          <!-- FOR HEADER ONLY -->
        </div>
      </section>
    </template>
  </div>
</template>

<script setup>
const { getMethod, getResult } = useApiMethods();
const router = useRouter();
const localeRoute = useLocaleRoute();

definePageMeta({
  layout: false,
});

// handle link target
const handleLinkTarget = (item) => {
  if (item?.target === "_blank") {
    window.open(item?.link, "_blank");
  } else {
    router.push(localeRoute(item?.link));
  }
};

// handle the custom html
const parsedHtml = (html = "") => {
  if (!html) return "";

  // Convert escaped HTML to real HTML
  const doc = new DOMParser().parseFromString(html, "text/html");

  let content = doc.body.textContent || "";

  // Remove <pre> wrappers if they exist
  content = content.replace(/^\s+|\s+$/g, "");

  return content;
};

// HANDLE TOGGLE MOBILE MENU FOR HEADER
const showMobileMenu = ref(false);

watchEffect(() => {
  if (useRoute().path) {
    showMobileMenu.value = false;
  }
});

onMounted(() => {
  getMethod("projects/6978b20b034e791d598c8d9c", null, true, false);
});
</script>

<style lang="scss" scoped></style>
