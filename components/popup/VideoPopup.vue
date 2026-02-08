<template>
  <div>
    <div class="popup">
      <div class="content">
        <button class="close_btn" @click="emit('handleShowVideoPopup')">
          <i class="pi pi-times"></i>
        </button>
        <div class="image">
          <video :src="props.video" controls autoplay></video>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  // define emits 
  const emit = defineEmits(['handleShowVideoPopup'])
  // define props
  const props =defineProps({
    video : {
      type : String,
      default : ""
    }
  })
</script>

<style lang="scss" scoped>
  .popup .content {
    border-radius: 15px !important;
    padding: 10px !important;
    .image{
      margin-bottom: 0 !important;
      max-width: unset !important;
      video{
        object-fit: contain;
        max-height: 500px;
        border-radius: 8px;
      }
    }
  }
</style>