<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container">
      <!-- brand logo -->
      <div class="mx-auto order-0">
        <router-link :to="{ name: 'Todos' }" class="navbar-brand mx-auto">
          <i class="fas fa-check-circle"></i>
          Do it
        </router-link>
      </div>

      <!-- navbar toogle btn -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target=".dual-collapse2"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- navbar links -->
      <div
        class="navbar-links navbar-collapse collapse w-100 order-3 dual-collapse2"
      >
        <ul class="navbar-nav ml-auto">
          <li class="nav-item mt-1">
            <router-link :to="{ name: 'Todos' }" class="nav-link p-2">
              All Todos
            </router-link>
          </li>
          <li class="nav-item mt-1">
            <router-link :to="{ name: 'UndoneTodos' }" class="nav-link p-2">
              Undone Todos
            </router-link>
          </li>
          <li class="nav-item mt-1">
            <router-link :to="{ name: 'DoneTodos' }" class="nav-link p-2">
              Done Todos
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  // data property is required for jest to add the component to test coverage
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.navbar-links .router-link-exact-active {
  color: #fff !important;
  background: #2196f3;
  border-radius: 5px;
  transition: background 0.2s, color 0.2s;
}
</style>
