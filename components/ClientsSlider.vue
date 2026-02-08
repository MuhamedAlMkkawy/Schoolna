<template>
  <!-- Resizable container for testing 'carousel' breakpointMode -->
  <!-- Drag the right edge to adjust the width and see the breakpoints change -->
  <div class="carousel__wrapper">
    <Carousel v-bind="config">
      <Slide v-for="image in props.images" :key="image.id">
        <img :src="image.url" alt="image" />
      </Slide>
    </Carousel>
  </div>
</template>

<script setup>
  import 'vue3-carousel/carousel.css'
  import { Carousel, Slide, Navigation } from 'vue3-carousel'



  // define props
  const props = defineProps({
    images : Array,
    breakpoints : Object
  })


  // Carousel configuration
  const config = {
    height: 200,
    itemsToShow: 1,
    gap: 100,
    snapAlign: 'center',
    autoplay: 3000,   // smoother timing
    transition: 800,  // smooth slide animation
    wrapAround: true,
    breakpointMode: 'carousel',

    // Use breakpoints from props if available, else fallback
    breakpoints: props.breakpoints ,
  }

</script>

<style>



.carousel__wrapper {
  /* resize: horizontal; */
  /* border: 2px dashed gray; */
  overflow: auto;
  max-width: unset !important;
  width: 100% !important;
  padding: 2px;
  img {
    object-fit: contain;
    /* max-width: 150px; */
  }
}
</style>
