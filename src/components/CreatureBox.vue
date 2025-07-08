<script setup lang="ts">
import type { Creature } from '@/types';

const emit = defineEmits(['click'])
defineProps<{
  creature: Creature,
  active: boolean,
}>()
</script>

<template>
  <button
    :class="`creature-box ${active && 'active'}`"
    @click="() => emit('click')"
  >
    <img :src="creature.icon"/>
    <span class="amount">{{ creature.count }}</span>
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

  img {
    width: 3rem;
    height: 3rem;
  }

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
      top: -35%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
    }
  }

  &.active {
    background-color: rgb(var(--section-color));
    border-color: rgb(var(--border-color));
  }
}
</style>