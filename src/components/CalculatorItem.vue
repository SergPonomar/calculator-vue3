<script setup lang="ts">
import {onBeforeMount, provide, ref, unref} from 'vue'
import inputHandler from '../utils/input-handler'
import mobileCheck from '../utils/mobile-check'
import {dispExpKey, dispResKey, isMobileKey, mobHeightKey} from '../utils/provide-keys'
import ButtonsBlock from './ButtonsBlock.vue'
import CalculatorWrap from './CalculatorWrap.vue'
import DisplayExpression from './DisplayExpression.vue'
import DisplayResult from './DisplayResult.vue'
import SeparatorItem from './SeparatorItem.vue'

const dispExp = ref<string>("")
const dispRes = ref<string>("0")
const isMobile = ref<boolean>(false)
const mobHeight = ref<string>(window.innerHeight + 'px')

provide(dispExpKey, dispExp)
provide(dispResKey, dispRes)
provide(isMobileKey, isMobile)
provide(mobHeightKey, mobHeight)

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
  [dispExp.value, dispRes.value] = inputHandler(
    key, unref(dispExp), unref(dispRes))
}
</script>

<template>
  <CalculatorWrap>
    <template #displays>
      <DisplayExpression />
      <DisplayResult />
      <SeparatorItem />
    </template>
    <template #buttons>
      <ButtonsBlock />
    </template>
  </CalculatorWrap>
</template>

<style>
</style>