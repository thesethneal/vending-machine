<template>
  <div>
    <item-component
      v-for="item in $store.state.products"
      :key="item.id"
      :item="item"
    ></item-component>
  </div>
</template>

<script>
import ItemComponent from '../components/ItemComponent.vue';

export default {
  components: {
    ItemComponent
  }
}
</script>

<style>
  
</style>