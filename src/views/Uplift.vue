<script setup>
import { reactive } from 'vue'
import { useDebounceFn } from '@vueuse/core'

const dots = Array.from({ length: 273 }, (_, i) => reactive({ id: i, transform: '' }))

const move = useDebounceFn((e) => {
  dots.forEach((d) => {
    const dot = document.getElementById(d.id)
    const dx = dot.offsetLeft + dot.offsetWidth / 2 - e.pageX
    const dy = dot.offsetTop + dot.offsetHeight / 2 - e.pageY
    const dist = Math.hypot(dx, dy)
    // if (dist < 20) {
    const scale = Math.max(1 - dist / 100, 0.5)

    dot.style.transform = `translate(${dx * scale}px, ${dy * scale}px)`
    // }
  })
}, 50)

function leave() {
  setTimeout(() => {
    dots.forEach((d) => {
      const dot = document.getElementById(d.id)
      dot.style.transform = ''
    })
  }, 150)
}
</script>

<template>
  <div class="w-250px h-200px flex flex-wrap items-center justify-center gap-2 m-t-300px m-auto" @mousemove="move" @mouseleave="leave">
    <div v-for="dot in dots" :id="dot.id" :key="dot.id" class="dot" />
  </div>
</template>

<style lang="scss" scoped>
.dot {
  width: 4px;
  height: 4px;
  background: rgb(183, 219, 53);
  border-radius: 50%;
  transition: transform 0.5s ease;
}
</style>
