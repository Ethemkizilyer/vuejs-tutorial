<template>
  <div class="home">
<!-- <List :todos="todos" /> -->
<List/>
<AddTodo />
<todoCount />
  </div>
</template>

<script>
import { ref,onUpdated } from 'vue';
import List from '../components/List';
import AddTodo from '../components/AddTodo';
import todoCount from '../components/todoCount';
import { useRoute } from 'vue-router'


export default {
  name: 'Home',
  components: {List,AddTodo ,todoCount},
  setup() {
    // const todos=ref([
    //   {id:1,todo:"Ders çalış"},
    //   {id:2,todo:"Film izle"},
    // ])
    // const route=useRoute()
    // onUpdated(()=>{
    //   console.log(route.query.data)
    //   todos.value.push({id:Math.floor(Math.random() * 100000000),todo:route.query.data})
    // })

    // return {todos}
  }
}
</script>
