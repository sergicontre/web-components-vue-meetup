<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld title="Web Components working in Your Vue.js App 🤯"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
body {
	margin: 0;
	/* Citibox color palette RGB */
	--citibox-party-rgb: 121, 66, 237;
	--citibox-octopus-rgb: 239, 69, 96;

	/* Citibox color palette */
	--citibox-party: rgb(var(--citibox-party-rgb));
	--citibox-octopus: rgb(var(--citibox-octopus-rgb));

	/* BBVA palete */
	--bbva-blue: #1973b8;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
	display: block;
	height: 100vh;
	overflow: scroll;
}
img {
	position: relative;
	height: 5em;
  z-index: 1;
}
</style>
