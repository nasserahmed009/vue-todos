<template>
  <div>
    <todo-list
      listName="All of your tasks are listed here .."
      filterTodos="all"
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
