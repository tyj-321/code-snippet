<!-- 实现鼠标跟随移动 -->
<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useThrottleFn } from '@vueuse/core'
import airport from '@/assets/images/airport.svg'

const mouse = ref(null)
const rotate = ref(0)
const handleMouseMove = useThrottleFn((e) => {
  // 节流处理，并获取方向
  if (Math.abs(e.movementX) + Math.abs(e.movementY) > 2)
    rotate.value = Math.atan2(e.movementX, -e.movementY)

  mouse.value.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
  mouse.value.style.transform += `rotate(${rotate.value}rad)`
}, 10)
onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
  const html = window.document.getElementsByTagName('html')[0]
  html.style.cursor = 'none'
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', () => { })
  const html = window.document.getElementsByTagName('html')[0]
  html.style.cursor = 'auto'
})
</script>

<template>
  <div ref="mouse" class="airport">
    <img :src="airport" alt="">
  </div>
</template>

<style scoped>
.airport {
  position: fixed;
  width: 50px;
  height: 50px;
  margin-left: -20px;
  margin-top: -9px;
}
</style>
