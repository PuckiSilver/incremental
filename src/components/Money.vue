<script setup lang="ts">
import type { Currency } from '@/types';

defineProps<{
  currency: Currency,
}>()
</script>

<template>
  <div class="money">
    <img :src="currency.icon" />
    <span class="name">{{ currency.name }}</span>
    <span class="amount">{{ currency.toHumanReadable() }}</span>
  </div>
</template>

<style scoped>
div.money {
  background-color: transparent;
  border-radius: .25rem;
  padding: .5rem;
  display: flex;
  gap: .5rem;
  align-items: center;

  &:hover {
    background-color: rgb(var(--section-color));
  }

  img {
    height: 1.75rem;
  }

  span.name {
    font-weight: bold;

    @media (max-width: 56rem) {
      display: none;
    }
  }
}
</style>
