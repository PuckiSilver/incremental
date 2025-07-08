<script setup lang="ts">
import type { Creature, GiantNumber } from '@/types';

defineProps<{
  creature: Creature,
  bars: {
    max: GiantNumber,
    value: GiantNumber,
    color: 'health'|'speed',
  }[],
}>()
</script>

<template>
  <div class="wrapper">
    <div class="bars">
      <div class="bar" v-for="bar in bars">
        <div :class="['fill', bar.color]" :style="{ width: `${(bar.value.amount * 100) / bar.max.amount}%` }" />
      </div>
    </div>
    <img class="creature" :src="creature.icon" />
    <div class="hover">
      {{ creature }}
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
  border: .125rem solid rgb(var(--section-color));
  border-radius: .25rem;
  padding: .25rem;
  background-color: rgb(var(--section-color));
  width: 20rem;
  position: relative;

  &:hover {
    background-color: rgb(var(--hover-color));

    .bars, .creature {
      filter: blur(2px);
    }

    .hover {
      display: flex;
    }
  }

  .bars {
    display: flex;
    flex-direction: column;
    gap: .25rem;
    width: 100%;

    .bar {
      height: 1.5rem;
      background-color: rgb(var(--background-color));
      border-radius: .25rem;

      .fill {
        height: 100%;
        border-radius: .25rem;
      }

      .health {
        background-color: rgb(var(--event-color));
      }

      .speed {
        background-color: aqua;
      }
    }
  }

  .creature {
    background-color: rgb(var(--background-color));
    border-radius: .25rem;
    padding: .25rem;
    width: 100%;
    aspect-ratio: 1;
  }

  .hover {
    display: none;
    position: absolute;
  }
}
</style>
