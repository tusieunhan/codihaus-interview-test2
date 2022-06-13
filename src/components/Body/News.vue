<script >
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper";

import { useStore } from 'vuex'
import Title from '../Title/Title.vue'
export default{
  components:{
    Title,
    Swiper,
    SwiperSlide,
  },
  setup(){
    const store = useStore();
    const { news} = store.state
    return {modules: [Grid, Pagination],news }
  } 
}

</script>

<template>
  <div class="body-news">
    <Title title="Better information, Better health" desc="News" class="body-news__title"/>
    <swiper :class="'body-news__list'"   :slidesPerView="2"
    :grid="{
      rows: 2,
    }"
    :spaceBetween="20"
    :pagination="{
      clickable: true,
    }"
    :modules="modules">
      <swiper-slide v-for="(item) in news" :key="item.id" class="body-news__item flex">
        <div class="body-news__item-img">
          <img :src="item.photoUrl" alt="" />
        </div>
        <div class="news__item-content">
          <p class="news__item-content-day color-second textoneline">
            {{item.dateAndAuthor}}
          </p>
          <p class="news__item-content-title textsecondline">
            {{item.title}}
          </p>
          <div class="news__item-content-icon"></div>
          <div class="news__item-icon flex gap-5">
            <img src="src/assets/icon/mat.png" alt="" /><span>{{item.countViews}}</span>
            <img src="src/assets/icon/tim.png" alt="" /><span>{{item.countHearts}}</span>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>

</style>