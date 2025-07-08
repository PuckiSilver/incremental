import { reactive } from "vue";
import { Creature, Currency, GiantNumber } from "./types";
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
  new Creature('Compy', CompyIcon, new GiantNumber(10), new GiantNumber(10), new GiantNumber(10), new GiantNumber(50), new GiantNumber(1)),
])

export const shop = reactive([
  new Creature('Compy', CompyIcon, new GiantNumber(8), new GiantNumber(8), new GiantNumber(14), new GiantNumber(50), new GiantNumber(1)),
  new Creature('Dilophosaur', DilophosaurIcon, new GiantNumber(12), new GiantNumber(18), new GiantNumber(10), new GiantNumber(120), new GiantNumber(1)),
  new Creature('Dilophosaur', DilophosaurIcon, new GiantNumber(15), new GiantNumber(15), new GiantNumber(11), new GiantNumber(123), new GiantNumber(1)),
  new Creature('Raptor', RaptorIcon, new GiantNumber(20), new GiantNumber(19), new GiantNumber(17), new GiantNumber(1000000000000), new GiantNumber(1)),
  new Creature('Raptor', RaptorIcon, new GiantNumber(20), new GiantNumber(19), new GiantNumber(17), new GiantNumber(1000000000000), new GiantNumber(1)),
])

export const shopEvents = reactive([
  new Creature('Raptor', RaptorIcon, new GiantNumber(200), new GiantNumber(109), new GiantNumber(170), new GiantNumber(123467324000060), new GiantNumber(1)),
  new Creature('Dilophosaur', DilophosaurIcon, new GiantNumber(1), new GiantNumber(999), new GiantNumber(1), new GiantNumber(1), new GiantNumber(1)),
  new Creature('Dilophosaur', DilophosaurIcon, new GiantNumber(1), new GiantNumber(999), new GiantNumber(1), new GiantNumber(12), new GiantNumber(1)),
])

export const progress = reactive({});
