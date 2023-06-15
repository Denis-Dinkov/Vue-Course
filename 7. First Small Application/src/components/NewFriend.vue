<template>
  <form @submit.prevent='submitData'>
    <div>
      <label>Name</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label>Contact</label>
      <input type="tel" v-model="enteredPhone" />
    </div>
    <div>
      <label>Email</label>
      <input type="email" v-model="enteretEmail" />
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteretEmail: "",
    };
  },
  methods: {
    submitData(){
      this.$emit('add-contact',this.enteredName,this.enteredPhone,this.enteretEmail)
    }
  },
};
</script>
