<template>
  <li>
    <h2>{{ name }} {{ this.favorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ email }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  //['name','phoneNumber','daDa' ],
  props: {
    name: String,
    phoneNumber: String,
    email: String,
    isFavorite: Boolean,
  },
  data() {
    return {
      detailsAreVisible: false,
      favorite: this.isFavorite,
    };
  },
  methods: {
    toggleFavorite() {
      this.favorite = !this.favorite;
    },
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>
