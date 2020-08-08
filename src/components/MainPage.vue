<template>
  <div>
      <div class="banner">
      <img src="../assets/hero.jpg" alt="">
    </div>
    <searchbar v-bind:isMainPage=true></searchbar>
  </div>
</template>

<script>
import searchbar from './searchbar.vue'

export default {
  components: {
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
div{
  height: 100%;
  .container {
  margin: 10px 40px;
  display: grid;
  grid-template-columns: repeat(5, auto);
}
}

</style>
