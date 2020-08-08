<template>
  <div class="content" v-on:click="emitRecipe()">
    <img v-bind:src="object.recipe.image" alt="" />
    <div class="information">
      <p>{{ object.recipe.label }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["object"],
  data() {
    return {
      name: this.object.recipe.label,
    };
  },
  methods: {
    alert: function() {
      alert(this.name);
    },
    emitRecipe(){
      this.$emit('emitRecipe', this.object);
    }
  },
  computed: {},
};
</script>
<style lang="scss" scoped>
.content {
  margin: 20px;
  display: flex;
  flex-direction: column;
  p {
    text-align: center;
  }
}
</style>
