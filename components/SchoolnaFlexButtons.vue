<template>
  <div class="flex_buttons" :style="'justify-content: ' + props.buttonsPositon">
    <NuxtLink 
      v-for="(button , index) in props.buttons" 
      :key="button"
      :to="localeRoute('/contact_us')"
      :class="[
        'main-btn', 
        {
          'reversed' : button.isReversed
        }
      ]" 
    >
      {{button.title}}
      <i v-if="button.title == 'Trial'" class="pi pi-arrow-right"></i>
    </NuxtLink>
  </div>
</template>

<script setup>
  // define localeRoute 
  const localeRoute = useLocaleRoute()


  // define props
  const props = defineProps({
    buttonsPositon : {
      type : String,
      default : 'center'
    },
    buttons : {
      type : Array,
      required : true
    }
  })
</script>

<style lang="scss" scoped>

</style>