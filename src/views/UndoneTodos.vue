<template>
  <div>
    <todo-list
      listName="Things you have to do .."
      filterTodos="undone"
    ></todo-list>
  </div>
</template>

<script>
export default {
  components: {
    TodoList: () => import("@/components/TodoList")
  }
};
</script>
