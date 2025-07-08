<script setup lang="ts">
import { creatures } from '@/store';
import { ref } from 'vue';
import CreatureBox from '@/components/CreatureBox.vue';
import HealthIcon from '@/assets/icons/80px-Health.webp';
import MeleeDamageIcon from '@/assets/icons/80px-Melee_Damage.webp';
import MovementSpeedIcon from '@/assets/icons/80px-Movement_Speed.webp';

const selectedCreature = ref<number>(0);

defineProps<{}>();
</script>

<template>
  <div class="container">
    <div class="overview">
      <CreatureBox
        v-for="(ct, idx) in creatures"
        :creature="ct"
        :active="selectedCreature === idx"
        @click="() => selectedCreature = idx"
      />
    </div>
    <div class="summary">
      <div class="line">
        <span>Highest Stats:</span>
        <div class="stats">
          <img :src="HealthIcon" /><span>{{ creatures[selectedCreature].health }}</span>
          <img :src="MeleeDamageIcon" /><span>{{ creatures[selectedCreature].damage }}</span>
          <img :src="MovementSpeedIcon" /><span>{{ creatures[selectedCreature].speed }}</span>
        </div>
      </div>
    </div>
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

        img {
          width: 2rem;
          height: 2rem;
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
