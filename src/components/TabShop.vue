<script setup lang="ts">
import { creatures, money, shop, shopEvents } from '@/store';
import { ref } from 'vue';
import HealthIcon from '@/assets/icons/80px-Health.webp';
import MeleeDamageIcon from '@/assets/icons/80px-Melee_Damage.webp';
import MovementSpeedIcon from '@/assets/icons/80px-Movement_Speed.webp';
import GoldenNuggetIcon from '@/assets/money/228px-Golden_Nugget.webp';
import type { Creature } from '@/types';
import Event from './Event.vue';

const sortBy = ref<'health'|'damage'|'speed'|'price'>('price');

const sortCreatures = (a: Creature, b: Creature): number => {
  return b[sortBy.value].cmp(a[sortBy.value]) || b.price.cmp(a.price) || b.damage.cmp(a.damage) || b.health.cmp(a.health) || b.speed.cmp(a.speed);
}

const tryBuy = (entry: Creature, idx: number): void => {
  if (money.gold.ge(entry.price)) {
    money.gold.sub(entry.price)
    const ownedCreature = creatures.find(c => c.name === entry.name);
    if (ownedCreature === undefined) {
      creatures.push(entry);
    } else {
      ownedCreature.merge(entry);
    }
    shop.splice(idx, 1);
  }
}

const tryBuyEvent = (entry: Creature, idx: number): void => {
  if (money.gold.ge(entry.price)) {
    money.gold.sub(entry.price)
    const ownedCreature = creatures.find(c => c.name === entry.name);
    if (ownedCreature === undefined) {
      creatures.push(entry);
    } else {
      ownedCreature.merge(entry);
    }
    shopEvents.splice(idx, 1);
  }
}

const isIncreasedStat = (creature: Creature, stat: 'health'|'damage'|'speed') => {
  const ownCreature = creatures.find(c => c.name === creature.name);
  if (ownCreature === undefined) {
    return true;
  }
  return ownCreature[stat].lt(creature[stat]);
}

defineProps<{}>()
</script>

<template>
  <div class="container">
    <div v-if="shopEvents" class="events">
      <Event
        v-for="(creature, idx) in shopEvents"
        :title="`Special ${creature.name} for Sale!`"
        :cta="`Buy for ${creature.price}`"
        :cta-icon="GoldenNuggetIcon"
        :cta-disabled="creature.price.gt(money.gold)"
        closeable
        @click="() => tryBuyEvent(creature, idx)"
        @close="() => shopEvents.splice(idx, 1)"
      >
        <img :src="creature.icon" class="event-img" />
        <div class="info">
          <div class="headline"><span>{{ creature.name }}</span></div>
          <div class="stats">
            <div :class="['line', isIncreasedStat(creature, 'health') && 'increase']"><img :src="HealthIcon" /><span>{{ creature.health }}</span></div>
            <div :class="['line', isIncreasedStat(creature, 'damage') && 'increase']"><img :src="MeleeDamageIcon" /><span>{{ creature.damage }}</span></div>
            <div :class="['line', isIncreasedStat(creature, 'speed') && 'increase']"><img :src="MovementSpeedIcon" /><span>{{ creature.speed }}</span></div>
          </div>
        </div>
      </Event>
    </div>
    <table class="listing">
      <thead>
        <tr>
          <th></th>
          <th>Creature</th>
          <th :class="sortBy === 'health' && 'active'"><button class="content" @click="() => sortBy = 'health'"><img :src="HealthIcon" /><span>Health</span></button></th>
          <th :class="sortBy === 'damage' && 'active'"><button class="content" @click="() => sortBy = 'damage'"><img :src="MeleeDamageIcon" /><span>Damage</span></button></th>
          <th :class="sortBy === 'speed' && 'active'"><button class="content" @click="() => sortBy = 'speed'"><img :src="MovementSpeedIcon" /><span>Speed</span></button></th>
          <th :class="sortBy === 'price' && 'active'"><button class="content" @click="() => sortBy = 'price'"><img :src="GoldenNuggetIcon" /><span>Price</span></button></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(creature, idx) in shop.sort(sortCreatures)" :class="creature.price.gt(money.gold) && 'disabled'">
          <td><img :src="creature.icon" /></td>
          <td><span>{{ creature.name }}</span></td>
          <td><span :class="[isIncreasedStat(creature, 'health') && 'increase']">{{ creature.health }}</span></td>
          <td><span :class="[isIncreasedStat(creature, 'damage') && 'increase']">{{ creature.damage }}</span></td>
          <td><span :class="[isIncreasedStat(creature, 'speed') && 'increase']">{{ creature.speed }}</span></td>
          <td><button :disabled="creature.price.gt(money.gold)" @click="() => tryBuy(creature, idx)"><span>Buy</span><span>{{ creature.price }}</span><img :src="GoldenNuggetIcon" /></button></td>
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

  .events {
    display: flex;
    gap: .5rem;
    justify-content: space-between;
    flex-wrap: wrap;

    &>* {
      flex-grow: 1;
    }

    .event-img {
      width: 6rem;
      height: 6rem;
    }

    .info {
      padding: .25rem .5rem;
      background-color: rgb(var(--background-color));
      border-radius: .25rem;

      .headline {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: .5rem;
      }
      
      .stats {
        display: flex;
        gap: .5rem;

        .line {
          display: flex;
          gap: .5rem;
          flex-direction: column;
          align-items: center;

          img {
            width: 2rem;
            height: 2rem;
          }
        }
      }
    }
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
            justify-content: center;

            img {
              width: 2rem;
              height: 2rem;
            }
          }
        }
      }
    }

    tbody {
      tr {
        td {
          padding: .25rem;

          img {
            width: 3rem;
            height: 3rem;
          }

          button {
            border: .125rem solid rgb(var(--section-color));
            display: flex;
            gap: .5rem;
            margin-left: auto;
            align-items: center;

            img {
              width: 1.5rem;
              height: 1.5rem;
            }
          }
        }

        &.disabled {
          color: rgb(var(--text-disabled-color));

          button {
            background-color: rgb(var(--background-color));
          }
        }
      }
    }
  }
}
</style>
