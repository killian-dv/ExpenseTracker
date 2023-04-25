<script>
    import { onMount } from "svelte";
    import ExpenseTable from "./components/ExpenseTable.svelte";
    import ExpenseCreate from "./components/ExpenseCreate.svelte";
    import ExpenseTotal from "./components/ExpenseTotal.svelte";
    import store from "./shared/ExpenseStore.js";
    import { db } from "./shared/firebase.js";
    import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

    let expenses = [];
    let expensesFirestore = [];

    onMount(async () => {
        const q = query(collection(db, "expenses"));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        });
        // const querySnapshot = getDocs(collection(db, "expenses"));
        // expensesFirestore = [];
        // querySnapshot.forEach((doc) => {
        //     expensesFirestore = [
        //         ...expensesFirestore,
        //         {
        //             id: doc.id,
        //             date: doc.data().date,
        //             category: doc.data().category,
        //             paymentType: doc.data().paymentType,
        //             amount: doc.data().amount,
        //             subtotal: doc.data().subtotal,
        //         }
        //     ]
        // });
        // db.collection("expenses").onSnapshot(collectionSnapshot => {
        //     expensesFirestore = [];
        //     collectionSnapshot.forEach(element => {
        //         expensesFirestore = [
        //             ...expensesFirestore,
        //             {
        //                 id: doc.id,
        //                 date: doc.data().date,
        //                 category: doc.data().category,
        //                 paymentType: doc.data().paymentType,
        //                 amount: doc.data().amount,
        //                 subtotal: doc.data().subtotal,
        //             }
        //         ]
        //     });
            console.log("expensesFirestore", expensesFirestore);
    //     })
    });

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
