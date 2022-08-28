<template>
  <div class="container d-flex align-items-stretch flex-wrap justify-content-center">
    <ProductCard v-for="user in users" :key="user.id" :user="user"/>

  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";
import {mapState} from 'vuex'
export default {
  components: {
    ProductCard
  },
  computed:{
    ...mapState({
      users:'users'
    })
  },
  mounted() {
    this.$store.dispatch('getUser')
  }


}
</script>

<style>

</style>