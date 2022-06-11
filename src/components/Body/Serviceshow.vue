<template>
    <div class="body-service__content-left flex gap-20">
        <div class="content-left__text">
          <p class="content-left__text-title font-work w-500">
            {{data.title}}
          </p>
          <div class="content-left__text-list flex gap-20">
            <div v-for="(item,index) in data.items" :key="index" class="content-left__text-item flex gap-10">
              <div class="point"></div>
              <p>{{item}}</p>
            </div>
          </div>
          <p class="content-left__text-desc">
           {{data.desc}}
          </p>
        </div>
        <div class="content-left__img flex-between">
          <img v-for="(photo,index) in data.photos" :key="index" :src="photo"  />
        </div>
      </div>
</template>

<script>
export default {
    props:{
        data: Object
    },
}
</script>

<style lang="scss" scoped>

</style>