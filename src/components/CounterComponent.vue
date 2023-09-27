<template>
  <h1>Counter-Vuex</h1>
  <h2>Direct Access: {{ $store.state.count }}</h2>
  <h2>Computed:{{ countComputed }}</h2>

  <button @click="increment">+1</button>

  <button @click="incrementBy">+5</button>
  <button @click="randomInt">Random</button>

  <h1>MapState</h1>
  <h2>mapState:{{ count }}</h2>
  <h2>lastmutations: {{ lastmutations }}</h2>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    countComputed() {
      return this.$store.state.count;
    },
    ...mapState(['count', 'lastmutations']),
    // ...mapState({
    //   count: state=> state.count,
    //   lastmutations:state => state.lastmutations
    // })
  },
  methods: {
    increment() {
      this.$store.commit('increment');
    },
    incrementBy(){
      this.$store.commit('incrementBy', 5)
    },
    ...mapActions({
      randomInt:'incrementRandomInt'
    })
    /*
    incrementRI(){
      this.$store.dispatch('incrementRandomInt')
    }
    */
  },
};
</script>

<style>
</style>