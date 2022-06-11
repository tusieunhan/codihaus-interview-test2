<template>
     <div class="title-G " :class="classes">
      <div class="title-second">
        <p class="color-second w-700">{{title}}</p>
      </div>
      <div class="title-primary">
        <p class="color-primary font-yeseva">{{desc}}</p>
      </div>
    </div>
</template>

<script>
export default {
    props:{
        classes : String,
        title : String,
        desc: String
    }
}
</script>

<style lang="scss" scoped>

</style>