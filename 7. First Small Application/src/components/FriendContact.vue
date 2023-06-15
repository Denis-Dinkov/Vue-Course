<template>
  <li>
    <h2>{{ name }} {{favorite ? '(Favorite)' : ''}}</h2>
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
    id: String,
    name: String,
    phoneNumber: String,
    email: String,
    favorite: Boolean,
  },
  emits: ['toggle-favorite'],
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id,this.favorite)
    },
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>
