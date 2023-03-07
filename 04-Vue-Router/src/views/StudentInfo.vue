<template>
  <div>
    <h3>Öğrenci Bilgi Sayfası</h3>
    <p>Öğrenci ID : {{ id }}</p>
       <button @click="$router.go(-1)">Geri Dön</button>
       <Deneme :bakarlar="bakarlar"/>
        <!-- <h3>SELAM SANA</h3>
        <p>Buraya bakarlar</p> -->
      
  </div>
</template>

<script>
import Deneme from '@/components/Deneme.vue';

export default {
data() {
    return {
        studentID: this.$route.params.id,
        bakarlar:"NAPTİNN"

    }},
props:["id"],
components:{Deneme}
}

</script>

<style>

</style>