<template>
  <div>
    <van-nav-bar
      title="简单的计算器(未完)"
      left-text="返回"
      :border="false"
      left-arrow
      fixed
      placeholder
      @click-left="onNavLeftClick"
    />
    <div class="container">
      <div class="content_top">
        <van-config-provider :theme-vars="themeVars">
          <van-field
            class="content_top_output"
            v-model="outputValue"
            readonly
            input-align="right"
            :border="false"
          />
        </van-config-provider>
        <van-field
          class="content_top_input"
          v-model="inputValue"
          readonly
          input-align="right"
          :border="false"
        />
      </div>
      <van-row>
        <van-col class="content_buttom_item" span="6" v-for="item in items" :key="item" @click="onItemClick(item)">
          <div class="content_buttom_item_content">{{item}}</div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import router from "@/router";

const themeVars = {
  fieldInputTextColor: '#a9a9a9'
}
const items = [
  '(',
  ')',
  'DEL',
  'AC',
  '1',
  '2',
  '3',
  '/',
  '4',
  '5',
  '6',
  '*',
  '7',
  '8',
  '9',
  '-',
  '0',
  '.',
  '=',
  '+'
]
const inputValue = ref('0')
const outputValue = ref('0')
const inputList = ref(['0'])

const onNavLeftClick = () => {
  router.back()
}

function onItemClick(item: string) {
  const value = inputList.value
  const valueLength = value.length
  const lastValue = value[valueLength-1]
  if (valueLength == 1 && lastValue == '0') {
    if (item == ')' || item == '+' || item == '-' || item == '*' || item == '/' || item == "=") {
        return
    }
  }
  if (lastValue == '(') {
    if (item == '(' || item == ')' || item == '+' || item == '-' || item == '*' || item == '/' || item == "=") {
        return
    }
  }
  if (lastValue == ')') {
    if (item != '+' && item != '-' && item != '*' && item != '/' && item != "=") {
        return
    }
  }
  if (lastValue == '/' || lastValue == '*' || lastValue == '-' || lastValue == '+') {
    if (item == '+' || item == '-' || item == '*' || item == '/') {
      inputList.value.splice(valueLength-1, 1, item)
      inputValue.value = inputList.value.join('')
      return
    } else if (item == ')' || item == '=') {
      return
    }
  }
  if (item == 'AC') {
    inputList.value.length = 0
    inputList.value.push('0')
    inputValue.value = inputList.value.join('')
  } else if (item == 'DEL') {
    if (valueLength > 1) {
      if (lastValue.length > 1) {
        inputList.value.splice(valueLength-1, 1, lastValue.slice(0, lastValue.length-1))
      } else {
        inputList.value.splice(valueLength-1, 1)
      }
    } else {
      if (lastValue.length > 1) {
        inputList.value.splice(valueLength-1, 1, lastValue.slice(0, lastValue.length-1))
      } else {
        inputList.value.splice(0, 1, '0')
      }
    }
    inputValue.value = inputList.value.join('')
  } else if (item == "=") {
    outputValue.value = inputValue.value+item
    inputValue.value = calculate()
    inputList.value.length = 0
    inputList.value.push(inputValue.value)
  } else {
    if(item == '(') {
      if (!(valueLength == 1 && lastValue == '0') && lastValue != '/' && lastValue != '*' && lastValue != '-' && lastValue != '+') {
        return
      }
    }
    if(item == ')') {
      if (value.indexOf('(') != -1) {
        const sliceValue = value.slice(value.lastIndexOf('('), valueLength)
        if (sliceValue.indexOf(')') != -1) {
          return
        }
        if (lastValue == '(' || lastValue == ')' || lastValue == '+' || lastValue == '-' || lastValue == '*' || lastValue == '/') {
          return
        }
      } else {
        return
      }
    }
    if(item == '.') {
      if (lastValue == '(' || lastValue == ')' || lastValue == '+' || lastValue == '-' || lastValue == '*' || lastValue == '/' || lastValue.includes('.')) {
        return
      }
    }
    if (valueLength == 1 && lastValue == '0' && item != '.') {
      inputList.value = [item]
    } else {
      if(lastValue == '(' || lastValue == ')' || lastValue == '/' || lastValue == '*' || lastValue == '-' || lastValue == '+') {
        inputList.value.push(item)
      } else {
        if(item == '(' || item == ')' || item == '/' || item == '*' || item == '-' || item == '+') {
          inputList.value.push(item)
        } else {
          inputList.value.splice(valueLength-1, 1, lastValue+item)
        }
      }
    }
    inputValue.value = inputList.value.join('')
  }
}

function calculate(): string {
  return '1'
}
</script>

<style>
@import '@/fonts/fonts.css';

.container {
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: darkslategray;
}

.content_top {
  min-height: 3rem;
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
}

.content_top_input {
  width: 100%;
  margin-top: 0.1rem;
  padding: 0;
  font-size: 21pt;
}
.content_top_output {
  width: 100%;
  padding: 0;
  font-size: 16pt;
  color: darkgray;
}

.content_buttom_item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.content_buttom_item_content {
  flex: 1;
  height: 3rem;
  font-size: 21pt;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  border-radius: 0.3rem;
  background-color: aqua;
}

.content_buttom_item_content:active {
  background-color: cadetblue;
}
</style>