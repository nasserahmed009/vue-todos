<template>
  <div>
    <navbar />
    <div class="container py-5">
      <router-view> </router-view>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Navbar: () => import("@/components/Navbar")
  }
};
</script>
