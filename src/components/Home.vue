<template>
  <div class="site-wrap">
    <div class="card" v-for="article in articles">
      <img v-bind:src="article.thumbnail" v-on:click="readLocalStorage()"/>
      <span class="card_title">{{ article.title }}</span>
      <span class="card_athor">{{ article.author }}</span>
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        articles: [{}],
      }
    },
    mounted() {
      //We fill our state with localStorage data otherwise we call dumpData function.
      this.articles = JSON.parse(localStorage.getItem('topics')) ?
        JSON.parse(localStorage.getItem('topics')) : this.fillWithDumpData()
      localStorage.setItem('topics', JSON.stringify(this.articles));
    },
    methods: {
      readLocalStorage() {
        let newTopic = {author: 'New', title: 'New title'}
        this.articles.push(newTopic);
        console.log('READING')
      },
      //This function will excute and fill the localStorage with dump data, to be deleted once, addPost is done.
      fillWithDumpData() {
        let data = [{"id":1,"thumbnail":"https://picsum.photos/401/400","author":"Ayoub","title":"New topic","verified":true},{"id":2,"thumbnail":"https://picsum.photos/402/400","author":"Ayoub2","title":"New topic","verified":true},{"id":3,"thumbnail":"https://picsum.photos/403/400","author":"Ayoub3","title":"New topic","verified":false},{"id":4,"thumbnail":"https://picsum.photos/404/400","author":"Ayoub4","title":"New topic","verified":true},{"id":1,"thumbnail":"https://picsum.photos/405/400","author":"Ayoub","title":"New topic","verified":false}];
        return data;
      }
    }
  }
</script>


<style>
</style>
