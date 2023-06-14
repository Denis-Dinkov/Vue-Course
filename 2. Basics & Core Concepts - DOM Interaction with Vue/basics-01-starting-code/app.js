const app = Vue.createApp({
  data() {
    return{
      courseGoalA: 'Finish the course and learn Vue',
      courseGoalB: 'Master Vue',
      vueLink: 'https://vuejs.org/'
    }
  },
  methods: {
     outPutGoal(){
       num = Math.random();
      if(num > 0.5){
        return this.courseGoalA
      } 
      return this.courseGoalB
     }
  }
})

app.mount('#user-goal')