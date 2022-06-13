<script >
import {  reactive, ref, watchEffect } from 'vue';
import Button from '../Button/Button.vue'
import {routes } from '../../routes';
import { useStore } from 'vuex';
  export default {
    components:{
      Button
    },  
    data(){
      return {
         isModel: false
      }
    },
    setup(){
    const isSearch = ref(false)
    // let isModel = ref(false)
    const textSearch = ref(null)
    const store = useStore()

    const handleSearch = () =>{
      if(textSearch.value){
        watchEffect(()=> store.commit("setTextSearch",{text : textSearch.value}))
      }else{
        isSearch.value = !isSearch.value;
      }
    }
 
    return {handleSearch,isSearch,textSearch,routes}
    },
  }

</script>

<template>
  <div class="navbar bg-primary">
    <div class="content flex-between navbar">
      <ul class="navbar-list flex-between gap-20" 
      :class="{active: isModel}">
        <li v-for="(route,index) in routes" :key="index" class="navbar-list__item color-white">{{route.name}}</li>
      </ul>
      <div
        class="mobile__navbar-logo color-accent font-yeseva"
        style="display: none"
      >
        MEDDICAL
      </div>
      <div class="navbar-group flex gap-20">
        <input v-show="isSearch" v-model="textSearch"  placeholder="Search"
        class="inputSearch" type="text" >
        <img
          src="../../assets/icon/175.png"
          alt=""
          class="navbar-group_search"
          @click="handleSearch"
        />
        <div @click="isModel = !isModel"  class="navbar-group_menu" style="display: none">
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
  background-color: var(--accent-color);
  caret-color: var(--primary-color);
  color: var(--primary-color);
  outline: none;
  font-family: "Poppins";
}
input::placeholder {
  color: var(--primary-color);
}
.active {
  visibility: visible !important;
}
li:active{
  opacity: 0.8;
}

</style>
