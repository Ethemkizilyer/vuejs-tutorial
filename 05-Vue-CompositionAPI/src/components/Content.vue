<template>
    <!-- <div>
  <div v-for="content in contents" :key="content.id">
{{ content.title }}
  </div>
  <div v-for="post in posts" :key="post.id">
{{ post.title }}
  </div>
  <div v-if="err">{{ err }}</div>
  </div> -->
    <div>
  <div v-for="content in contents" :key="content.id">
{{ content.title }}
  </div>
  <div v-for="post in gets" :key="post.id">
{{ post.title }}
  </div>
  <div v-if="errr">{{ errr }}</div>
  </div>
</template>

<script>
import { ref } from 'vue'
import getContentsFetch from "../composables/getContentsFetch"
import { useRoute, useRouter } from 'vue-router'


export default {
props:["contents"],
setup(props){
    const route=useRoute()
    const router=useRouter()

    console.log(route)
    console.log(router)


    console.log(props.contents)
    const posts=ref([])
    const err=ref(null)
    const getPosts=async()=>{
       try {
         let data =await fetch("https://jsonplaceholder.typicode.com/posts")
        posts.value= await data.json()

        if(!data.ok){
            throw new Error("Verilere Erişilemedi!")
        }
       } catch (error) {
        err.value=error.message
       }
    }
    getPosts()
    

    const { gets, errr, getGets }= getContentsFetch()
    getGets()
    return {gets, errr, posts,err}
}
}
</script>

<style>

</style>