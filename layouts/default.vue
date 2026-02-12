<template>
  <div :class="['page', `${pageName}_page`]">
    <!-- Dynamic CMS Sections -->
    <Sections v-if="sections?.length" :sections="sections" />

    <!-- Actual Page Content -->
    <NuxtPage />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useApiMethods } from "@/composables/useApiMethods"; // your custom hook

const route = useRoute();
const { getMethod, getResult } = useApiMethods();

const globalStore = useGlobalStore()

const sections = ref([]);
const pageName = ref("");

// Language-based route slug mapping
const routeSlugMap = {
  en: {
    home: "home",
    about: "about",
    contact: "contact",
  },
  ar: {
    home: "الرئيسية",
    about: "من-نحن",
    contact: "اتصل-بنا",
  },
};

const fetchPage = async () => {
  const pathSegments = route.path.split("/").filter(Boolean);

  // Default language
  let lang = globalStore.lang || "en";

  // If first segment is language code, set lang and remove it
  if (pathSegments.length && pathSegments[0].length === 2) {
    lang = pathSegments.shift();
  }

  // Default to 'home' if no page segment
  const pageKey = pathSegments.length ? pathSegments[0] : "home";

  // Map pageKey according to language
  const slug = routeSlugMap[lang]?.[pageKey] || pageKey;

  // console.log("Language:", lang, "Page Key:", pageKey, "Slug:", slug);

  await getMethod(
    `projects/6978b20b034e791d598c8d9c?pageName=${slug}`,
    null,
    true,
    false,
  );
};

watch(
  () => getResult?.value?.data,
  (newValue) => {
    if (newValue) {
      sections.value = newValue.sections;
      pageName.value = newValue.name;
    }
  },
);

watch(
  () => route.fullPath,
  () => {
    fetchPage();
  },
  { immediate: true },
);
</script>
