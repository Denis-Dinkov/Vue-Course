const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  watch: {
    counter(value) {
      if(value > 50){
        this.counter = 0
      } 
    }
  },
  computed: {
    fullName() {
      if (this.name == "") {
        return "";
      }
      return this.name + " " + "dinkov";
    },
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
    clearName() {
      this.name = "";
    },
    onSumbit() {},
  },
});

app.mount("#events");
