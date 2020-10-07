<template>
  <div class="calculation">
    <div class="area">
      <NumBlock v-for="item in items" :key="item.id" />
    </div>
  </div>
</template>

<script>
import NumBlock from "@/components/NumBlock.vue";
export default {
  components: {
    NumBlock
  },
  data() {
    return {
      items: [],
      max: 6
    };
  },
  methods: {
    setArray() {
      for (let i = 0; i < this.max; i++) {
        this.items.push("x");
      }
    }
  },
  beforeMount() {
    this.$root.$on("data-out", data => (this.max = data));
  },
  mounted() {
    this.setArray();
  }
};
</script>

<style lang="scss" scoped>
.area {
  display: flex;
  padding: 5px 0;
  width: 660px;
  font-size: 20px;
  flex-wrap: wrap;
  justify-content: center;
  border: 1px solid black;
  border-top: 0;
}
</style>
