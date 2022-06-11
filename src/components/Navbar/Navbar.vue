<script >
import { reactive, ref } from 'vue';
import Button from '../Button/Button.vue'
  export default {
    components:{
      Button
    },  
    setup(){
    const isSearch = ref(false)
    const textSearch = ref(null)
    const routes = reactive([
      {
      name : 'Home',
      to : "/home"
    },
      {
      name : 'About us',
      to : "/about"
    },
      {
      name : "Services",
      to : "/services"
    },
      {
      name : 'Doctors',
      to : "/doctors"
    },
      {
      name : 'News',
      to : "/news"
    },
      {
      name : 'Contact',
      to : "/contact"
    }])
    const handleSearch = () =>{
      if(textSearch.value){
        console.log(textSearch.value)
      }else{
        isSearch.value = !isSearch.value;
      }
    }
    return {routes , handleSearch,isSearch,textSearch}
    },
  }

</script>

<template>
  <div class="navbar bg-primary">
    <div class="content flex-between navbar">
      <ul class="navbar-list flex-between gap-20">
        <li v-for="(route,index) in routes" :key="index" class="navbar-list__item color-white">{{route.name}}</li>
      </ul>
      <div
        class="mobile__navbar-logo color-accent font-yeseva"
        style="display: none"
      >
        MEDDICAL
      </div>
      <div class="navbar-group flex gap-20">
        <input v-show="isSearch" v-model="textSearch" 
        class="inputSearch" type="text" >
        <img
          src="../../assets/icon/175.png"
          alt=""
          class="navbar-group_search"
          @click="handleSearch"
        />
        <div  class="navbar-group_menu" style="display: none">
          <img src="../../assets/icon/menu.png" alt="" />
        </div>
        <Button text="Appointment" class="something"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.inputSearch{
  outline: none;
  height: 40px;
  border: none;
  border-radius: 20px;
  padding: 0 15px;
  margin-right: -60px;
  background-color: #bfd2f8;
}
</style>
