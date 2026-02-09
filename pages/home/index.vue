<template>
  <div :class="['page', `${getResult?.data?.pages[0]?.name}_page`]">
    <!-- Render all sections dynamically -->
    <Sections :sections="getResult?.data?.pages[0]?.sections" />
  </div>
</template>

<script setup>
const { getMethod, getResult } = useApiMethods();

onMounted(() => {
  getMethod("projects/6978b20b034e791d598c8d9c", null, true, false);
});
</script>

