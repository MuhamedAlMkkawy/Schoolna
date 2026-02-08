<template>
  <ul class="unique_features_content">
    <li class="unique_features_item" 
      v-for="(item , index) in props.featureItemsContent" 
      :key="index"
      data-aos="fade-up"
      :data-aos-delay="index * 300"
      >
      <div class="image">
        <img :src="item?.image" alt="image" loading="lazy">
      </div>
      <div class="unique_features_info">
        <h3>{{item?.[globalStore.lang+'Title']}}</h3>
        <p>{{item?.[globalStore.lang + 'Description']}}</p>
      </div>
    </li>
  </ul>
</template>

<script setup>
  // define globalStore 
  const globalStore = useGlobalStore()
  // define props
  const props = defineProps({
    featureItemsContent : Array
  })
</script>

<style lang="scss" scoped>
  .unique_features_content{
    @include displayGrid($px: 265px, $gap: 20px 50px, $fit: 2);
    padding-block-end: 30px;
    .unique_features_item{
      @include displayFlex($justify : flex-start);
      // max-width: 500px;
      .image{
        width: 70px;
        height: 70px;
        padding: 14px 19px;
        border-radius: 12px;
        background: #F6F6F8;
        flex-shrink: 0;
        img{
          object-fit: contain;
        }
      }
      .unique_features_info{
        h3{
          font-size: 18px;
          font-weight: 500;
          // @include textTruncate(1);
        }
        p{
          font-size: 14px;
          font-weight: 400;
        }
      }
    }
    @media (max-width : 767px ){
      grid-template-columns: repeat(2 , 1fr);
      gap: 10px;
      .unique_features_info{
        h3{
          font-size: 14px !important;
        }
        p{
          font-size: 12px !important;
        }
      }
    }
    @media (max-width : 667px ){
      grid-template-columns: repeat(1  , 1fr);
      gap: 10px;
    }
  }
</style>