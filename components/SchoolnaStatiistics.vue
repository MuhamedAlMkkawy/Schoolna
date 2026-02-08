<template>
  <section ref="sectionRef" class="schoolna_statistics">
    <ul class="container schoolna_statistics_content">
      <li
        class="schoolna_statistics_item"
        v-for="(item, index) in animatedStats"
        :key="index"
      >
        <div class="image">
          <img :src="item.image" alt="image" loading="lazy" />
        </div>
        <div class="schoolna_statistics_item_info">
          <div class="counter">
            <h3>
              <span>+{{ item.current }}</span>
            </h3>
          </div>
          <p>
            {{ item[globalStore.lang +'Title'] }}
          </p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
// import images
import booksImg from "@/assets/images/books.svg";
import globeImg from "@/assets/images/table-globe.svg";
import studyImg from "@/assets/images/online-study.svg";
import hatImg from "@/assets/images/graduation-hat.svg";

// global store
const globalStore = useGlobalStore();

// stats data
const statistics = [
  {
    image: booksImg,
    number: 5,
    enTitle: "Flexible System",
    arTitle: "نظام متكامل",
  },
  {
    image: globeImg,
    number: 120,
    enTitle: "Clients",
    arTitle: "عملاء",
  },
  {
    image: studyImg,
    number: 80,
    enTitle: "Pioneers",
    arTitle: "روادج",
  },
  {
    image: hatImg,
    number: 5,
    enTitle: "Years of Experience",
    arTitle: "سنوات التجربة",
  },
];

  const { sectionRef, animatedStats } = useCounterAnimation(statistics, {
    stepDivisor: 80,
    interval: 50,
    threshold: 0.2
  })
</script>


<style lang="scss" scoped>
  // SCHOOLNA STATISTICS
  .schoolna_statistics{
    background: url('../assets/images/schoolna_statistics_background.png') no-repeat center center / cover;
    color: #fff;
    .schoolna_statistics_content{
      @include displayFlex();
      .schoolna_statistics_item{
        @include displayFlex($gap : 16px);
        position: relative;
        .schoolna_statistics_item_info{
          width: 200px;
          h3{
            font-size: 24px;
            font-weight: 500;
          }
          p{
            font-size: 16px;
            font-weight: 400;
          }
        } 
        &:not(:last-of-type)::after{
          content: '';
          position: absolute;
          inset-inline-end: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 2px;
          height: 38px;
          border-radius: 2px;
          background: linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%);
        }
      }
      @media (max-width : 992px){
        flex-wrap: wrap;
        .schoolna_statistics_item{
          flex-grow: 1;
          &::after{
            display: none;
          }
        }
      }
      @media (max-width : 567px){
        gap: 24px;
        .schoolna_statistics_item{
          flex-direction: column;
          text-align: center;
          gap: 10px;
          // max-width: 45%;
        }
      }
    }
  }
</style>