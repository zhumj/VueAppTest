<template>
  <div>
    <van-nav-bar
      title="字体"
      left-text="返回"
      :border="false"
      left-arrow
      fixed
      placeholder
      @click-left="onNavLeftClick"
    />
    <van-radio-group v-model="mAppStore.$state.font">
      <div class="font_0">
        <van-cell-group inset>
          <van-cell title="默认" title-class="cell_title" label="你好 Hello 14px" label-class="cell_label" clickable @click="mAppStore.changeFont('Segoe UI')">
            <template #right-icon>
              <van-radio name="Segoe UI" />
            </template>
          </van-cell>
        </van-cell-group>
      </div>
      <div class="font_1">
        <van-cell-group inset>
          <van-cell title="等宽体" title-class="cell_title" label="你好 Hello 14px" label-class="cell_label" clickable @click="mAppStore.changeFont('Courier New')">
            <template #right-icon>
              <van-radio name="Courier New" />
            </template>
          </van-cell>
        </van-cell-group>
      </div>
      <div class="font_2">
        <van-cell-group inset>
          <van-cell title="糯米圆" title-class="cell_title" label="你好 Hello 14px" label-class="cell_label" clickable @click="mAppStore.changeFont('NMY')">
            <template #right-icon>
              <van-radio name="NMY" />
            </template>
          </van-cell>
        </van-cell-group>
      </div>
      <div class="font_3">
        <van-cell-group inset>
          <van-cell title="时尚中黑" title-class="cell_title" label="你好 Hello 14px" label-class="cell_label" clickable @click="mAppStore.changeFont('SSZH')">
            <template #right-icon>
              <van-radio name="SSZH" />
            </template>
          </van-cell>
        </van-cell-group>
      </div>
      <div class="font_4">
        <van-cell-group inset>
          <van-cell title="华文行楷" title-class="cell_title" label="你好 Hello 14px" label-class="cell_label" clickable @click="mAppStore.changeFont('STHangKai')">
            <template #right-icon>
              <van-radio name="STHangKai" />
            </template>
          </van-cell>
        </van-cell-group>
      </div>
    </van-radio-group>
    <div style="height: 18px"></div>
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
@import '@/fonts/fonts.css';

.font_0 {
  padding-top: 18px;
  font-family: 'Segoe UI';
}

.font_1 {
  padding-top: 18px;
  font-family: 'Courier New';
}

.font_2 {
  padding-top: 18px;
  font-family: 'NMY';
}

.font_3 {
  padding-top: 18px;
  font-family: 'SSZH';
}

.font_4 {
  padding-top: 18px;
  font-family: 'STHangKai';
}

.cell_title {
  text-align: left;
  font-size: 16px;
}

.cell_label {
  font-size: 14px;
}
</style>
