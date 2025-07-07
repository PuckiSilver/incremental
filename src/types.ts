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

    subtractGN(gn: GiantNumber) {
        return this.subtract(gn.amount, gn.kpow);
    }

    subtract(amount: number, kpow: number = 0): boolean {
        // TODO: implement lol
        if (this.amount < amount) {
            return false;
        }
        this.amount -= amount;
        return true;
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

export class CreatureType {
    name: string;
    icon: string;

    constructor(name: string, icon: string) {
        this.name = name;
        this.icon = icon;
    }
}

export class CreatureStats {
    health: number;
    damage: number;
    speed: number;

    constructor(health: number, damage: number, speed: number) {
        this.health = health;
        this.damage = damage;
        this.speed = speed;
    }
}

export class CreatureShopEntry extends CreatureStats {
    price: number;

    constructor(health: number, damage: number, speed: number, price: number) {
        super(health, damage, speed);
        this.price = price;
    }

    toStats(): CreatureStats {
        return new CreatureStats(this.health, this.damage, this.speed);
    }
}
