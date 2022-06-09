<script setup lang="ts">
import {inject, ref} from 'vue'
import {dispExpKey} from '../utils/provide-keys'

const disp = inject(dispExpKey, ref<string>(""))
</script>

<template>
  <div
    aria-label="expression"
    class="display-exp"
  >
    <span>{{ disp }}</span>
  </div>
</template>

<style scoped>
.display-exp {
  text-align: right;
  font-size: max(1.2rem, 20px);
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 28px;
}
</style>