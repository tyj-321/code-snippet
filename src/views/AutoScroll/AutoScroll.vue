<script setup>
import { useAutoScroll } from './useAutoScroll.js'

// 引入自动滚动逻辑hook
const { startScroll, stopScroll } = useAutoScroll('auto-scroll')
</script>

<template>
  <div id="auto-scroll" @mouseover="stopScroll()" @mouseout="startScroll()">
    <ul id="list">
      <li v-for="i of 50" :key="i" class="li-item">
        Item {{ i }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
#auto-scroll {
  width: 70%;
  height: 300px;
  margin: 5% auto;
  overflow-y: auto;
  border: 1px solid #000;

  &::-webkit-scrollbar {
    display: none;
  }
}

.li-item {
  height: 30px;
}
</style>
