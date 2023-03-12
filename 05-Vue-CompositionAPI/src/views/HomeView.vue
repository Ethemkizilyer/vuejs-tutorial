<template>
  <div class="home">
<p >{{ name }} - {{ job.name }}</p>
<!-- <p ref="info">Deneme</p> -->
<button @click="clicked" ref="info">Click</button>
<input type="text" v-model="name"><br><hr><br>
<input type="text" v-model="search">
<div v-for="day in finded" :key="day">{{ day }}</div>
<button @click="stop">Stop</button>
<Content :contents="contents"></Content>
  </div>
</template>

<script>
import {onMounted,ref,reactive,computed,watch,watchEffect} from "vue"
import Content from '@/components/Content.vue'



export default {
  name: 'HomeView',
  components: {Content},
setup() {
  // console.log("setup yüklendi")
  // onMounted(()=>{
  //   console.log("mounted yüklendi")
  // })
  let name=ref("ethem")
  let job=reactive({name:"Çaycı"})
  const days=ref(["Pazartesi","Salı","Çarşamba","Perşembe","Cuma"])
const  search =ref("")
const finded=computed(()=>{
  return days.value.filter((day)=>day.toLowerCase().includes(search.value.toLowerCase()))
})

const watchS = watch(search,()=>{
  console.log("watch çalıştı")
})
const watchEffectS = watchEffect(()=>{
  console.log("watcheffect çalıştı",days.value)
  console.log("watcheffect çalıştı",search.value)
})

const stop =()=>{
  watchS()
  watchEffectS()
}
  const info=ref(null)

  const clicked=()=>{
    // console.log("Buton tıklandı")
    console.log(info,info.value.innerHTML)
    name.value="Deneme Click"
    job.name="Müdür"
  }

  const contents=ref([
    {id:1,title:"deneme 1",details:"Details 1"},
    {id:2,title:"deneme 2",details:"Details 2"},
    {id:3,title:"deneme 3",details:"Details 3"},
    {id:4,title:"deneme 4",details:"Details 4"},
  ])
  return {name,job,clicked,info,days,search,finded,stop,contents}
},
// mounted() {
//   console.log("mounted yüklendi")
// },
// created() {
//   console.log("created yüklendi")
// },
  
}
</script>
