<template>
  <div id="app" class="font_style" :class="{ grey_mode: mAppStore.$state.isGrayMode }">
    <van-config-provider :theme-vars="themeVars">
      <router-view />
    </van-config-provider>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { appStore } from '@/store'

const mAppStore = appStore()
const font = ref(mAppStore.$state.font)

watch(() => mAppStore.$state.font, (val, _old) => {
  font.value = val
})
// //用 watch 替代下面的监听方法
// mAppStore.$subscribe(
//   (mutation, state) => {
//     const events = mutation.events as any
//     if (events.key === 'font') {
//       font.value = state.font
//     }
//   },
//   { detached: false }
// )

const themeVars = {
  navBarBackgroundColor: '#1989fa',
  navBarTitleFontSize: '18px',
  navBarTitleTextColor: '#fff',
  navBarIconColor: '#fff',
  navBarTextColor: '#fff',
};

</script>

<style scoped>
@import '@/fonts/fonts.css';

.font_style {
  font-family: v-bind(font);
}

.grey_mode {
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
  filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
}
</style>
