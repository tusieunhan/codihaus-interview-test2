<script>
import Info from "./Info.vue";
export default {
  data() {
    return {
      parentMessage: "Parent",
      items: [
        {
          nameIcon: "/src/assets/icon/177.png",
          name: "Emergency",
          desc: "(237) 681-812-255",
        },
        {
          nameIcon: "/src/assets/icon/188.png",
          name: "LOCATION",
          desc: "0123 Some Place",
        },
        {
          nameIcon: "/src/assets/icon/178.png",
          name: "WORK HOUR",
          desc: "09:00 - 20:00 Everyday",
        },
      ],
    };
  },
  components: {
    Info,
  },
};
</script>

<template>
  <divn class="content topmost flex-between">
    <div class="topmost-logo flex">
      <p class="color-primary">MED</p>
      <p class="color-second">DICAL</p>
    </div>
    <div class="topmost-info flex-between gap-10">
      <Info v-for="(item, index) in items" :v-key="index" :data="item"></Info>
    </div>
  </divn>
</template>

<style scoped></style>
