<template>
  <div :class="['page', `${pageName}_page`]">
    <!-- Dynamic CMS Sections -->
    <Sections v-if="sections?.length" :sections="sections" />

    <!-- Actual Page Content -->
    <NuxtPage />
  </div>
</template>

<script setup>
const route = useRoute();
const { getMethod, getResult } = useApiMethods();

const sections = ref([]);
const pageName = ref("");

const fetchPage = async () => {
  // Example: use route path as slug
  const slug = route.path === "/" ? "home" : route.path.replace("/", "");

  await getMethod(`projects/${slug}`, null, true, false);

  const pageData = getResult?.value?.data?.pages?.[0];

  if (pageData) {
    sections.value = pageData.sections;
    pageName.value = pageData.name;
  }
};

watch(
  () => route.fullPath,
  () => {
    fetchPage();
  },
  { immediate: true },
);
</script>
