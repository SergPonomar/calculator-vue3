<script setup lang="ts">
import CalculatorItem from './components/CalculatorItem.vue'
</script>

<template>
  <CalculatorItem />
</template>

<style>
html {
  font-size: 20px;
}
body {
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Geometria, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(122.76deg, #FFA2A2 4.09%, #FF7B7B 91.04%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height:100vh;
  color: white;
}

@media only screen and (max-width: 600px) {
  html {
    font-size: 16px;
  }
}
@media only screen and (max-height: 900px) {
  html {
    font-size: 16px;
  }
}
@media only screen and (max-width: 400px) {
  html {
    font-size: 12px;
  }
}
@media only screen and (max-height: 700px) {
  html {
    font-size: 12px;
  }
}
</style>