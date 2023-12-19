<script setup>
import { ref } from 'vue'

const input = ref('')
const result = ref('')

function splitString(str) {
  // 使用正则表达式匹配字符串，每4个字符为一组，从末尾开始
  const result = str.match(/.{1,4}(?=(.{4})*$)/g)
  return result
}

function convert() {
  if (Number(input.value) === 'NaN')
    return
  const inputArray = splitString(input.value)
  let res = ''
  for (let i = 0; i < inputArray.length; i++) {
    let r = ''
    const numbers = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
    const bigUnit = ['億', '萬', ''].slice(-inputArray.length)
    const smallUnit = ['', '拾', '佰', '仟', '萬']
    for (let j = 0; j < inputArray[i].length; j++) {
      const num = inputArray[i][inputArray[i].length - 1 - j]
      const chineseNum = numbers[num]
      if (num !== '0')
        r = chineseNum + smallUnit[j] + r
      else
        if (j > 0 && inputArray[i][inputArray[i].length - 1 - j - 1] !== '0')
          r = chineseNum + r

      if (j === inputArray[i].length - 1)
        r = r === '零' ? '' : r + bigUnit[i]
    }
    res = res + r
  }
  res = res[res.length - 1] === '零' ? res.slice(0, -1) : res
  result.value = res
}
</script>

<template>
  <div class="m-t-200px m-l-45%">
    <input v-model="input" class="h-30px m-r-8px" type="text" :maxlength="12" placeholder="输入数字">
    <button class="h-35px" @click="convert">
      转换
    </button>
    <h1 class="text-#ec9536">
      {{ result }}
    </h1>
  </div>
</template>

<style lang="scss" scoped>

</style>
