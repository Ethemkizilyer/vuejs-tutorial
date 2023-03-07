<template>
  <div>
    <Title :asd="asd" :ne="ne" />
    <h3>Selam Sana</h3>
    <Button @clean="cleanInput" /> <br />
    <h3>{{ message ? bakar : "" }}</h3>
    <input type="text" ref="inputText" />
    <Form @gönder="gönder" />
    <p>{{ bakmaz }}</p>
  </div>
</template>

<script>
import Button from "./components/Button.vue";
import Form from "./components/Form.vue";
import Title from "./components/Title.vue";

export default {
  name: "App",
  data() {
    return {
      asd: "ethem",
      ne: "bakıyor musun",
      message: false,
      bakar: "",
      bakmaz: "",
    };
  },
  components: {
    Title,
    Button,
    Form,
  },
  methods: {
    cleanInput(nam) {
      this.message = !this.message;
      this.$refs.inputText.value = "";
      this.bakar = nam;
    },
    gönder(text) {
      this.bakmaz = text;
      text = "";
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
