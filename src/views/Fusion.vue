<script setup>

</script>

<template>
  <div class="w-full h-930px flex justify-center items-center bg-black">
    <div class="box">
      <p class="text-#fff m-0 text-200px text">
        Hello World
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
    filter: contrast(200%);
}
.text {
    font-weight: 700;
    animation: fusion 2s;
}
@keyframes fusion {
    from {
        letter-spacing: -100px;
        filter: blur(30px);
    }
    to {
        letter-spacing: 0px;
        filter: blur(0px);
    }
}
</style>
