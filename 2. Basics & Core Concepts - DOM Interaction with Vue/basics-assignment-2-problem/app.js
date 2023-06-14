const app = Vue.createApp({
  data() {
    return {
      output: "",
      confirmText: "",
    };
  },

  methods: {
    showAlert() {
      alert("Alert");
    },
    registerInput(e) {
      this.output = e.currentTarget.value;
    },
    confirmInput() {
      this.confirmText = this.output;
    },
  },
});

app.mount("#assignment");
