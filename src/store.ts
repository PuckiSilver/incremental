import { reactive } from "vue";
import { CreatureShopEntry, CreatureStats, CreatureType, Currency } from "./types";
import ElementIcon from '@/assets/money/228px-Element.webp';
import GoldenNuggetIcon from '@/assets/money/228px-Golden_Nugget.webp';
import CompyIcon from '@/assets/creatures/compy.webp';
import DilophosaurIcon from '@/assets/creatures/dilophosaur.webp';
import RaptorIcon from '@/assets/creatures/raptor.webp';

export const money = reactive({
  gold: new Currency(GoldenNuggetIcon, 'Gold', 5000),
  element: new Currency(ElementIcon, 'Element', 0),
});

export const creatures = reactive([
  [new CreatureStats(5, 2, 1), new CreatureStats(2, 4, 2), new CreatureStats(1, 3, 8)],
  [new CreatureStats(5, 4, 3)],
  [],
])

export const shop = reactive([
  [new CreatureShopEntry(5, 2, 1, 276), new CreatureShopEntry(2, 4, 2, 123), new CreatureShopEntry(1, 3, 8, 333)],
  [new CreatureShopEntry(5, 4, 3, 476)],
  [new CreatureShopEntry(1, 8, 7, 599)],
])

export const creatureTypes = [
    new CreatureType('Compy', CompyIcon),
    new CreatureType('Dilophosaur', DilophosaurIcon),
    new CreatureType('Raptor', RaptorIcon),
]

export const progress = reactive({});
