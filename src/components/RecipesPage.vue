<template>
  <div class="container">
    <div>
      <searchbar
        v-bind:isMainPage="false"
        v-on:updateRecipes="updateRecipeArray($event)"
      ></searchbar>
    </div>
    <div class="container" v-if="!isDisplayRecipePage">
      <div class="recipes-container">
        <recipeCard
          v-for="object in recipeArray"
          :key="object.recipe.label"
          v-bind:object="object"
          v-on:emitRecipe="updateSelectedRecipe($event)"
        ></recipeCard>
      </div>
    </div>
    <div class="container" v-if="isDisplayRecipePage">
      <RecipeInfoPage
        v-bind:object="selectedRecipe"
        v-on:emitDisplay="updateDisplayRecipe()"
      ></RecipeInfoPage>
    </div>
  </div>
</template>

<script>
import searchbar from "./searchbar.vue";
import recipeCard from "./recipeCard.vue";
import RecipeInfoPage from "./RecipeInfoPage.vue";
export default {
  components: {
    searchbar,
    recipeCard,
    RecipeInfoPage
  },
  data() {
    return {
      recipeArray: null,
      isDisplayRecipePage: false,
      selectedRecipe: null
    };
  },
  methods: {
    updateRecipeArray(data) {
      this.recipeArray = data;
    },
    updateSelectedRecipe(data){
      alert('updated selected recipe');
      this.selectedRecipe = data;
      this.updateDisplayRecipe();
    },
    updateDisplayRecipe(){
      this.isDisplayRecipePage = !this.isDisplayRecipePage;
    }
  },

  created: {},
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
}
.recipes-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
</style>
