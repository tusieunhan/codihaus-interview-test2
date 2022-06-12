<script>
import Title from "../Title/Title.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { reactive } from "vue";

export default {
  components: {
    Title,
    Swiper,
    SwiperSlide,
  },
  setup() {

    const doctors = reactive([
      {
        name : "Tony Stark",
        photoUrl : "src/assets/img/3.png",
        career : "Neurology",
        desc: "Đen - Ai muốn nghe không (M/V)",
        socials : [
        {
          typeSocial : 'facebook',
          link : "https://www.youtube.com/watch?v=JxBnLmCOEJ8"
        },
        {
          typeSocial : 'linkedin',
          link : "https://www.youtube.com/watch?v=JxBnLmCOEJ8"
        },
        {
          typeSocial : 'instagram',
          link : "https://www.youtube.com/watch?v=JxBnLmCOEJ8"
        },
        ]
      },
      {
        name : "Pepper Potts",
        photoUrl : "src/assets/img/2.png",
        career : "Neurology",
        desc: "Đen - Ai muốn nghe không (M/V)",
        socials : [
        {
          typeSocial : 'facebook',
          link : "https://www.youtube.com/watch?v=JxBnLmCOEJ8"
        },
        {
          typeSocial : 'linkedin',
          link : "https://www.youtube.com/watch?v=JxBnLmCOEJ8"
        },
        {
          typeSocial : 'instagram',
          link : "https://www.youtube.com/watch?v=JxBnLmCOEJ8"
        },
        ]
      },
      {
        name : "Bucky Barnes",
        photoUrl : "src/assets/img/1.png",
        career : "Neurology",
        desc: "Đen - Ai muốn nghe không (M/V)",
        socials : [
        {
          typeSocial : 'facebook',
          link : "https://www.youtube.com/watch?v=JxBnLmCOEJ8"
        },
        {
          typeSocial : 'linkedin',
          link : "https://www.youtube.com/watch?v=JxBnLmCOEJ8"
        },
        {
          typeSocial : 'instagram',
          link : "https://www.youtube.com/watch?v=JxBnLmCOEJ8"
        },
        ]
      },
      {
        name : "Thor Odinson",
        photoUrl : "src/assets/img/2.png",
        career : "Neurology",
        desc: "Đen - Ai muốn nghe không (M/V)",
        socials : [
        {
          typeSocial : 'facebook',
          link : "https://www.youtube.com/watch?v=JxBnLmCOEJ8"
        },
        {
          typeSocial : 'linkedin',
          link : "https://www.youtube.com/watch?v=JxBnLmCOEJ8"
        },
        {
          typeSocial : 'instagram',
          link : "https://www.youtube.com/watch?v=JxBnLmCOEJ8"
        },
        ]
      },
      {
        name : "Steve Rogers",
        photoUrl : "src/assets/img/3.png",
        career : "Neurology",
        desc: "Đen - Ai muốn nghe không (M/V)",
        socials : [
        {
          typeSocial : 'instagram',
          link : "https://www.youtube.com/watch?v=JxBnLmCOEJ8"
        },
        {
          typeSocial : 'linkedin',
          link : "https://www.youtube.com/watch?v=JxBnLmCOEJ8"
        },
        {
          typeSocial : 'facebook',
          link : "https://www.youtube.com/watch?v=JxBnLmCOEJ8"
        },
        ]
      },
      ])
    return {
      modules: [Pagination],doctors
    };
  },
};
</script>


<template>
  <div class="body-doctor">
    <Title title="Trusted Care" desc="Our Doctors" classes="body-doctor__title" />
    <swiper 
    :slidesPerView="3"
    :spaceBetween="30"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="body-doctor__list"
  >
      <swiper-slide v-for="(doctor,index) in doctors " :key="index">
        <div class="body-doctor__item flex">
        <div class="body-doctor__item-img">
          <img :src="doctor.photoUrl" :alt="doctor.name" />
        </div>
        <div class="body-doctor__item-info bg-acceny color-primary flex-center">
          <p class="doctor__item-name">{{doctor.name}}</p>
          <p class="doctor__item-profession">{{doctor.career}}</p>
          <div  class="doctor__item-social flex gap-20">
            <a v-for="(item,index) in doctor.socials" :key="index" :href="item.link">
              <img :src="item.typeSocial === 'facebook' 
              ? `src/assets/icon/social-1.png` 
              : item.typeSocial === 'linkedin'
              ? `src/assets/icon/social-2.png` 
              : `src/assets/icon/social-3.png`
              "/>
            </a>
          </div>
        </div>
        <div class="body-doctor__item-btn btn active flex-center">
          <p>View Profile</p>
        </div>
      </div>
      </swiper-slide>
</swiper>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
