<template>
  <div class="container schoolna_features_content">
    <div 
      class="schoolna_features_item" 
      v-for="(feature, index) in props.features" 
      :key="feature.title"
      data-aos="fade-up"
      >
      <!-- :data-aos-delay="index * 500" -->
      <div class="schoolna_feature_header">
        <div class="icon" v-html="feature?.icon"></div>
        <h5>{{feature?.title}}</h5>
      </div>
      <p>
        {{feature.description}}
      </p>
    </div>
  </div>
</template>

<script setup>
  // define props
  const props = defineProps({
    features: {
      type: Array,
      required: true
    }
  })
</script>

<style lang="scss" scoped>

</style>