<script setup lang="ts">
import DilophosaurIcon from '@/assets/creatures/dilophosaur.webp';
import RaptorIcon from '@/assets/creatures/raptor.webp';
import CreatureCard from './CreatureCard.vue';
import { Creature, GiantNumber } from '@/types';

defineProps<{}>();
</script>

<template>
  <div class="container">
    <div class="automation">
      AUTOMATION
    </div>
    <div class="creature-select">
      CREATURE SELECT
    </div>
    <div class="game">
      <CreatureCard :bars="[{max: new GiantNumber(120), value: new GiantNumber(50), color: 'health'},{max: new GiantNumber(245346), value: new GiantNumber(745), color: 'speed'}]" :creature="new Creature('Dilophosaur', DilophosaurIcon, new GiantNumber(13290), new GiantNumber(12234), new GiantNumber(153532), new GiantNumber(0), new GiantNumber(1))" />
      <CreatureCard :bars="[{max: new GiantNumber(120), value: new GiantNumber(50), color: 'health'},{max: new GiantNumber(174), value: new GiantNumber(3), color: 'speed'}]" :creature="new Creature('Raptor', RaptorIcon, new GiantNumber(2435), new GiantNumber(354634), new GiantNumber(235245), new GiantNumber(0), new GiantNumber(1))" />
      <div class="actions">
        <button :style="{ background: `linear-gradient(rgb(var(--background-color)) 60%, rgb(var(--border-color)) 60%)` }" disabled>Fight</button>
        <button>Defend</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: .5rem;

  div.game {
    display: flex;
    flex-wrap: wrap;
    border-radius: .25rem;
    border: .125rem solid rgb(var(--section-color));
    padding: 1rem;
    padding-bottom: 3.5rem;
    gap: 1rem;
    justify-content: center;
    position: relative;

    .actions {
      position: absolute;
      width: calc(100% - .5rem);
      bottom: .25rem;
      padding: .25rem;
      border-radius: .25rem;
      display: flex;
      gap: .5rem;
      justify-content: center;
    }
  }
}
</style>
