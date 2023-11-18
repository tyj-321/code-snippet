<template>
  <div id="auto-scroll" @mouseover="stopScroll()" @mouseout="startScroll()">
    <ul id="list">
     <li v-for="i of 50" :key=i class="li-item">Item {{ i }}</li>
  </ul>
  </div>
</template>

<script setup>
import { useAutoScroll } from './useAutoScroll.js'
// 引入自动滚动逻辑hook
const { startScroll, stopScroll } = useAutoScroll('auto-scroll')
</script>

<style lang="scss" scoped>
#auto-scroll {
  width: 70%;
  height: 300px;
  margin: 5% auto;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
}
.li-item {
  height: 30px;
}
</style>