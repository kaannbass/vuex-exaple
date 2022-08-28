<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarNav">
        <router-link v-for="nav in navigation" :to="nav.to" :key="nav.name" class="m-lg-2 btn btn-outline-secondary" active-class="">
          {{nav.name}}
        </router-link>
      </div>
    </div>
  </nav>
</template>


<script>
import router from "@/router";
export default {
  data: () => ({
    navigation: [
      {name: 'Home', to: '/', current: true},
      {name: 'Product List', to: '/product-list', current: false},
    ]
  })
}
</script>
<style scoped lang="scss">


</style>