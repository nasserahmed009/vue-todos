<template>
  <div class="container">
    <div class="row">
      <div class="col-12 py-5">
        <h1>{{ listName }}</h1>
      </div>
    </div>
    <div class="row mb-3">
      <create-todo @on-new-todo="addTodo($event)" />
    </div>
    <div class="row">
      <div class="col-12 col-sm-10 col-lg-6">
        <ul class="list-group">
          <todo
            v-for="(todo, index) in todos"
            :key="index"
            :description="todo.description"
            :completed="todo.completed"
            @on-toggle="toggleTodo(todo)"
            @on-delete="deleteTodo(todo)"
            @on-edit="editTodo(todo, $event)"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Todo from "./Todo.vue";
import CreateTodo from "./CreateTodo.vue";

export default {
  props: {
    listName: String
  },
  mounted() {
    // check if there's some todos in the localStorage and add them to the state
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) this.todos = todos;
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    addTodo(newTodo) {
      this.todos.push({ description: newTodo, completed: false });
      this.updateLocalStorage();
    },
    toggleTodo(todo) {
      todo.completed = !todo.completed;
      this.updateLocalStorage();
    },
    deleteTodo(deletedTodo) {
      this.todos = this.todos.filter(todo => todo !== deletedTodo);
      this.updateLocalStorage();
    },
    editTodo(todo, newTodoDescription) {
      todo.description = newTodoDescription;
      this.updateLocalStorage();
    },
    // updating the local storage with the current state
    updateLocalStorage() {
      const todos = JSON.stringify(this.todos);
      localStorage.setItem("todos", todos);
    }
  },
  components: { Todo, CreateTodo }
};
</script>

<style scoped lang="scss"></style>
