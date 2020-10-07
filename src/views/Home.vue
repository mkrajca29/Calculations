<template>
  <div class="home">
    <h1>NoC</h1>
    <InputForm />
  </div>
</template>

<script>
import InputForm from "@/components/InputForm.vue";
export default {
  components: {
    InputForm
  },
  data() {
    return {
      newData: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.home {
  padding: 30px;
  border: 1px solid black;
  border-top: 0;
  margin: auto;
  width: 600px;
}
</style>
