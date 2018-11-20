<template>
  <div>
    <h1>Index-Component</h1>
    <div>
      <h1>[ 总共需要<span>{{ totalPrice }}</span>元 ]</h1>
    </div>
    <hr>
    <div is="componentA"></div>
    <div is="componentB"></div>
  </div>
</template>

<script>
  import Apple from '@/components/Apple.vue'
  import Orange from '@/components/Orange.vue'
  import {mapGetters} from 'vuex'
  export default {
    components: {
      componentA: Apple,
      componentB: Orange
    },
    computed: mapGetters([
      'totalPrice'
    ])
  }
</script>

<style scoped>

</style>
