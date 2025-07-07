<script setup lang="ts">
import type { CreatureType } from '@/types';
import Image from './Image.vue';

const emit = defineEmits(['click'])
defineProps<{
  creature: CreatureType,
  amount: number|string,
  active: boolean,
}>()
</script>

<template>
  <button
    :class="`creature-box ${active && 'active'}`"
    @click="() => emit('click')"
  >
    <Image :src="creature.icon" size="3rem" />
    <span class="amount">{{ amount }}</span>
    <span class="hover">{{ creature.name }}</span>
  </button>
</template>

<style scoped>
button.creature-box {
  border: .125rem solid rgb(var(--section-color));
  border-radius: .25rem;
  padding: .25rem;
  position: relative;
  height: fit-content;
  width: fit-content;

  span.hover {
    display: none;
  }

  span.amount {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover {
    background-color: rgb(var(--section-color));
    border-color: rgb(var(--hover-color));

    span.hover {
      display: inline;
      position: absolute;
      background-color: rgb(var(--background-color));
      border-radius: .25rem;
      padding: .25rem .5rem;
      top: -80%;
      left: 50%;
      transform: translate(-50%);
    }
  }

  &.active {
    background-color: rgb(var(--section-color));
    border-color: rgb(var(--border-color));
  }
}
</style>