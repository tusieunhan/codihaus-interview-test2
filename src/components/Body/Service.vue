
<script >
import { reactive,ref } from 'vue';
import Title from '../Title/Title.vue';
import Serviceshow from './Serviceshow.vue';
  export default {
    setup(){
        const Services = reactive([
          {
          isActive : false,
          pathIcon: 'src/assets/icon/Checkup.png',
          name : 'Free Checkup',
          content : {
            title : 'A passion for putting patients first.1',
            items : ['A Passion for Healing',
                    '5-Star Care',
                    'All our best',
                    'Believe in Us',
                    'A Legacy of Excellence',
                    'Always Caring'],
            photos : ['src/assets/img/Group 186.png','src/assets/img/Group 187.png'],
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque. Convallis felis vitae tortor augue. Velit nascetur proin massa in.'
          },
        },
          {
          isActive : true,
          pathIcon: 'src/assets/icon/Heart.png',
          name : 'Cardiogram',
          content : {
            title : 'Runtime vs. Compile-time Reactivity',
            items : ['A Passion for Healing',
                    'Composition API',
                    'All our best',
                    ' Vue 3 the Options API',
                    'Believe in Us',
                    ' All property access on',
                    'Always Caring'],
            photos : ['src/assets/img/13.png','src/assets/img/12.png'],
            desc: 'The ref(), computed() and watchEffect() APIs are all part of the Composition API. If you have only been using Options API with Vue so far, youll notice that Composition API is closer to how Vues reactivity system works under the hood. In fact, in Vue 3 the Options API is implemented on top of the Composition API. All property access on the component instance (this) triggers getter/setters for reactivity tracking, and options like watch and computed'
          },
        },
          {
          isActive : false,
          pathIcon: 'src/assets/icon/Testing.png',
          name : 'Dna Testing',
          content : {
            title : 'Reactivity Debugging',
            items : ['Its great that Vues reactivity',
                    '5-Star Care',
                    'update using the renderTracked',
                    'Believe in Us',
                    ],
            photos : ['src/assets/img/14.jpg','src/assets/img/vuex.png'],
            desc: 'We can debug what dependencies are used during a components render and which dependency is triggering an update using the renderTracked and renderTriggered lifecycle hooks. Both hooks will receive a debugger event which contains information on the'
          },
        },
          {
          isActive : false,
          pathIcon: 'src/assets/icon/Blood.png',
          name : 'Blood Bank',
          content : {
            title : 'Integration with External State Systems',
            items : ['A Passion for Healing',
                    'The general idea of integrating',
                    'property is accessed',
                    'Believe in Us',
                    'A Legacy of Excellence',
                    'When the external'],
            photos : ['src/assets/img/11.png','src/assets/img/13.png'],
            desc: 'Immutable data structures solve this by never mutating the state objects - instead, it creates new objects that share the same, unchanged parts with old ones. There are different ways of using immutable data in JavaScript, but we recommend using Immer with Vue because it allows you to use immutable data while keeping the more ergonomic, mutable syntax.'
          },
        },
        ])
        const currentIndex = ref(1)
        const hanhdleClick = (_index)=>{
          Services.map((servie,index)=>{
            currentIndex.value = _index;
            return index === _index ? servie.isActive = true : servie.isActive = false
          })
        }
        return { Services,hanhdleClick,currentIndex }
    },
    components:{
      Title,
      Serviceshow
    }
  }
</script>

<template>
  <div class="body-service flex-center">
    <Title title="Care you can believe in" desc="Our Services" />
    <div class="body-service__content flex gap-20">
      <div class="body-service__content-right">
        <div class="body-service__list">
          <div v-for="(item,index) in Services" :key="index" :class="{active: item.isActive}" @click="hanhdleClick(index)" class="content-right__item">
            <div class="card flex-center gap-10">
              <img :src="item.pathIcon" />
              <p class="w-400">{{item.name}}</p>
            </div>
          </div>

        </div>
        <div class="content-right__item-btn active flex-center">
          <p>View All</p>
        </div>
      </div>
        <Serviceshow  :data="Services[currentIndex].content" />
    </div>
  </div>
</template>

<style scoped>
</style>
