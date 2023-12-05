<!-- 实现数字初始显示动画 -->
<script setup>
import { computed, ref } from 'vue'

// 定义一个变量count，初始值为0
const count = ref(0)
const formatNum = computed(() => {
  const parts = Math.floor(count.value).toLocaleString().split('.')
  return parts[0].replace(/,/g, ',') + (parts[1] ? `.${parts[1]}` : '')
})
const target = 980321
const time = 2000
// 1毫秒增加的值
const msCount = Math.floor(target / time)
// 定义一个变量start，初始值为当前时间
let start = Date.now()
// 定义一个函数step，用于计算count.value
function step() {
  // 计算elapsed，即当前时间减去start
  const elapsed = Date.now() - start
  // 更新start，即当前时间
  start = Date.now()
  // 计算count.value，使用msCount乘以elapsed，加上count.value
  count.value += msCount * elapsed
  // 如果count.value小于target，则使用requestAnimationFrame函数，调用step函数，否则将count.value设置为target
  if (count.value < target)
    requestAnimationFrame(step)
  else
    count.value = target
}

// 调用step函数
step()
</script>

<template>
  <div class="m-t-200px m-l-35%">
    <h1>数字初始动画</h1>
    <h3 class="text-150px">
      {{ formatNum }}
    </h3>
  </div>
</template>

<style lang="scss" scoped></style>
