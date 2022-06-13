
<script >
import { ref } from 'vue';
import { useStore } from 'vuex';
import Title from '../Title/Title.vue';
import Serviceshow from './Serviceshow.vue';
  export default {
    setup(){
        const store = useStore()
        const {services} = store.state

        const currentIndex = ref(1)
        const hanhdleClick = (_index)=>{
          services.map((servie,index)=>{
            currentIndex.value = _index;
            return index === _index 
            ? servie.isActive = true 
            : servie.isActive = false
          })
        }
        return { services,hanhdleClick,currentIndex,  }
    },
    components:{
      Title,
      Serviceshow
    }
  }
</script>

<template>
  <div class="body-service flex-center">
    <Title title="Care you can believe in" desc="Our Services" />
    <div class="body-service__content flex gap-20">
      <div class="body-service__content-right">
        <div class="body-service__list">

            <div name="fade" v-for="(item,index) in services" :key="index" :class="{active: item.isActive}" @click="hanhdleClick(index)" class="content-right__item">
            <div class="card flex-center gap-10">
              <img :src="item.pathIcon" />
              <p class="w-400">{{item.name}}</p>
            </div>
      
        </div>

        </div>
        <div class="content-right__item-btn active flex-center btn">
          <p>View All</p>
        </div>
      </div>
        <Serviceshow  :data="services[currentIndex]?.content" />
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
