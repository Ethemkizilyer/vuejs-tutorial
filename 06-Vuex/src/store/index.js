import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      { id: 1, todom: "Ders çalış", done: false },
      { id: 2, todom: "Film izle", done: true },
    ],
  },
  getters: {
    todoTotalCount(state) {
      return state.todos.length;
    },
    todoDoneCount(state) {
      return state.todos.filter((x) => x.done == true).length;
    },
    todoNotDoneCount(state) {
      return state.todos.filter((x) => x.done == false).length;
    },
  },
  mutations: {
    addTodo(state, { todo, done }) {
      let tod = {
        id: Math.floor(Math.random() * 100000000),
        todom: todo,
        done: done,
      };
      state.todos.push(tod);
    },
    changeDone(state,  id ) {
      state.todos = state.todos.map(
        (x) => x.id == id ? { ...x, done: !x.done } : x
      );
    },
  },
  actions: {
    addTodoaction(context, newTodo) {
      console.log(context);
      context.commit("addTodo", newTodo);
    },
    changeAction(context, id) {
      console.log(context);
      context.commit("changeDone", id);
    },
  },
  modules: {},
});
