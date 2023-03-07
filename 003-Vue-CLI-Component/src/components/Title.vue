<template>
  <div id="asd">
    <h3>{{title}}</h3>
    <h6>{{ asd }} {{ ne }}</h6>
  </div>
</template>

<script>
export default {
  name:"Ditle",
  // props:{asd:"asd",ne:"ne"},
  props:["asd","ne"],
data(){
  return {
    title:"Vue 3'e giriş"
  }
}
}
</script>

<style>
#asd{
  color:aqua
}
</style>