<template>
  <div :class="{ grey_mode: mAppStore.$state.isGrayMode }">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { appStore } from '@/store'
const mAppStore = appStore()
</script>

<style scoped>
.grey_mode {
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
  filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
}
</style>
