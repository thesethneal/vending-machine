<template>
  <div id="main-area">
    <products-component id="prod-area"/>
    <feed-component id="feed-money-area" />
    <funds-component id="fund-area" />
  </div>
  
</template>

<script>
import FeedComponent from './components/FeedComponent.vue';
import FundsComponent from './components/FundsComponent.vue';
import ProductsComponent from './components/ProductsComponent.vue';

export default {
  components: {
    FeedComponent,
    FundsComponent,
    ProductsComponent
  }

}
</script>

<style>
  #main-area {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
      "feed funds"
      "prod prod";
  }

  #feed-money-area {
    grid-area: feed;
  }

  #fund-area {
    grid-area: funds;
  }

  #prod-area {
    grid-area: prod;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

</style>