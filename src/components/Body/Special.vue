<script >
import { reactive } from 'vue';
import Title from '../Title/Title.vue';
  export default {
    components:{
      Title
    },
    setup(){
      const Specails = reactive(
        {iconUrl : "src/assets/icon/Heart__A.png",
        names  : ["Cardiogram",
            "Bones",
            "Oncology",
            "Otorhinolaryngology",
            "Ophthalmology",
            "Cardiovascular",
            "Pulmonology",
            "Renal Medicine",
            "Gastroenterology",
            "Urology",
            "Dermatology",
            "Gynaecology"]}
      )
      return {Specails}
    }
  }
</script>

<template>
  <div class="body-special">
    <Title title="Always Caring" desc="Our Specialties" classes="body-special__title" />
    <div class="body-special-list">
      <div v-for="(item,index) in Specails.names" :key="index" class="body-special__item hover">
        <div class="card flex-center gap-10">
          <img :src="Specails.iconUrl" alt="" />
          <p class="w-400">{{item}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
