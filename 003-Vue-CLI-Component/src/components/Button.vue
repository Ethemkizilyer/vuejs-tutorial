<template>
  <div >
    <button @click="clean">Temizle</button>
  </div>
</template>

<script>
export default {
data() {
    return {
        nam:"BAKARLAR"
    }
},
methods: {
    clean(){
        this.$emit("clean",this.nam)
    }
},
}
</script>

<style>

</style>