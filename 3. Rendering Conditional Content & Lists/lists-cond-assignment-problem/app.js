const app = Vue.createApp({
  data(){
    return{
      input: '',
      tasks: [],
      showList: true,
    }
  },
  computed: {
    buttonCaption(){
      return this.showList ? 'Hide List' : 'Show List'
    }
  },
  methods: {
    addTask(){
      console.log(this.input);
      this.tasks.push(this.input);
      console.log(this.tasks);
    },

    showListFunc(){
      this.showList = !this.showList
    }
  }
});

app.mount('#assignment')