<script>
export default {
  props: ["url"],
};
</script>

<template>
  <div>
    <img :src="`/src/assets/${url}`" />
  </div>
</template>
