const app = Vue.createApp({
  data(){
    return{

    }
  }
})

app.component('friend-contact',{
  template:`<li>
  <h2>{{friend.name}}</h2>
  <button @click="showBtn">{{isShownBtn ? "Hide" : "Show"}}</button>
  <ul v-if="isShownBtn">
    <li><strong>Phone:</strong>{{friend.number}}</li>
    <li><strong>Email:</strong>{{friend.email}}</li>
  </ul>
</li>`,
data(){
  return{
    isShownBtn: false,
    friend: {
      id: 'jack',
      name: 'Jack Rusel',
      number: '12312313',
      email: '1232131313'

    }
  }
},

methods: {
  showBtn(){
    this.isShownBtn = !this.isShownBtn
  }
}
})

app.mount('#app')