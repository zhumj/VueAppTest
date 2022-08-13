<template>
  <div>
    <van-button @click="onClick">Home</van-button>
  </div>
</template>

<script lang="ts" setup>
import { Dialog, Toast } from 'vant';


const onClick = () => {
  Toast({
    message: '点击Home按钮',
    onClose: () => {
      Dialog.alert({
        title: '提示',
        message: '这么着？',
        className: 'dialog_title'
      })
    }
  })
}

</script>

<style>
.dialog_title {
  color: black;
}
</style>
