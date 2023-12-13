<script setup>
import { ref } from 'vue'
import shoppingCart from '@/assets/images/shoppingCart.svg'
import add from '@/assets/images/add.svg'

const count = ref(0)
function handleAdd() {
  count.value++
  // 创建一个添加dom元素
  const div = document.createElement('div')
  // 添加类名
  div.classList.add('flex', 'w-30px', 'h-30px', 'justify-end')
  div.style.position = 'absolute'
  div.style.top = 0
  div.style.right = 0
  div.style.transform = 'translateY(0px)'
  // 创建img元素
  const img = document.createElement('img')
  img.classList.add('w-30px', 'h-30px')
  img.src = add
  img.style.transform = 'translateX(0px)'
  div.appendChild(img)
  // 添加到body中
  document.getElementById('container').appendChild(div)

  // 这里做动画操作
  div.style.transition = 'all 0.4s cubic-bezier(0.5, -0.5, 1, 1)'
  img.style.transition = 'transform 0.4s linear'
  setTimeout(() => {
    div.style.transform = 'translateY(280px)'
    div.style.opacity = 0
    img.style.transform = 'translateX(-210px)'
  }, 100)
  setTimeout(() => {
    document.getElementById('container').removeChild(div)
  }, 1000)
}
</script>

<template>
  <div id="container" class="relative h-300px w-250px flex flex-col justify-between m-t-300px m-auto">
    <div class="flex w-250px justify-end cursor-pointer" @click="handleAdd">
      <img class="w-30px h-30px" :src="add" alt="">
    </div>
    <div class="flex w-250px justify-start">
      <img class="w-50px h-50px" :src="shoppingCart" alt="">
    </div>
    <div class="badge w-20px h-20px absolute top-245px left-39px text-center">
      {{ count }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.badge {
  background-color: tomato;
  border-radius: 50%;
  color: #fff;
  font-size: 14px;
}
</style>
