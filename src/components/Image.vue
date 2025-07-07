<script setup lang="ts">
defineProps<{
  src: string|undefined,
  size: string,
}>()
</script>

<template>
  <div class="img-wrapper" :style="{width: size, height: size}">
    <img :src="src" />
  </div>
</template>

<style scoped>
div.img-wrapper {
  position: relative;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
