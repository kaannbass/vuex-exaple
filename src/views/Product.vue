<template>
  <div class="container">
    <div class="row py-2">
      <div class="col-4">
        <img src="https://via.placeholder.com/150x100" class="w-100" alt="">
      </div>
      <div class="col-8 align-items-stretch flex-wrap ">
        <h1>Product title</h1>
        <h3>$34</h3>
        <div class="">
          <input type="text" class="text-center col-1"/>
          <button class="btn btn-primary mb-1 ms-lg-2">Add to Cart</button>
        </div>
        <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad, amet animi doloribus
          eligendi est facere harum iste iusto laboriosam libero, nihil pariatur quae quibusdam quo ratione sequi
          veritatis vero.</p>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  props: ['id'],

}
</script>