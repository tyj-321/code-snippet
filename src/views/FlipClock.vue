<script setup>
import { computed, ref } from 'vue'

const date = ref(new Date())
const isFlipping = ref([false, false, false, false, false, false])

const timeArray = computed(() => {
  const hours = date.value.getHours().toString().padStart(2, '0')
  const minutes = date.value.getMinutes().toString().padStart(2, '0')
  const seconds = date.value.getSeconds().toString().padStart(2, '0')
  return [...hours, ...minutes, ...seconds]
})

const nextNumber = computed(() => {
  const nextDate = new Date(date.value.getTime() + 1000)
  const hours = nextDate.getHours().toString().padStart(2, '0')
  const minutes = nextDate.getMinutes().toString().padStart(2, '0')
  const seconds = nextDate.getSeconds().toString().padStart(2, '0')
  return [...hours, ...minutes, ...seconds]
})

setInterval(() => {
  date.value = new Date()
  isFlipping.value = isFlipping.value.map((_, i) => timeArray.value[i] !== nextNumber.value[i])
}, 1000)
</script>

<template>
  <div class="clock">
    <div v-for="(digit, index) in timeArray" :key="index" class="flip">
      <div class="card">
        <div class="face top" :class="{ flip: isFlipping[index] }">
          <div class="number">
            {{ digit }}
          </div>
        </div>
        <div class="face bottom" :class="{ flip: isFlipping[index] }">
          <div class="number">
            {{ nextNumber[index] }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.clock {
    display: flex;
    justify-content: center;
}

.flip {
    perspective: 300px;
    width: 50px;
    height: 100px;
    margin: 0 10px;
}

.card {
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;
    transform-style: preserve-3d;
    transition: transform 0.6s;
}

.face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
}

.face.top {
    background: #333;
    color: white;
    font-size: 70px;
    line-height: 100px;
    border-radius: 5px;
    transform: rotateX(0deg);
}

.face.bottom {
    background: #333;
    color: white;
    font-size: 70px;
    line-height: 100px;
    border-radius: 5px;
    transform: rotateX(-90deg);
}

.flip .card .top.flip {
    transform: rotateX(90deg);
}

.flip .card .bottom.flip {
    transform: rotateX(0deg);
}
</style>
