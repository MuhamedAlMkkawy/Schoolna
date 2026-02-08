<template>
  <section class="schoolna_hero">
    <div class="container schoolna_hero_content">
      <div class="schoolna_hero_header">
      <div :class="['schoolna_header_badge', {'centered' : props.headerPosition == 'center'}]" v-if="props.badgeText">
        {{ props.badgeText }}
      </div>
        <h3 class="title">{{ props.title }}</h3>
        <div class="text">{{ props.text }}</div>
      </div>
      <ul class="schoolna_info_list">
        <li v-for="(item ,index) in props.list" v-html="item" data-aos="zoom-in" :data-aos-delay="index * 200" :key="item"></li>
      </ul>
      <SchoolnaFlexButtons 
        buttonsPositon="center"
        v-if="props.buttons"
        :buttons="props.buttons"
      />
    </div>
  </section>
</template>

<script setup>
  // define props
  const props = defineProps({
    headerPosition :String,
    badgeText : String,
    title : String,
    text : String,
    list : Array,
    buttons : Array,
  })
</script>

<style lang="scss" scoped>
  section.schoolna_hero{
    background: url('../assets/images/manage_schoolna.png');
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    .schoolna_hero_content{
      max-width: 992px;
      text-align: center;
      .schoolna_header_badge{
        background: #E9FEFF;
        &.centered{
          margin: 0 auto 16px;
        }
      }
      h3.title{
        font-size:clamp(20px , 2.5vw , 40px);
        font-weight: 700;
        max-width: 650px;
        margin: 0 auto 16px;
      }
      .text{
        color: #fff;
        opacity: 0.9;
        max-width: 650px;
        text-align: center;
        margin: 0 auto;
      }
    }
    .schoolna_info_list{
      @include displayFlex();
      margin: 0;
      li{
        border-radius: 53px;
        border: 1px solid rgba(255, 255, 255, 0.08);
        background: rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(16.049999237060547px);
        padding: 8px 40px;
        padding-inline-end: 16px;
        &::before{
          inset-inline-start: 14px;
          top: 9px;
          filter: brightness(0)invert(1);
        }
      }
      @media (max-width : 767px){
        flex-wrap: wrap;
      }
      @media (max-width : 450px){
        li{
          flex-grow: 1;
          justify-content: center;
        }
      }
    }
  }
</style>