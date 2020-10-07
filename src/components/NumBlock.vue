<template>
  <div class="blok">
    <p>{{ first }} + {{ second }} =</p>
    <input
      :class="{ correctClass: classGreen, wrongClass: classRed }"
      v-model="val"
      type="text"
      class="result"
      @keyup.enter="validation"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: "",
      first: 2,
      second: 6,
      calcRes: "",
      classGreen: false,
      classRed: false
    };
  },
  methods: {
    randomCalc() {
      this.first = Math.floor(Math.random() * 10);
      this.second = Math.floor(Math.random() * 10);
      this.calcRes = this.first + this.second;
      /* console.log(`${this.first} + ${this.second} = ${this.calcRes}`); */
    },
    validation() {
      if (this.val == this.calcRes) {
        console.log("correct");
        this.classGreen = true;
        this.classRed = false;
      } else {
        console.log("false");
        this.classRed = true;
        this.classGreen = false;
      }
    }
  },
  beforeMount() {
    this.randomCalc();
  }
};
</script>

<style lang="scss" scoped>
.blok {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 205px;
  height: 60px;
  margin: 5px;
  background-color: yellow;
  border: 1px solid black;
}
.result {
  margin: 4px;
  width: 60px;
  height: 24px;
  text-align: center;
}
.correctClass {
  background-color: green;
}
.wrongClass {
  background-color: red;
}
</style>
