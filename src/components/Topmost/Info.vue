<script>
export default {
  props: ["data"],
};
</script>

<template>
  <div class="topmost-info__item flex gap-5">
    <img :src="data.nameIcon" alt="">
    <div class="topmost-info__item-name gap-10">
      <p>{{ data.name }}</p>
      <p class="color-second">{{ data.desc }}</p>
    </div>
  </div>
</template>

<style scoped></style>
