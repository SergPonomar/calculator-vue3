<script setup lang="ts">
import {inject, ref} from 'vue'
import {isMobileKey} from '../utils/provide-keys'

const isMobile = inject(isMobileKey, ref<boolean>(false))
</script>

<template>
  <div
    class="separator"
    role="separator"
    :class="{'separator-mobile': isMobile}"
  />
</template>

<style scoped>
.separator {
  height: 2px;
  background-color: rgba(255, 255, 255, 0.35);
}

@media screen and (orientation:landscape) {
  .separator-mobile {
    margin-left: 15%;
  }
}
</style>