<script>
    let date;
    let paymentType;
    let category;
    let amount = "00.00";
    let quantity;
    $: subtotal = amount * quantity;

    function createExpense() {
        console.log("createExpense");
    }

</script>
<style>

</style>

<form on:submit|preventDefault={createExpense}>
    <div class="form-group">
        <label for="date">Date</label>
        <input type="date" class="form-control" id="date" placeholder="dd/mm/yyyy" bind:value={date}>
    </div>
    <div class="form-group">
        <label for="paymentType">Méthode de paiement</label>
        <select class="form-control" id="paymentType" bind:value={paymentType}>
          <option value="cash">Espèce</option>
          <option value="card">Carte</option>
          <option value="direct-debit">Prélèvement</option>
          <option value="cheque">Chèque</option>
        </select>
      </div>
      <div class="form-group">
        <label for="category">Catégorie</label>
        <select class="form-control" id="category" bind:value={category}>
          <option value="rent">Location</option>
          <option value="electricity">Électricité</option>
          <option value="food">Nourriture</option>
          <option value="phone">Téléphone</option>
          <option value="gas">Gaz</option>
        </select>
      </div>
      <div class="form-group">
        <label for="amount">Montant</label>
        <input type="text" class="form-control" id="amount" placeholder="montant" bind:value={amount} />
      </div>
      <div class="form-group">
        <label for="quantity">Quantité</label>
        <input type="number" class="form-control" id="quantity" placeholder="1" bind:value={quantity} />
      </div>
      <button type="submit" class="btn btn-success">Créer</button>
</form>