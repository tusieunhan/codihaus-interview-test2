<script >
import Button from '../Button/Button.vue';
export default {
  components:{
    Button
  }
}

</script>

<template>
  <div class="banner flex-center">
    <div class="content banner-info color-second">
      <p class="banner-info__title font-work">Caring for Life</p>
      <p class="banner-info__text color-primary font-yeseva">
        Leading the Way in Medical Excellence
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
