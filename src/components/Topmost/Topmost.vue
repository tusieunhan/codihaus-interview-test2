<script>
import { useStore } from "vuex";
import Info from "./Info.vue";
export default {
  setup(){
    const store = useStore();
    // const items = computed(()=> store.state.items)
    const {items} = store.state
    return {items}
  },
  components: {
    Info,
  },
};
</script>

<template>
  <div class="content topmost flex-between">
    <div class="topmost-logo flex">
      <p class="color-primary">MED</p>
      <p class="color-second">DICAL</p>
    </div>
    <div class="topmost-info flex-between gap-10">
      <Info v-for="(item, index) in items" :v-key="index" :data="item"></Info>
    </div>
  </div>
</template>

<style scoped></style>
