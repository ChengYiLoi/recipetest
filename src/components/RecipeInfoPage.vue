<template>
  <div>
    <h1>Recipe Page</h1>
    <button v-on:click='alertt()'>Click</button>
    <button v-on:click='emitDisplay()'>Back to recipes</button>
    <img v-bind:src="this.object.recipe.image" alt="">

  </div>
</template>
<script>
export default {
  props:['object'],
  data() {
    return {
    };
  },
  methods: {
    alertt(){
      alert(this.object.recipe.label);
    },
    emitDisplay(){
      this.$emit('emitDisplay');
    }
  },
  computed: {
  
  },
};
</script>
<style lang="scss" scoped>

</style>
