<template>
  <div>
    <h1>Öğrenciler</h1>
    <div v-for="student in students" :key="student.id">
<!-- <router-link :to="{path:`/students/${student.id}`}">{{student.name}}</router-link> -->
<router-link :to="{name:'studentInfo',params:{id:student.id}}">{{student.name}}</router-link>
    </div>
    <Deneme :zaman="zaman"/>
  </div>
</template>

<script>
import Deneme from '@/components/Deneme.vue';


export default {
data(){
    return {
    students:[
        {id:1,name:"Varol",not:55},
        {id:2,name:"Ali",not:75},
        {id:3,name:"Ethem",not:85},
        {id:4,name:"Ayşe",not:25},
    ],
zaman:"ne zaman"}
},
components:{Deneme}
}
</script>

<style>

</style>