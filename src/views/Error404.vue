<template>
  <div class="text-center">
    <h1>It seems like you have been lost</h1>
    <h5>There's no page with the requested route</h5>
    <router-link class="btn btn-primary" :to="{ name: 'Todos' }" role="button"
      >Back to the home page
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
