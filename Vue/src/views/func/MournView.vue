<template>
  <div>
    <van-nav-bar
      title="灰度悼念"
      left-text="返回"
      :border="false"
      left-arrow
      fixed
      placeholder
      @click-left="onNavLeftClick"
    />
    <van-cell-group inset style="margin-top: 24px;">
      <van-cell title="悼念模式" title-class="cell_title" center>
        <template #right-icon>
          <van-switch v-model="mAppStore.$state.isGrayMode" size="24" />
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script lang="ts" setup>
import router from "@/router";
import { appStore } from "@/store";

const mAppStore = appStore()

const onNavLeftClick = () => {
  router.back()
}
</script>

<style>
.cell_title {
  text-align: left;
  font-size: 16px;
}
</style>