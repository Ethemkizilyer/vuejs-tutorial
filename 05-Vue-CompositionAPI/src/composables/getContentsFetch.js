import { ref } from "vue";

const getContentsFetch=()=>{
    const gets = ref([]);
    const errr = ref(null);
    const getGets = async () => {
      try {
        let data = await fetch("https://jsonplaceholder.typicode.com/posts");
        gets.value = await data.json();

        if (!data.ok) {
          throw new Error("Verilere Erişilemedi!");
        }
      } catch (error) {
        errr.value = error.message;
      }
    };
    return { gets, errr, getGets };
}
export default getContentsFetch;