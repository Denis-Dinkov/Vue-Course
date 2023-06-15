<template>
  <h2>My friends</h2>
  <ul>
    <friend-list></friend-list>
    <friend-list></friend-list>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "gosho",
          name: "Goshko",
          phone: 112331,
          email: "goshko@abv.bg",
        },
        {
          id: "mariq",
          name: "Mariika",
          phone: 112221,
          email: "mariika@abv.bg",
        },
      ],
    };
  },
};
</script>
