<script setup lang="ts">
import { creatures, creatureTypes } from '@/store';
import { computed, ref } from 'vue';
import CreatureBox from '@/components/CreatureBox.vue';
import HealthIcon from '@/assets/icons/80px-Health.webp';
import MeleeDamageIcon from '@/assets/icons/80px-Melee_Damage.webp';
import MovementSpeedIcon from '@/assets/icons/80px-Movement_Speed.webp';
import type { CreatureStats } from '@/types';
import Image from './Image.vue';

const selectedCreature = ref<number>(0);
const sortBy = ref<'health'|'damage'|'speed'>('health');

const displayedCreatures = computed(() => creatures[selectedCreature.value].sort(sortCreatures).slice(0, 4));

const sortCreatures = (a: CreatureStats, b: CreatureStats): number => {
  if (b[sortBy.value] - a[sortBy.value] !== 0) {
    return b[sortBy.value] - a[sortBy.value];
  }
  if (b['damage'] - a['damage'] !== 0) {
    return b['damage'] - a['damage'];
  }
  if (b['health'] - a['health'] !== 0) {
    return b['health'] - a['health'];
  }
  return b['speed'] - a['speed'];
};

defineProps<{}>();
</script>

<template>
  <div class="container">
    <div class="overview">
      <CreatureBox
      v-for="(ct, idx) in creatureTypes"
      :creature="ct"
      :amount="creatures[idx].length"
      :active="selectedCreature === idx"
      @click="() => selectedCreature = idx"
      />
    </div>
    <div v-if="creatures[selectedCreature]?.length" class="summary">
      <div class="line">
        <span>Highest Stats:</span>
        <div class="stats">
          <Image size="2rem" :src="HealthIcon" /><span>{{ creatures[selectedCreature].reduce((a, b) => a.health > b.health ? a : b).health }}</span>
          <Image size="2rem" :src="MeleeDamageIcon" /><span>{{ creatures[selectedCreature].reduce((a, b) => a.damage > b.damage ? a : b).damage }}</span>
          <Image size="2rem" :src="MovementSpeedIcon" /><span>{{ creatures[selectedCreature].reduce((a, b) => a.speed > b.speed ? a : b).speed }}</span>
        </div>
      </div>
    </div>
    <table v-if="creatures[selectedCreature]?.length" class="listing">
      <thead>
        <tr>
          <th :class="sortBy === 'health' ? 'active' : undefined"><button class="content" @click="() => sortBy = 'health'"><Image size="2rem" :src="HealthIcon" /><span>Health</span></button></th>
          <th :class="sortBy === 'damage' ? 'active' : undefined"><button class="content" @click="() => sortBy = 'damage'"><Image size="2rem" :src="MeleeDamageIcon" /><span>Damage</span></button></th>
          <th :class="sortBy === 'speed' ? 'active' : undefined"><button class="content" @click="() => sortBy = 'speed'"><Image size="2rem" :src="MovementSpeedIcon" /><span>Speed</span></button></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="creature in displayedCreatures">
          <td>{{ creature.health }}</td>
          <td>{{ creature.damage }}</td>
          <td>{{ creature.speed }}</td>
        </tr>
        <tr v-if="creatures[selectedCreature].length > displayedCreatures.length">
          <td></td>
          <td><span>+ {{ creatures[selectedCreature].length - displayedCreatures.length }} more</span></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
div.container {
  display: flex;
  flex-direction: column;
  gap: .5rem;

  div.summary {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    padding: .25rem;
    border-bottom: .125rem solid rgb(var(--section-color));

    .line {
      padding: .25rem;
      display: flex;
      gap: .5rem;
      align-items: center;

      .stats {
        display: flex;
        gap: .25rem;
        align-items: center;
      }
    }
  }

  div.overview {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    padding: .25rem;
    border-bottom: .125rem solid rgb(var(--section-color));
  }

  table.listing {
    thead {
      tr {
        th {
          &.active:not(:hover) {
            background-color: rgb(var(--section-color));
          }

          button.content {
            display: flex;
            gap: .5rem;
            padding: .25rem;
            padding-right: .125rem;
            width: 100%;
            border-radius: 0;
            background-color: transparent;
            display: flex;
            align-items: center;
          }
        }
      }
    }

    tbody {
      tr {
        td {
          padding: .25rem;

          button {
            border: .125rem solid rgb(var(--section-color));
            background-color: rgb(var(--background-color));
            display: flex;
            gap: .5rem
          }
        }
      }
    }
  }
}
</style>
