<!-- 实现鼠标跟随移动 -->
<template>
  <div ref="mouse" class="airport">
    <img :src="airport" alt="">
  </div>
</template>

<script setup>
import airport from '@/assets/images/airport.svg'
import { onBeforeMount } from 'vue';
import { ref } from 'vue'
import { onMounted } from 'vue';
import { useThrottleFn } from '@vueuse/core'
const mouse = ref(null)
const rotate = ref(0)
const handleMouseMove = useThrottleFn((e) => {
  // 节流处理，并获取方向
  if (Math.abs(e.movementX) + Math.abs(e.movementY) > 1) {
    rotate.value = Math.atan2(e.movementX, -e.movementY)
  }
  mouse.value.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
  mouse.value.style.transform += `rotate(${rotate.value}rad)`
}, 10)
onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
})

onBeforeMount(() => {
  window.removeEventListener('mousemove', () => {})
})

</script>

<style scoped>
.airport {
  position: fixed;
  width: 50px;
  height: 50px;
  margin-left: -20px;
  margin-top: -9px;
}
</style>
<style>
html {
  cursor: none;
}
</style>