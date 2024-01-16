<script setup>
import { ref } from 'vue'

const hour = ref(0)
const minute = ref(0)
const second = ref(0)
// 创建一个新的Date对象
const currentDate = new Date()

// 获取小时、分钟、秒
hour.value = currentDate.getHours()
minute.value = currentDate.getMinutes()
second.value = currentDate.getSeconds()

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

// 一个翻页的函数，传参是原始值，目标值
async function flip(oldValue, newValue) {
  // 找到原始值的卡片
  const orignalCard = document.getElementById(`second-end-card-bottom-${oldValue}`)
  // 设置翻转效果
  orignalCard.style.transform = `rotateX(270deg)`
  orignalCard.style.transformOrigin = `50% -5px`
  orignalCard.style.transition = `transform 0.6s ease-in-out`
  orignalCard.style.backfaceVisibility = `hidden`
  // 找到目标值的卡片
  const targetCard = document.getElementById(`second-end-card-top-${newValue}`)
  await delay(300)
  targetCard.style.zIndex = Number(newValue) + 10
}
</script>

<template>
  <div class="h-full flex items-center justify-center bg-#000 box">
    <div class="w-800px h-600px flex justify-between items-center bg-#000 clock">
      <div class="w-210px h-210px flex gap-10px hour">
        <div class="w-100px h-full flex flex-col gap-10px hour-fronted">
          <div class="relative h-100px">
            <div v-for="i in 3" :id="`hour-fronted-card-top-${i - 1}`" :key="i" class="absolute w-100px h-100px bg-#211f1f text-#41fe7e text-150px card-item card-item-top" :style="{ zIndex: Number(String(hour)[0]) === i - 1 ? 11 : 10 - i }">
              <span class="absolute top">{{ i - 1 }}</span>
            </div>
          </div>
          <div class="relative h-100px">
            <div v-for="i in 3" :id="`hour-fronted-card-bottom-${i - 1}`" :key="i" class="absolute w-100px h-100px bg-#211f1f text-#41fe7e text-150px card-item card-item-bottom" :style="{ zIndex: Number(String(hour)[0]) === i - 1 ? 11 : 10 - i }">
              <span class="absolute bottom">{{ i - 1 }}</span>
            </div>
          </div>
        </div>
        <div class="w-100px h-full flex flex-col gap-10px hour-end">
          <div class="relative h-100px">
            <div v-for="i in 10" :id="`hour-end-card-top-${i - 1}`" :key="i" class="absolute w-100px h-100px bg-#211f1f text-#41fe7e text-150px card-item card-item-top" :style="{ zIndex: Number(String(hour)[1]) === i - 1 ? 11 : 10 - i }">
              <span class="absolute top">{{ i - 1 }}</span>
            </div>
          </div>
          <div class="relative h-100px">
            <div v-for="i in 10" :id="`hour-end-card-bottom-${i - 1}`" :key="i" class="absolute w-100px h-100px bg-#211f1f text-#41fe7e text-150px card-item card-item-bottom" :style="{ zIndex: Number(String(hour)[1]) === i - 1 ? 11 : 10 - i }">
              <span class="absolute bottom">{{ i - 1 }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="text-#fff text-30">
        :
      </div>
      <div class="w-210px h-210px flex gap-10px minute">
        <div class="w-100px h-full flex flex-col gap-10px minute-fronted">
          <div class="relative h-100px">
            <div v-for="i in 6" :id="`minute-fronted-card-top-${i - 1}`" :key="i" class="absolute w-100px h-100px bg-#211f1f text-#41fe7e text-150px card-item card-item-top" :style="{ zIndex: Number(String(minute)[0]) === i - 1 ? 11 : 10 - i }">
              <span class="absolute top">{{ i - 1 }}</span>
            </div>
          </div>
          <div class="relative h-100px">
            <div v-for="i in 6" :id="`minute-fronted-card-bottom-${i - 1}`" :key="i" class="absolute w-100px h-100px bg-#211f1f text-#41fe7e text-150px card-item card-item-bottom" :style="{ zIndex: Number(String(minute)[0]) === i - 1 ? 11 : 10 - i }">
              <span class="absolute bottom">{{ i - 1 }}</span>
            </div>
          </div>
        </div>
        <div class="w-100px h-full flex flex-col gap-10px minute-end">
          <div class="relative h-100px">
            <div v-for="i in 10" :id="`minute-end-card-top-${i - 1}`" :key="i" class="absolute w-100px h-100px bg-#211f1f text-#41fe7e text-150px card-item card-item-top" :style="{ zIndex: Number(String(minute)[1]) === i - 1 ? 11 : 10 - i }">
              <span class="absolute top">{{ i - 1 }}</span>
            </div>
          </div>
          <div class="relative h-100px">
            <div v-for="i in 10" :id="`minute-end-card-bottom-${i - 1}`" :key="i" class="absolute w-100px h-100px bg-#211f1f text-#41fe7e text-150px card-item card-item-bottom" :style="{ zIndex: Number(String(minute)[1]) === i - 1 ? 11 : 10 - i }">
              <span class="absolute bottom">{{ i - 1 }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="text-#fff text-30">
        <span>:</span>
      </div>
      <div class="w-210px h-210px flex gap-10px second">
        <div class="w-100px h-full flex flex-col gap-10px second-fronted">
          <div class="relative h-100px">
            <div v-for="i in 6" :id="`second-fronted-card-top-${i - 1}`" :key="i" class="absolute w-100px h-100px bg-#211f1f text-#41fe7e text-150px card-item card-item-top" :style="{ zIndex: Number(String(second)[0]) === i - 1 ? 11 : 10 - i }">
              <span class="absolute top">{{ i - 1 }}</span>
            </div>
          </div>
          <div class="relative h-100px">
            <div v-for="i in 6" :id="`second-fronted-card-bottom-${i - 1}`" :key="i" class="absolute w-100px h-100px bg-#211f1f text-#41fe7e text-150px card-item card-item-bottom" :style="{ zIndex: Number(String(second)[0]) === i - 1 ? 11 : 10 - i }">
              <span class="absolute bottom">{{ i - 1 }}</span>
            </div>
          </div>
        </div>
        <div class="w-100px h-full flex flex-col gap-10px second-end">
          <div class="relative h-100px">
            <div v-for="i in 10" :id="`second-end-card-top-${i - 1}`" :key="i" class="absolute w-100px h-100px bg-#211f1f text-#41fe7e text-150px card-item card-item-top" :style="{ zIndex: Number(String(second)[1]) === i - 1 ? 11 : 10 - i }">
              <span class="absolute top">{{ i - 1 }}</span>
            </div>
          </div>
          <div class="relative h-100px">
            <div v-for="i in 10" :id="`second-end-card-bottom-${i - 1}`" :key="i" class="absolute w-100px h-100px bg-#211f1f text-#41fe7e text-150px card-item card-item-bottom" :style="{ zIndex: Number(String(second)[1]) === i - 1 ? 11 : 10 - i }">
              <span class="absolute bottom">{{ i - 1 }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-50px h-50px bg-red" @click="flip(0, 1)">
      翻转
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-item {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 10px;
  .top {
    height: 100px;
  }
  .bottom {
    height: 100px;
    top: -100px;
  }
}
</style>
