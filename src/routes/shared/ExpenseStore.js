import { writable } from "svelte/store";

const store = writable([
    {
        id: 1,
        date: 3,
        paymentType: 'prélèvement',
        category: 'loyer',
        amount: 600,
        quantity: 1,
        subtotal: 600,
    },
    {
        id: 2,
        date: 1,
        paymentType: 'prélèvement',
        category: 'internet',
        amount: 20,
        quantity: 1,
        subtotal: 20,
    }
]);