<template>
  <div>
    <van-nav-bar
      title="图片裁剪"
      left-text="返回"
      :border="false"
      left-arrow
      fixed
      placeholder
      @click-left="onNavLeftClick"
    />
    <div style="margin-top: 1rem; display: flex; align-items: center; justify-content: center;">
      <div v-if="img != null" style="width: 15rem; height: 15rem;">
        <vueCropper
          ref="cropper"
          :img="img?.content"
          :autoCrop="true"
          :fixed="true"
          :fixedBox="true"
          :original="false"
          :full="false"
          :infoTrue="true"
          :canMove="true"
          :centerBox="true"
          :canMoveBox="false"
          :canScale="true"
          @realTime="onRealTime"
        />
      </div>
    </div>
    <van-uploader :after-read="afterRead" accept="image/*" style="margin-top: 1rem;">
      <van-button icon="plus" type="primary">选择照片</van-button>
    </van-uploader>
    <!-- <div style="margin-top: 1rem; display: flex; align-items: center; justify-content: center;">
      <div :style="previewStyle" style="text-align: center;">
        <div :style="tData?.div">
          <img :src="tData?.url" :style="tData?.img">
        </div>
      </div>
    </div> -->
    <div v-if="cropData !== ''" style="margin-top: 1rem; display: flex; align-items: center; justify-content: center;">
      <img :src="cropData" style="width: 8rem; height: 8rem;">
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import router from "@/router";

const cropper = ref<any>()
const img = ref<any>()
const tData = ref<any>()
const previewStyle = ref<any>()
const cropData = ref('')

const onNavLeftClick = () => {
  router.back()
}

const afterRead = (file: any) => {
  img.value = file
}

const onRealTime = (data: any) => {
  tData.value = data
  previewStyle.value = {
    width: data.w + "px",
    height: data.h + "px",
    overflow: "hidden",
    margin: "0",
    zoom: 0.5
  }

  cropper.value?.getCropData((data: any) => {
    cropData.value = data
  })
}
</script>