import { toHumanReadable } from "./utlis";

export class GiantNumber {
    amount: number;
    kpow: number;

    constructor(amount: number, kpow: number = 0) {
        this.amount = amount;
        this.kpow = kpow;
    }

    toHumanReadable(): string {
        return toHumanReadable(this.amount, this.kpow);
    }

    sub(gn: GiantNumber) {
        this.amount -= gn.amount; // TODO: Implement!
        return this;
    }

    gt(gn: GiantNumber) {
        return this.amount > gn.amount; // TODO: Implement!
    }

    ge(gn: GiantNumber) {
        return this.gt(gn) || this.eq(gn);
    }

    lt(gn: GiantNumber) {
        return !(this.gt(gn) || this.eq(gn));
    }

    eq(gn: GiantNumber) {
        return this.amount === gn.amount; // TODO: Implement!
    }

    add(gn: GiantNumber) {
        this.amount += gn.amount; // TODO: Implement!
        return this;
    }

    cmp(gn: GiantNumber) {
        return this.gt(gn) ? 1 : this.eq(gn) ? 0 : -1;
    }

    toString() {
        return this.toHumanReadable();
    }
}

export class Currency extends GiantNumber {
    icon: string;
    name: string;

    constructor(icon: string, name: string, amount: number, kpow: number = 0) {
        super(amount, kpow);
        this.icon = icon;
        this.name = name;
    }
}

export class Creature {
    name: string;
    icon: string;
    health: GiantNumber;
    damage: GiantNumber;
    speed: GiantNumber;
    price: GiantNumber;
    count: GiantNumber;

    constructor(name: string, icon: string, health: GiantNumber, damage: GiantNumber, speed: GiantNumber, price: GiantNumber, count: GiantNumber) {
        this.name = name;
        this.icon = icon;
        this.health = health;
        this.damage = damage;
        this.speed = speed;
        this.price = price;
        this.count = count;
    }

    merge(other: Creature) {
        other.health.gt(this.health) && (this.health = other.health);
        other.damage.gt(this.damage) && (this.damage = other.damage);
        other.speed.gt(this.speed) && (this.speed = other.speed);
        other.price.gt(this.price) && (this.price = other.price);
        this.count.add(other.count);
    }

    getOneVOneDamage() {
        return this.damage;
    }
}
