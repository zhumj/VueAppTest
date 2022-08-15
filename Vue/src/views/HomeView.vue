<template>
  <div>
    <van-nav-bar title="VueAppTest" :border="false" fixed placeholder>
      <template #right>
        <van-config-provider :theme-vars="themeVars">
          <van-dropdown-menu>
            <van-dropdown-item v-model="listType" :options="config.HOME_DATA"/>
          </van-dropdown-menu>
        </van-config-provider>
      </template>
    </van-nav-bar>
    <div class="view_content">
      <van-cell-group :title="config.HOME_DATA[listType].text" inset>
        <van-cell v-for="item in config.HOME_DATA[listType].items" :value="item.label" value-class="cell_value" :to="item.path" center is-link />
      </van-cell-group>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import config from '@/config/config'

const listType = ref(0)
const themeVars = {
  dropdownMenuHeight: '46px',
  dropdownMenuTitleFontSize: '14px',
  dropdownMenuTitleTextColor: '#fff',
  dropdownMenuBackgroundColor: '#1989fa',
  dropdownMenuBoxShadow: 0
};
</script>

<style>
.view_content {
  padding-bottom: 18px;
}

.cell_value {
  font-size: 16px;
}
</style>
