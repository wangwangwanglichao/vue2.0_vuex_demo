<template>
  <div>
    <h1>Apple-Component</h1>
    <h1>苹果数量:
      <button @click="appleDecrement"><h2>[ - ]</h2></button>
      您选了<span>{{ appleTotal }}</span>斤
      <button @click="appleIncrement"><h2>[ + ]</h2></button>
    </h1>
    <h1>苹果单价:
      <button @click="applePriceDecrement"><h2>[ - ]</h2></button>
      <span>{{ applePrice }}</span>元/斤
      <button @click="applePriceIncrement"><h2>[ + ]</h2></button>
    </h1>
    <hr>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    computed: mapGetters([
      'appleTotal',
      'applePrice'
    ]),
    methods: mapActions([
      'appleDecrement',
      'appleIncrement',
      'applePriceDecrement',
      'applePriceIncrement',
    ])
  }

</script>

<style scoped>

</style>
