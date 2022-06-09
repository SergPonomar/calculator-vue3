<script setup lang="ts">
import {inject, ref, unref} from 'vue'
import {dispExpKey, dispResKey} from '../utils/provide-keys'
import inputHandler from '../utils/input-handler'

const dispExp = inject(dispExpKey, ref<string>(""))
const dispRes = inject(dispResKey, ref<string>("0"))

const controls: string[] = ['C','√','%','/',
                  '7','8','9','×',
                  '4','5','6','-',
                  '1','2','3','+',
                  '00','0',',','=']

function clickHandler(e: Event): void {
  [dispExp.value, dispRes.value] = inputHandler(
    (e.target as HTMLAnchorElement).text, unref(dispExp), unref(dispRes))
}
</script>

<template>
  <a 
    v-for="control in controls"
    :key="control"
    class="button"
    role="button"
    :name="control"
    @click="clickHandler" 
  >{{ control }}</a>
</template>

<style scoped>
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
</style>