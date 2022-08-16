<template>
  <div>
    <van-nav-bar
      title="随机点名"
      left-text="返回"
      :border="false"
      left-arrow
      fixed
      placeholder
      @click-left="onNavLeftClick"
    />
    <div class="container">
      <van-cell-group class="front" :class="isSettings ? 'container-front' : ''" inset style="margin-top: 24px;">
        <div class="front_title">爱我就使劲抽我！</div>
        <div class="front_selected_name">{{ selectedName }}</div>
        <div class="front_button_container">
          <van-button class="front_button_start" type="primary" size="small" :disabled="startDisabled" block @click="onStart">开始</van-button>
          <van-button class="front_button_settings" type="primary" size="small" :disabled="startDisabled" block @click="isSettings = !isSettings">设置</van-button>
        </div>
        <div style="display: flex; justify-content: center; align-items: center; padding-bottom: 12px;">
          <img src="@/assets/salute.png" style="width: 48px; height: 48px" />
          <div style="font-size: 24px; line-height: 24px; text-align: left; color: red;">{{ selectedDatas.join(", ") }}</div>
          <img src="@/assets/salute.png" style="width: 48px; height: 48px; transform: rotateY(180deg)" />
        </div>
      </van-cell-group>
      <van-cell-group class="reverse" :class="isSettings ? 'container-reverse' : ''" inset style="margin-top: 24px;">
        <van-field>
          <template #input>
            <div style="font-size: 16px; color: #000">抽选名单<label style="font-size: 13px; color: deeppink">(多个选项用英文","隔开)</label></div>
          </template>
        </van-field>
        <div style="padding: 0 18px 0 18px;">
          <van-field
            v-model="rawDatas"
            placeholder="请输入抽选名单"
            type="textarea"
            :formatter="fieldLimitSpacesFormatter"
            enterkeyhint="done"
            :autosize="{ maxHeight: 60 }"
            style="border: 1px solid #ccc; padding: 6px 10px;"
          />
        </div>
        <van-field>
          <template #input>
            <div style="font-size: 16px; color: #000">抽选数量</div>
          </template>
        </van-field>
        <div style="padding: 0 18px 0 18px;">
          <van-field
            v-model="selectCount"
            placeholder="请输入抽选名单"
            type="digit"
            :formatter="fieldMinimumFormatter"
            enterkeyhint="done"
            style="border: 1px solid #ccc; padding: 6px 10px;"
          />
        </div>
        <div class="front_button_container">
          <van-button type="primary" size="small" :disabled="startDisabled" block @click="isSettings = !isSettings">保存</van-button>
        </div>
      </van-cell-group>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import router from "@/router";
import { Toast } from "vant";

const isSettings = ref(false)
const rawDatas = ref<string>(
  "中森明菜,周慧敏,克莉丝汀·斯图尔特,西野翔,洪真英,张敏,桥本环奈,邱淑贞,奥黛丽·赫本,赵丽颖,星野悠月,布兰妮·斯皮尔斯,等什么君,飞儿,秦羽墨"
);
const randomDatas = ref<string[]>([]);
const selectedDatas = ref<string[]>([]);
const selectedName = ref<string>("选中有奖哦");
const selectedIndex = ref<number>(-1);
const startDisabled = ref<boolean>(false);
const selectCount = ref<number>(1);
let timer: number;

const fieldLimitSpacesFormatter = (val: any) => {
  return val.replace(/\s+/g, "")
}

const fieldMinimumFormatter = (val: any) => {
  if (val === '' || val === '0') {
    return 1
  } else {
    return val
  } 
}

const onNavLeftClick = () => {
  router.back()
}

const onRecover = () => {
  randomDatas.value.length = 0;
  let datas = rawDatas.value.split(",");
  for (let index = 0; index < datas.length; index++) {
    const value = datas[index];
    if (value.length > 0) {
      randomDatas.value.push(value);
    }
  }
  selectedDatas.value.length = 0;
  selectedName.value = "选中有奖哦";
  selectedIndex.value = -1;
  startDisabled.value = false;
};

const onStart = () => {
  onRecover();
  if (randomDatas.value.length < 1) {
    Toast.fail('请设置抽选名单')
    return;
  }
  if (selectCount.value >= randomDatas.value.length) {
    Toast.fail('抽选数量不可大于或等于抽选名单数量')
    return;
  }
  startDisabled.value = true;
  startRandom();
}

const startRandom = () => {
  timer = setInterval(() => {
    selectedIndex.value = Math.floor(Math.random() * randomDatas.value.length);
    selectedName.value = randomDatas.value[selectedIndex.value];
  }, 100);
  setTimeout(() => {
    clearInterval(timer);
    selectedDatas.value.push(selectedName.value);
    randomDatas.value.splice(selectedIndex.value, 1);
    if (selectedDatas.value.length < selectCount.value) {
      setTimeout(() => {
        startRandom();
      }, 500);
    } else {
      setTimeout(() => {
        startDisabled.value = false;
      }, 500);
    }
  }, 1500);
}
</script>

<style>
@import '@/fonts/fonts.css';

.container {
  width: 100%;
  position: relative;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  align-items: center;
}

.front {
  top: 8px;
  left: 8px;
  right: 8px;
  text-align: center;
  position: absolute;
  backface-visibility: hidden;
  transition: 1.5s;
}

.front_title {
  margin-top: 18px;
  font-size: 32px;
  font-family: STHangKai;
  font-weight: bold;
  color: chocolate;
}

.front_selected_name {
  margin-top: 18px;
  font-size: 18px;
  color: #000;
}

.front_button_container {
  padding: 12px;
}

.front_button_start {
  margin: 0 0 12px 0;
}

.front_button_settings {
  margin: 12px 0 0 0;
}

.reverse {
  top: 8px;
  left: 8px;
  right: 8px;
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