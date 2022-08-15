<template>
  <div>
    <van-nav-bar
      title="卡片翻转"
      left-text="返回"
      :border="false"
      left-arrow
      fixed
      placeholder
      @click-left="onNavLeftClick"
    />
    <div class="container">
      <van-cell-group class="front" :class="isRegister ? 'container-front' : ''" inset>
        <van-cell title="我是正面，点击试试" clickable @click="isRegister = true" />
      </van-cell-group>
      <van-cell-group class="reverse" :class="isRegister ? 'container-reverse' : ''" inset>
        <van-cell title="我是反面，点击试试" clickable @click="isRegister = false" />
      </van-cell-group>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import router from "@/router";

const isRegister = ref(false)

const onNavLeftClick = () => {
  router.back()
}
</script>

<style>
.container {
  width: 100%;
  margin-top: 46px;
  position: relative;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  align-items: center;
}

.front {
  height: auto;
  text-align: center;
  position: absolute;
  backface-visibility: hidden;
  transition: 1.5s;
}

.reverse {
  width: 100%;
  height: auto;
  text-align: center;
  position: absolute;
  transform: rotateY(-180deg);
  backface-visibility: hidden;
  transition: 1.5s;
}

.container .container-front {
  transform: rotateY(180deg);
}
.container .container-reverse {
  transform: rotateY(0deg);
}
</style>