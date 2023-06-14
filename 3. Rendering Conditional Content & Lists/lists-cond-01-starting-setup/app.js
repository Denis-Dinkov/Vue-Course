const app = Vue.createApp({
  data() {
    return { 
      enteredValue: '',
      goals: [] };
  },
  methods: {
    addGoal(){
      console.log(this.enteredValue);
      this.goals.push(this.enteredValue);
    },
    removeItem(index){
      this.goals.splice(index,1)
    }
  }
});

app.mount('#user-goals');
