<script setup lang="ts">
import { creatures, creatureTypes, money, shop } from '@/store';
import { ref } from 'vue';
import Image from './Image.vue';
import HealthIcon from '@/assets/icons/80px-Health.webp';
import MeleeDamageIcon from '@/assets/icons/80px-Melee_Damage.webp';
import MovementSpeedIcon from '@/assets/icons/80px-Movement_Speed.webp';
import GoldenNuggetIcon from '@/assets/money/228px-Golden_Nugget.webp';
import type { CreatureShopEntry } from '@/types';
import CreatureBox from '@/components/CreatureBox.vue';

const selectedCreature = ref(0);
const sortBy = ref<'health'|'damage'|'speed'>('health');

const sortCreatures = (a: CreatureShopEntry, b: CreatureShopEntry): number => {
  return b[sortBy.value] - a[sortBy.value];
}

const tryBuy = (entry: CreatureShopEntry): void => {
  if (money.gold.subtract(entry.price)) {
    creatures[selectedCreature.value].push(entry.toStats());
    shop[selectedCreature.value] = shop[selectedCreature.value].filter(e => e !== entry);
  }
}

defineProps<{}>()
</script>

<template>
  <div class="container">
    <div class="overview">
      <CreatureBox
        v-for="(ct, idx) in creatureTypes"
        :creature="ct"
        :amount="shop[idx].length"
        :active="selectedCreature === idx"
        @click="() => selectedCreature = idx"
      />
    </div>
    <table class="listing">
      <thead>
        <tr>
          <th :class="sortBy === 'health' ? 'active' : undefined"><button class="content" @click="() => sortBy = 'health'"><Image size="2rem" :src="HealthIcon" /><span>Health</span></button></th>
          <th :class="sortBy === 'damage' ? 'active' : undefined"><button class="content" @click="() => sortBy = 'damage'"><Image size="2rem" :src="MeleeDamageIcon" /><span>Damage</span></button></th>
          <th :class="sortBy === 'speed' ? 'active' : undefined"><button class="content" @click="() => sortBy = 'speed'"><Image size="2rem" :src="MovementSpeedIcon" /><span>Speed</span></button></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="creature in shop[selectedCreature].sort(sortCreatures)">
          <td>{{ creature.health }}</td>
          <td>{{ creature.damage }}</td>
          <td>{{ creature.speed }}</td>
          <td><button @click="() => tryBuy(creature)"><span>Buy</span><span>{{ creature.price }}</span><Image :src="GoldenNuggetIcon" size="1.5rem" /></button></td>
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

  div.overview {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    padding: .25rem;
    border-bottom: .125rem solid rgb(var(--section-color));
  }
}
</style>
