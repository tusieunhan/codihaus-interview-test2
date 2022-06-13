<script >
import Button from '../Button/Button.vue';
import { BANNER_TITLE, BANNER_DESC } from '../../Constant';
export default {
  setup(){
    return { BANNER_TITLE, BANNER_DESC}
  },
  components:{
    Button
  }
}
</script>

<template>
  <div class="banner flex-center">
    <div class="content banner-info color-second">
      <p class="banner-info__title font-work">{{BANNER_TITLE}}</p>
      <p class="banner-info__text color-primary font-yeseva">
        {{BANNER_DESC}}
      </p>
      <Button text="Appointment" class="btn-banner"/>
    </div>
  </div>
</template>

<style scoped>
.btn-banner{
  width: min-content;
}
</style>
