<template>
  <div class="Orange">
    <h1>Orange-Component</h1>
    <h1>桔子数量:
      <button @click="orangeDecrement"><h2>[ - ]</h2></button>
      您选了<span>{{ orangeTotal }}</span>斤
      <button @click="orangeIncrement"><h2>[ + ]</h2></button>
    </h1>
    <h1>桔子单价:
      <button @click="orangePriceDecrement"><h2>[ - ]</h2></button>
      <span>{{ orangePrice }}</span>元/斤
      <button @click="orangePriceIncrement"><h2>[ + ]</h2></button>
    </h1>
    <hr>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    computed: mapGetters([
      'orangeTotal',
      'orangePrice'
    ]),
    methods: mapActions([
      'orangeIncrement',
      'orangeDecrement',
      'orangePriceIncrement',
      'orangePriceDecrement',
    ])
  }
</script>

<style scoped>

</style>
