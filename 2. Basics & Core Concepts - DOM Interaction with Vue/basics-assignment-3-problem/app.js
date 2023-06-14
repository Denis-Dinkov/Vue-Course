const app = Vue.createApp({
  data() {
    return {
      sum: 0,
    };
  },
  watch: {
    sum() {
      that = this;
      setTimeout(() => {
        that.sum = 0;
      }, 5000);
    },
  },
  computed: {
    result() {
      if (this.sum < 37) {
        return "Not there yet!";
      } else if (this.sum > 37) {
        return "Too much!";
      } else {
        return this.sum;
      }
    },
  },
  methods: {
    addFive() {
      this.sum += 5;
      console.log(this.sum);
    },
    addOne() {
      this.sum++;
    },
  },
});

app.mount("#assignment");
