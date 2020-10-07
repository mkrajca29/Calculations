<template>
  <div>
    <input v-model="query" type="text" @keyup.enter="submit" />
    <button @click="submit">START</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: ""
    };
  },

  methods: {
    submit: function() {
      this.$root.$emit("data-out", this.query);
      this.$router.push("/calculation");
      this.$event.target.nextElementSibling.focus();
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  height: 24px;
  border-radius: 5px;
}
button {
  display: block;
  height: 35px;
  margin: 20px auto;
  background-color: rgb(48, 48, 221);
  color: white;
  font-size: 25px;
  border-radius: 5px;
}
</style>
