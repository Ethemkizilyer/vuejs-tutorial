<!-- <template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">{{ todo.todo }}</li>
  </ul>
</template>
<script>
export default {
    props:["todos"]
}
</script>
<style>
</style> -->
<template>
<ul>
    <li v-for="todo in todos" :key="todo.id" @click="()=>change(todo.id)">{{ todo.todom }} </li>
</ul>
</template>
<script>
import { computed } from 'vue';
import { useStore } from 'vuex';


export default {
setup() {
    const store=useStore()
    const change =(id)=>{
store.dispatch("changeAction",id)
    }
    const todos= computed(()=>{
        return store.state.todos
    })
    console.log(todos)
    return {todos,change}
}
}
</script>
<style>
</style>