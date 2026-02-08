<template>
  <div class="input-wrap">
    <VeeField 
      :name="props.name" 
      :type="props.type" 
      :placeholder="props.placeholder" 
      :autofocus="props.autofocus"
      @change="emit('updateInputField', $event.target.value)"
      />
      <VeeErrorMessage :name="props.name" />
  </div>
</template>

<script setup>
  // define props
  const props = defineProps({
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    autofocus: {
      type: Boolean,
      default: false
    },
  });


  // define emits
  const emit = defineEmits(['updateInputField']);
</script>

<style lang="scss" scoped>
  
  span[role="alert"] {
    display: block;
    color: red;
    margin-bottom: 10px;
    font-size: 12px;
    position: absolute;
    inset-inline-start: 0;
    margin-top: 5px;
    &::before{
      content: '*';
    }
  }
</style>
