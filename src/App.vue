<script setup lang="ts">
import Money from '@/components/Money.vue'
import { money } from './store';
import CreaturePage from './components/CreaturePage.vue';
</script>

<template>
  <div class="container">
    <header>
      <Money :currency="money.gold" />
      <Money :currency="money.element" />
    </header>

    <main>
      <CreaturePage/>
    </main>
  </div>
</template>

<style scoped>
div.container {
  display: flex;
  flex-direction: column;
  padding: .5rem;
  gap: .5rem;

  header {
    border-radius: .25rem;
    padding-bottom: .25rem;
    display: flex;
    gap: .25rem;
    flex-wrap: wrap;
    border-bottom: .125rem solid rgb(var(--section-color));
  }
}
</style>
