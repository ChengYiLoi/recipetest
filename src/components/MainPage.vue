<template>
  <div>
    <searchbar v-on:updateRecipes="changeRecipes($event)"></searchbar>
    <div class="container" v-if="!isDisplayRecipe">
      <recipeCard
        v-for="object in recipeArray"
        :key="object.recipe.url"
        v-bind:object="object"
        v-on:emitRecipe='updateSelectedRecipe($event)'
      ></recipeCard>
    </div>
    <div class="container" v-if="isDisplayRecipe">
      <recipePage v-bind:object='selected' v-on:emitDisplay="updateDisplayRecipe()"></recipePage>
    </div>
  </div>
</template>

<script>
import searchbar from './searchbar.vue'
import recipeCard from "./recipeCard.vue";
import recipePage from './recipepage.vue';
export default {
  components: {
    recipeCard,
    recipePage,
    searchbar
  },
  data() {
    return {
      selected: '',
      isDisplayRecipe : false,
      recipeArray: null
    };
  },
  methods:{
    updateSelectedRecipe(object){
      this.selected = object;
      this.updateDisplayRecipe();
    },
    updateDisplayRecipe(){
       this.isDisplayRecipe = !this.isDisplayRecipe;
    },
     changeRecipes: function(data) {
      this.recipeArray = data;
    },
  },
  computed:{
   
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin: 10px 40px;
  display: grid;
  grid-template-columns: repeat(5, auto);
}
</style>
