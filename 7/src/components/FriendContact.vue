<template>
  <h2>{{ friends.name }}</h2>
  <button @click="showDetails">Show more</button>
  <ul v-if="areVisible">
    <li><strong>Phone:</strong> {{ friends.phone }}</li>
    <li><strong>Email</strong>{{ friends.email }}</li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      areVisible: false,
      friends: 
        {
          id: "gosho",
          name: "Goshko",
          phone: 112331,
          email: "goshko@abv.bg",
        },
    };
  },
  methods: {
    showDetails(){
      this.areVisible = !this.areVisible;
    },
  }
};
</script>
