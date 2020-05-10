<template>
  <div>
    <todo-list listName="Things I have to do .."></todo-list>
  </div>
</template>

<script>
export default {
  components: {
    TodoList: () => import("@/components/TodoList")
  }
};
</script>
