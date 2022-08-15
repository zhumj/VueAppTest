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
        <van-field label="账号" label-width="3rem" label-class="field_label" :border="false" center>
          <template #input>
            <van-field placeholder="请输入账号" style="border: 1px solid #ccc; padding: 5px 10px;" />
          </template>
        </van-field>
        <van-field label="密码" label-width="3rem" label-class="field_label" :border="false" center>
          <template #input>
            <van-field placeholder="请输入密码" style="border: 1px solid #ccc; padding: 5px 10px;" />
          </template>
        </van-field>
        <div style="padding: 0 18px 0 18px;">
          <van-button type="primary" round block>登录</van-button>
        </div>
        <div class="register_inquiry">还没账号？<label class="register_label" @click="isRegister = !isRegister">注册</label> 一个吧！</div>
      </van-cell-group>
      <van-cell-group class="reverse" :class="isRegister ? 'container-reverse' : ''" inset>
        <van-field label="账号" label-width="3rem" label-class="field_label" :border="false" center>
          <template #input>
            <van-field placeholder="请输入账号" style="border: 1px solid #ccc; padding: 5px 10px;" />
          </template>
        </van-field>
        <van-field label="密码" label-width="3rem" label-class="field_label" :border="false" center>
          <template #input>
            <van-field placeholder="请输入密码" style="border: 1px solid #ccc; padding: 5px 10px;" />
          </template>
        </van-field>
        <div style="padding: 0 18px 8px 18px;">
          <van-button type="primary" round block @click="isRegister = !isRegister">注册</van-button>
        </div>
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
.field_label {
  font-size: 16px;
}

.register_inquiry {
  color: #646566;
  font-size: 14px;
  margin: 8px 0 8px 0;
}
.register_label {
  color: red;
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
}

.container {
  width: 100%;
  position: relative;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  align-items: center;
}

.front {
  top: 24px;
  text-align: center;
  position: absolute;
  backface-visibility: hidden;
  transition: 1.5s;
}

.reverse {
  width: 100%;
  top: 24px;
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