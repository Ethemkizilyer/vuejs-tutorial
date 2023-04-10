<template>
  <div>
    <p>Yapılanlar: {{  todoDoneCount }}</p>
    <p>Yapılmayanlar: {{  todoNotDoneCount }}</p>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
setup() {
    const store=useStore()
    const todoDoneCount=computed(()=>{
        return store.getters.todoDoneCount
    })
    const todoNotDoneCount=computed(()=>{
        return store.getters.todoNotDoneCount
    })

    return {todoNotDoneCount,todoDoneCount}
}
}
</script>

<style>

</style>