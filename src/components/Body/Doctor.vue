<script>
import Title from "../Title/Title.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { onMounted, onUnmounted, ref } from "vue";
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";

export default {
  components: {
    Title,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const store = useStore()
    const {doctors} = store.state

    let windowWidth = ref(window.innerWidth)
    const onWidthChange = () => windowWidth.value = window.innerWidth
    onMounted(() => window.addEventListener('resize', onWidthChange))
    onUnmounted(() => window.removeEventListener('resize', onWidthChange))
    
    const type = computed(() => {
      if (windowWidth.value < 550) return 1
      if (windowWidth.value >= 550 ) return 3
    })

    return {
      modules: [Pagination], doctors, type
    };
  },
};
</script>


<template>
  <div class="body-doctor">
    <Title title="Trusted Care" desc="Our Doctors" classes="body-doctor__title" />
    <swiper :slidesPerView="type" :spaceBetween="30" :pagination="{
      clickable: true,
    }" :modules="modules" :centeredSlides="true" :loop="true" class="body-doctor__list">
      <swiper-slide v-for="(doctor, index) in doctors " :key="index">
        <div class="body-doctor__item flex">
          <div class="body-doctor__item-img">
            <img :src="doctor.photoUrl" :alt="doctor.name" />
          </div>
          <div class="body-doctor__item-info bg-acceny color-primary flex-center">
            <p class="doctor__item-name">{{ doctor.name }}</p>
            <p class="doctor__item-profession">{{ doctor.career }}</p>
            <div class="doctor__item-social flex gap-20">
              <a v-for="(item, index) in doctor.socials" :key="index" :href="item.link">
                <img :src="item.typeSocial === 'facebook'
                  ? `src/assets/icon/social-1.png`
                  : item.typeSocial === 'linkedin'
                    ? `src/assets/icon/social-2.png`
                    : `src/assets/icon/social-3.png`
                " />
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
