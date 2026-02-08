<template>
  <div
    :class="['schoolna_header', { centered: props.headerPosition == 'center' }]"
  >
    <div
      class="schoolna_header_badge"
      :data-aos="props.headerAnimation"
      v-if="props.badgeText"
    >
      {{ props.badgeText }}
    </div>
    <h4
      :data-aos="props.headerAnimation"
      v-if="props.title"
      data-aos-delay="300"
    >
      {{ props.title }}
    </h4>
    <div
      class="text"
      :data-aos="props.headerAnimation"
      v-if="props.text"
      data-aos-delay="500"
    >
      {{ props.text }}
    </div>
  </div>
</template>

<script setup>
// define props
const props = defineProps({
  headerPosition: {
    type: String,
    default: "start",
  },
  headerAnimation: {
    type: String,
    default: "fade-up",
  },
  badgeText: {
    type: String,
  },
  title: {
    type: String,
  },
  text: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>

</style>
