<script setup>
  import Title from '../Title/Title.vue';
  import { WELCOME_DESC } from '../../Constant';
</script>

<template>
  <div class="body-welcome flex-center">
    <Title title="Welcome to Meddical" desc="A Great Place to Receive Care" classes="body-welcome-title" />
    <div class="body-welcome__desc">
      <p>
       {{WELCOME_DESC}}
      </p>
    </div>
    <div class="body-welcome__btn flex gap-10 hover-o">
      <p class="color-second">Learn More</p>
      <img class="move" src="../../assets/icon/Vector.png" alt="" />
    </div>
    <img class="w-full banner2" src="../../assets/img/Group 183.png" alt="" />
  </div>
</template>

<style scoped>

</style>
