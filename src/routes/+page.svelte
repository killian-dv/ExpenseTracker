<script>
    import ExpenseTable from "./components/ExpenseTable.svelte";
    import ExpenseCreate from "./components/ExpenseCreate.svelte";
    import ExpenseTotal from "./components/ExpenseTotal.svelte";
    import store from "./shared/ExpenseStore.js";

    let expenses = [];

    store.subscribe( data => {
        expenses = data;
    })

</script>
<style>
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        flex-direction: column;
        margin: 2rem;
    }
    h1 {
        text-align: center;
        color: #dc042d;
    }
</style>

<main>
    <h1>ExpenseTracker</h1>
    <ExpenseTotal />
    <ExpenseCreate />
    <ExpenseTable expenses={expenses}/>
</main>
