<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import 'opensans-npm-webfont'

export default {
  name: 'App'
}
</script>

<style lang="scss">
  #app {
    font-family: 'Open Sans', 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 20px;
  }
</style>
