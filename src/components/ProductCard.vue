<template>
  <div class="col-3 mt-3 m-lg-2">
    <div class="card h-100 text-left">
      <img src="https://via.placeholder.com/150x100" alt="">
      <div class="card-body">
        <h5 class="card-title">
          <router-link
              :to="{name:'Product',params:{id: user.id}}">
            {{user.name}}
          </router-link>
        </h5>
        <strong>{{user.email}}</strong>
        <p class="card-text">{{user.website}}</p>
      </div>
      <div class="text-end px-3 pb-3">
        <button class="btn btn-secondary rounded-2">Add to card</button>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "ProductList",
  props: ['user'],

}
</script>

<style scoped>

</style>