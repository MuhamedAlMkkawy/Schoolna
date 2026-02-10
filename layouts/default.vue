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
  const pathSegments = route.path.split("/").filter(Boolean);

  // If first segment looks like language code (2 letters), remove it
  if (pathSegments.length && pathSegments[0].length === 2) {
    pathSegments.shift();
  }

  const slug = pathSegments.length ? pathSegments.join("/") : "home";
  await getMethod(
    `projects/6978b20b034e791d598c8d9c?pageName=${slug}`,
    null,
    true,
    false,
  );

  const pageData = getResult?.value?.data;

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
