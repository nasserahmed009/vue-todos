<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center mb-3">
          <i class="fas fa-chart-line mx-3"></i>
          {{ listName }}
        </h1>
      </div>
    </div>

    <div
      class="row mb-3 justify-content-md-center"
      v-if="filterTodos != 'done'"
    >
      <create-todo @on-new-todo="addTodo($event)" />
    </div>

    <div class="row justify-content-md-center">
      <div class="col-12 col-sm-10 col-lg-6">
        <ul class="list-group">
          <todo
            v-for="todo in filteredTodos"
            :key="todo.id"
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
    listName: String,
    // a prop that filter the todos list to "done" or "undone" or "all"
    filterTodos: {
      type: String,
      default: "all", // default value is to show all the todos
      validator: value => {
        // The value must match one of these strings
        return ["done", "undone", "all"].indexOf(value) !== -1;
      }
    }
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
  computed: {
    filteredTodos() {
      switch (this.filterTodos) {
        case "done":
          return this.todos.filter(todo => todo.completed);
        case "undone":
          return this.todos.filter(todo => !todo.completed);
        default:
          return this.todos;
      }
    }
  },
  methods: {
    addTodo(newTodo) {
      const id = Math.random()
        .toString(36)
        .substr(2, 9);

      this.todos.push({ id, description: newTodo, completed: false });
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
