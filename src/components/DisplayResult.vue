<script setup lang="ts">
import {inject, ref} from 'vue'
import {dispResKey} from '../utils/provide-keys'

const disp = inject(dispResKey, ref<string>("0"))
</script>

<template>
  <div 
    aria-label="result"
    class="display-res"
  >
    <span>{{ disp }}</span>
  </div>
</template>

<style scoped>
.display-res {
  text-align: right;
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 18px;
}
</style>