<template>
   <div>
        <h2>{{ zaman }}</h2>
        <h2>{{ bakarlar }}</h2>
        <input type="text" v-model="name">
        <input type="text" v-model="sname">
        <!-- <p>{{ name }} {{ sname }}</p> -->
        <p>{{ namesSurname }}</p>
         <input type="number" v-model="number1"><br>
        <input type="number" v-model="number2"><br>
        <input type="number" v-model="total"><br>
  <!-- <slot></slot> -->
 </div>
</template>

<script>
export default {
props:["zaman","bakarlar"],
data() {
    return {
       name:"",
       sname:"" ,
       number1:0,
       number2:0,
       total:0,
    }
},
watch:{
    number1(newValue, oldValue){
        console.log('Sayılar1',oldValue,newValue)
        this.total=parseInt(this.number1) +parseInt(this.number2)
    },
    number2(newValue, oldValue){
        console.log('Sayılar2',oldValue,newValue)
        this.total=parseInt(this.number1) +parseInt(this.number2)
    },
    },

computed:{
    namesSurname(){
        return this.name + " " + this.sname
    }
}
}
</script>

<style>

</style>