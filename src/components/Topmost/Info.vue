<script>
import Img from "../Img/Img.vue";
export default {
  props: ["data"],
  components: {
    Img,
  },
};
</script>

<template>
  <div class="topmost-info__item flex gap-5">
    <Img :url="data.nameIcon"></Img>
    <div class="topmost-info__item-name gap-10">
      <p>{{ data.name }}</p>
      <p class="color-second">{{ data.desc }}</p>
    </div>
  </div>
</template>

<style scoped></style>
