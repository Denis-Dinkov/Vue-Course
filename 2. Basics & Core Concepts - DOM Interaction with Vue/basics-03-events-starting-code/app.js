const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    changeName(e) {
      this.name = e.currentTarget.value;
    },
    onSumbit(){
    
    }
  },
});

app.mount("#events");
