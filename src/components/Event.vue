<script setup lang="ts">
const emit = defineEmits(['click', 'close'])
const { closeable = false, ctaDisabled = false } = defineProps<{
  closeable?: boolean,
  title: string,
  cta: string,
  ctaIcon?: string,
  ctaDisabled?: boolean,
}>()
</script>

<template>
  <div class="wrapper">
    <div class="headline">
      <span class="title">{{ title }}</span>
      <button v-if="closeable" class="close" @click="() => emit('close')">X</button>
    </div>
    <div class="content">
      <slot />
    </div>
    <div class="actions">
      <button @click="() => emit('click')" :disabled="ctaDisabled"><span>{{ cta }}</span><img v-if="ctaIcon" :src="ctaIcon" /></button>
    </div>
  </div>
</template>

<style scoped>
div.wrapper {
  border-radius: .25rem;
  padding: .25rem;
  border: .125rem solid rgb(var(--event-color));
  background-color: rgb(var(--background-color));
  display: flex;
  flex-direction: column;
  gap: .5rem;

  &:hover {
    background-color: rgb(var(--hover-color));
  }

  .headline {
    position: relative;
    text-align: center;

    .title {
      border-bottom: .125rem solid rgb(var(--event-color));
      padding: 0 .5rem;
      margin: 0 2rem;
    }

    .close {
      width: 1.6rem;
      height: 1.6rem;
      position: absolute;
      right: .25rem;
      background-color: rgb(var(--background-color));

      &:hover {
        background-color: rgb(var(--section-color));
      }
    }
  }

  .content {
    background-color: rgb(var(--section-color));
    border-radius: .25rem;
    margin: auto;
    padding: .5rem;
    display: flex;
    gap: .5rem;
  }

  .actions {
    display: flex;
    justify-content: center;

    button {
      display: flex;
      gap: .5rem;
      align-items: center;

      img {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
}
</style>
