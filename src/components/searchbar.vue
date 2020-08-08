<template>
  <div>
    <div class="container">
      <div class="searchInput">
        <input size="50" type="text" v-model="item" v-on:keyup.enter="search" />
        <button v-on:click="search">Search</button>
      </div>
     
    </div>
  </div>
</template>
<script>
export default {
  props:['isMainPage'],
  data() {
    return {
       results: "", // list of objects
      item: "",
      appID: "e02e640a",
      appKey: "e9aff772f7a983d129f86f22b80e700f",
    };
  },
  methods: {
     search: function() {
      if(this.isMainPage){
        this.$router.push('/search='+ this.item);
      }
      else{
           fetch(this.request)
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
          })
          .then((response) => {
            return this.updateRecipes(response.hits);
          });
      }
     
    },
    updateRecipes: function(data) {
      this.$emit("updateRecipes", data);
    },
  },
   computed: {
    request: function() {
      return `https://api.edamam.com/search?q=${this.item}&app_id=${this.appID}&app_key=${this.appKey}&to=100`;
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  
  margin: 100px auto 0px;
  
  .searchInput {
    display: flex;
    justify-content: center;
  }
  button {
    transition: background-color 0.3s linear;
    &:hover {
      background-color: red;
    }
  }
  input {
    font-size: 30px;
  }
}
</style>
