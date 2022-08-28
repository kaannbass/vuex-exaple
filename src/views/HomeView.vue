<template>
  <div class="home">
    <h1>Home</h1>
    <div class="" v-for="user in users" :key="user.id">
      {{user.address.city}}
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: 'HomeView',
  data: () => ({
    users: [],
  }),
  components: {},
  methods: {
    getuser() {
      axios.get('https://jsonplaceholder.typicode.com/users')
          .then(resp => {
            this.users = resp.data;
            console.log(this.users);
          });
    }
  },
  mounted() {
    this.getuser()
  }
}
</script>
