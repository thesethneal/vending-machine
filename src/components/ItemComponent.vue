<template>
  <div class="items">
    <h2>{{ item.name }}</h2>
    <p>{{ item.price }}</p>
    <p>{{ item.type }}</p>
    <p>{{ item.quantity }}</p>
    <img :src="item.img" />
    <button @click="purchase(item.id)">BUY!</button>
  </div>
</template>

<script>
export default {
  props: ['item'],
  methods: {
    purchase(id) {
      let product = this.$store.getters.getProduct(id);

      let currentQuantity = product.quantity;
      let price = product.price;
      let funds = this.$store.state.funds;

      if( (currentQuantity) > 0 && (funds >= price)) {
        this.$store.commit('DECREASE_FUNDS', price);
        this.$store.commit('DECREASE_INVENTORY', product.id);
      } else {
        alert('Something went wrong')
      }

    }
  }

}
</script>

<style>
  .items {
    width: 200px;
    margin: 20px;
    padding: 20px;
    border-radius: 40px;
    background-color: lightgreen;
  }

</style>