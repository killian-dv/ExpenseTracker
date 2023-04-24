<script>
    import { totalTweenStore } from "../shared/ExpenseStore";
    import store from "../shared/ExpenseStore.js";

    let total = 0

    store.subscribe( data => {
        total = data.reduce((acc, curr) => {
            return acc + curr.subtotal;
        }, 0);
        totalTweenStore.set(total);
    })
</script>

<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Total des dépenses: {$totalTweenStore}</h5>
    </div>
  </div>