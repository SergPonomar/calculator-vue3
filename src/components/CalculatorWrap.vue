<script setup lang="ts">
import {inject} from 'vue'
import {isMobileKey, mobHeightKey} from '../utils/provide-keys'

const isMobile = inject(isMobileKey)
const mobHeight = inject(mobHeightKey)
</script>

<template>
  <div 
    class="back"
    :class="{'back-mobile': isMobile}"
  >
    <div 
      class="calculator" 
      :class="{'calculator-mobile': isMobile}"
    >
      <div :class="{'displays-mobile': isMobile}">
        <slot name="displays" />
      </div>
      <div 
        class="buttons"
        :class="{'buttons-mobile': isMobile}"
      >
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.calculator {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 458px;
  height: 800px;
  margin: 0 0;
  padding: 0 2.4em;
  background: linear-gradient(155.23deg, #28518E 0%, #3A77D1 100%);
  box-shadow: 0 82px 158px rgba(0, 0, 0, 0.35),
    0 25px 48px rgba(0, 0, 0, 0.23), 
    0 10px 20px rgba(0, 0, 0, 0.18), 
    0 4px 7px rgba(0, 0, 0, 0.12);
  border-radius: 18px;
}
.back {
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 34px 0;
  padding: 31px 38px;
  border-radius: 18px;
}
.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  font-size: 1.8rem;
  font-weight: 500;
  text-align: center;
  column-gap: calc((100% - 16rem)/3);
  align-items: center;
  row-gap: 0.8rem;
  margin-top: 37px;
  margin-bottom: 44px;
}

@media only screen and (max-width: 800px) {
  .back {
    width: 100%;
    margin: 0;
  }
  .calculator {
    width: auto;
  }
}
@media only screen and (max-width: 600px) {
  .back {
    padding: 0;
  }
  .calculator {
    height: 680px;
  }
}
@media only screen and (max-height: 900px) {
  .calculator {
    height: 680px;
  }
}
@media only screen and (max-width: 400px) {
  .calculator {
    height: 520px;
  }
}
@media only screen and (max-height: 700px) {
  .calculator {
    height: 520px;
  }
}

.back-mobile {
  width: 100%;
  margin: 0;
  padding: 0;
  align-self: flex-start;
}
.calculator-mobile {
  width: auto;
  height: 100vh;
  height: v-bind(mobHeight);
}

@media screen and (orientation:portrait) {
  .calculator-mobile {
    width: auto;
  }
}
@media screen and (orientation:landscape) {
  .calculator-mobile {
    box-sizing: border-box;
    width: 100%;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: stretch;
  }
  .buttons-mobile, .displays-mobile {
    padding: 0;
    margin: 0;
    flex: 1;
  }
  .buttons-mobile {
    row-gap: 0;
  }
  .displays-mobile {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-self: center;
    min-height: calc(50 + 4em);
  }
}
</style>