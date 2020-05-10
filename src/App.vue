<template>
  <div>
    <navbar />
    <todo-list list-name="My to-dos" />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    TodoList: () => import("@/components/TodoList.vue"),
    Navbar: () => import("@/components/Navbar.vue")
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
