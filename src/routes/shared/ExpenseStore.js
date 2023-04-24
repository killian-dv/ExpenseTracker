import { writable } from "svelte/store";
import { tweened } from "svelte/motion";
import { cubicOut } from "svelte/easing";

const store = writable([
    {
        id: 1,
        date: "2023-04-3",
        paymentType: 'prélèvement',
        category: 'loyer',
        amount: 600,
        quantity: 1,
        subtotal: 600,
    },
    {
        id: 2,
        date: "2023-04-1",
        paymentType: 'prélèvement',
        category: 'internet',
        amount: 20,
        quantity: 1,
        subtotal: 20,
    }
]);

export const totalTweenStore = tweened(0, {easing: cubicOut, delay: 800, duration: 500});
export default store;