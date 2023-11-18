import { ref, onMounted, onBeforeUnmount } from 'vue'
export const useAutoScroll = (domId) => {
  // 自动滚动的定时器
  const autoScrollTimer = ref()

  // 开启自动滚动
  const startScroll = () => {
    autoScrollTimer.value = setInterval(() => {
      const dom = document.getElementById(domId)
      const { scrollHeight, scrollTop, clientHeight } = dom
      if (Math.abs(scrollTop + clientHeight - scrollHeight) < 1)
        dom.scrollTop = 0
      else
        dom.scrollTop += 1
    }, 40)
  }

  // 关闭自动滚动
  const stopScroll = () => {
    clearInterval(autoScrollTimer.value)
  }
  
  // 组件加载完成开始自动滚动
  onMounted(() => {
    startScroll()
  })
  
  // 组件销毁前销毁定制器
  onBeforeUnmount(() => {
    clearInterval(autoScrollTimer.value)
  })

  return {
    startScroll,
    stopScroll,
  }
}