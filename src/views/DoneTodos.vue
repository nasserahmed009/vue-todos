<template>
  <div>
    <todo-list
      listName="You have finished all of this .."
      filterTodos="done"
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
