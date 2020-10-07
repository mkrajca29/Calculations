<template>
  <div id="nav">
    <router-link to="/">HOME</router-link>
    <router-link to="/calculation">CALCULATION</router-link>
  </div>
</template>

<style lang="scss" scoped>
#nav {
  padding: 30px;
  border: 1px solid black;
  font-size: 24px;
  display: inline-block;
  width: 600px;

  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 20px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
