<script setup lang="ts">
import {ref, onBeforeMount, unref} from 'vue'
import {inputHandler} from '../utils/input-handler'
import mobileCheck from '../utils/mobile-check'

const controls: string[] = ['C','(',')','/',
                  '7','8','9','×',
                  '4','5','6','-',
                  '1','2','3','+',
                  '00','0',',','=']

const disp1 = ref<string>("")
const disp2 = ref<string>("0")
const isMobile = ref<boolean>(false)
const mobHeight = ref<string>(window.innerHeight + 'px')

onBeforeMount(() => {
  isMobile.value = mobileCheck()
  window.addEventListener('keydown', pressHandler)
  if (isMobile.value) {
    window.addEventListener('resize', () => { 
      mobHeight.value = window.innerHeight + 'px'
    })
  }
})

function pressHandler(e: KeyboardEvent): void {
  let key = ''
  switch (e.key) {
    case '(':
    case ')':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '0':
    case '-':
    case '+':
    case '/':
    case ',':
      key = e.key
      break
    case 'c':
      key = 'C'
      break
    case '*':
      key = '×'
      break
    case 'Enter':
      key = '='
      break
  }
  [disp1.value, disp2.value] = inputHandler(
    key, unref(disp1), unref(disp2))
}

function clickHandler(e: Event): void {
  [disp1.value, disp2.value] = inputHandler(
    (e.target as HTMLAnchorElement).text, unref(disp1), unref(disp2))
}

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
        <div class="display1">
          <span>{{ disp1 }}</span>
        </div>
        <div class="display2">
          <span>{{ disp2 }}</span>
        </div>
        <div
          class="separator"
          :class="{'separator-mobile': isMobile}"
        />
      </div>
      <div 
        class="buttons"
        :class="{'buttons-mobile': isMobile}"
      >
        <a 
          v-for="control in controls"
          :key="control"
          class="button"
          @click="clickHandler" 
        >{{ control }}</a>
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
.display1, .display2 {
  text-align: right;
} 
.display1 {
  font-size: max(1.2rem, 20px);
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 28px;
}
.display2 {
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 18px;
}
.separator {
  height: 2px;
  background-color: rgba(255, 255, 255, 0.35);
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
.button {
  all: unset;
  height: 4rem;
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  transition: background 0.2s;
}
@media (hover: hover) and (pointer: fine) {
  .button:hover {
    background-color: rgba(255, 255, 255, 0.12);
  }
}
.button:last-child {
  color: #2B589A;
  background-color: white;
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
  .separator-mobile {
    margin-left: 15%;
  }
}
</style>