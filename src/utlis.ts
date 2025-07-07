import { MAX_METRIC_PREFIX, METRIC_PREFIXES } from "./consts";

export const toHumanReadable = (amount: number, kpow: number): string => {
    const amount_prefix = Math.floor((amount ? Math.log(amount) : 0) / 6.907755278982137); // log1000(amount)
    const full_prefix = kpow + amount_prefix;
    const amt = (amount / Math.pow(1000, amount_prefix));
    return `${Math.round(amt * 10) / 10}${METRIC_PREFIXES[Math.min(full_prefix, MAX_METRIC_PREFIX)]}`;
}
