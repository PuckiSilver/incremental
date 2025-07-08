<script setup lang="ts">
import WeightIcon from '@/assets/icons/80px-Weight.webp';
import EnergyIcon from '@/assets/icons/80px-Energy.webp';
import FoodIcon from '@/assets/icons/80px-Food.webp';
import LevelupIcon from '@/assets/icons/80px-Levelup.webp';
import CraftingSkillIcon from '@/assets/icons/80px-Crafting_Skill.webp';
import { ref } from 'vue';
import TabCreatures from './TabCreatures.vue';
import TabShop from './TabShop.vue';
import TabOneVOne from './TabOneVOne.vue';

const active_tab = ref(0);

const tabs = [
  {name: 'Creatures', icon: WeightIcon},
  {name: 'Creature Shop', icon: EnergyIcon},
  {name: 'Breeding', icon: FoodIcon},
  {name: 'Mutate', icon: LevelupIcon},
  {name: 'Clone', icon: CraftingSkillIcon},
];

defineProps<{}>()
</script>

<template>
  <div class="page">
    <div class="tabs">
      <button
        :class="`tab ${idx === active_tab && 'active'}`"
        v-for="(tab, idx) in tabs"
        @click="() => active_tab = idx"
      >
        <img :src="tab.icon"/>
      </button>
    </div>
    <div class="content">
      <TabCreatures v-if="active_tab === 0" />
      <TabShop v-else-if="active_tab === 1" />
      <TabOneVOne v-else-if="active_tab === 2" />
      <span v-else>NOT IMPLEMENTED</span>
    </div>
  </div>
</template>

<style scoped>
div.page {
  display: flex;
  flex-direction: column;
  width: 100%;

  div.tabs {
    display: flex;
    overflow-x: auto;
    margin: 0 .25rem;

    button.tab {
      padding: .5rem .5rem .25rem .5rem;
      border-radius: 0;
      background-color: rgb(var(--background-color));

      &.active {
        background-color: rgb(var(--section-color));
      }

      &:hover {
        background-color: rgb(var(--hover-color));
      }

      img {
        height: 2.5rem;
      }
    }
  }

  div.content {
    border-radius: .25rem;
    border: .125rem solid rgb(var(--section-color));
    padding: .5rem;
    width: 100%;
  }
}
</style>
