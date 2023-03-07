<template>
  <form @submit.prevent="topluSubmit">
    <input type="text" v-model="text" />
    <p>{{ text }}</p>
    <button @click="gönder">Gönder</button>
    <select v-model="framework">
      <option value="">Bir öğe seçin</option>
      <option>Vue</option>
      <option>React</option>
      <option>Svelte</option>
    </select>
    <p>{{ framework }}</p>
    <hr />

    <label for="checkbox1">Onay</label>
    <input type="checkbox" id="checkbox1" v-model="checked" />
    <p>Sonuç: {{ checked ? "Onaylandı" : "Onaylanmadı" }}</p>
    <div>
      <label for="Vue">Vue</label>
      <input type="checkbox" id="Vue" value="Vue" v-model="frameworks" />
    </div>
    <div>
      <label for="React">React</label>
      <input type="checkbox" id="React" value="React" v-model="frameworks" />
    </div>
    <div>
      <label for="Svelte">Svelte</label>
      <input type="checkbox" id="Svelte" value="Svelte" v-model="frameworks" />
    </div>
    <p>Seçilen Frameworkler: {{ frameworks }}</p>
    <hr>
    <h3>Öğrenciler</h3>
    <input type="text" v-model="student" @keyup.alt="addStudent" name="" id="">
    <div v-for="student in students" :key="student">
        <span @click="()=>filtre(student)">{{ student }}</span>
    </div>
    <button >TOPLU GÖNDER</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      text: "deneme",
      framework: "",
      checked: false,
      frameworks: [],
      student:"",
      students:[],
    };
  },
  methods: {
    gönder(e) {
      e.preventDefault();
      this.$emit("gönder", this.text);
      this.text = "";
    },
    addStudent(e){
if(e.key=="," && this.student){
    if(!this.students.includes(this.student)){
        this.students.push(this.student)
    }
    this.student=""
}
    },
    filtre(item){
        this.students=this.students.filter((ite)=>ite != item)
    },
    topluSubmit(){
        console.log("Naber")
    }
  },
};
</script>

<style></style>
