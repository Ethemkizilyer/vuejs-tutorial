<template>
  <form @submit.prevent="addTodo">
    <input type="text" placeholder="Todo ekle" v-model="todo">
    <button>Ekle</button>
  </form>
</template>

<script>
// import {useRouter} from "vue-router"
import {ref} from "vue"
import { useStore } from 'vuex'
export default {
setup() {
    // const router =useRouter()
    // const todo = ref(null)
    // const addTodo = () =>{
    //     router.push({path:"/",query:{data:todo.value}})
    //     todo.value=""
    // }

    const store=useStore()
    const todo=ref("")
    const addTodo=()=>{
        const newTodo={
            todo:todo.value,
            done:true
        }
        store.dispatch("addTodoaction",newTodo)
        todo.value=""
    }
    return {addTodo,todo}
}
}
</script>

<style>

</style>