<template>
  <div class="site-wrap" v-if="logged">
    <div v-bind:class="className(article)" v-for="article in articles">
      <img v-bind:src="article.thumbnail"/>
      <span class="card_title">{{ article.title }}</span>
      <span class="card_athor">{{ article.author }}</span>
    </div>
  </div>
  <div v-else>
    <LoggingForm />
  </div>
</template>


<script>

import LoggingForm from './LoggingForm'

export default {
  components: {
    LoggingForm
  },
  data() {
    return {
      articles: [{}],
      logged: true
    }
  },
  beforeCreate() {
    //To be implemented.
  },
  mounted() {
    //If localStorage logged variable is true, the list of articles along with delete/edit feature would be visisible.
    //If the localStorage logged variable is false, a form authentification is displayed.
    this.logged = localStorage.getItem('logged') ? (localStorage.getItem('logged') == 'true') : this.logged
    console.log('OK', this.logged == false)
    console.log('OK', this.logged)
    this.articles = JSON.parse(localStorage.getItem('topics')) ? JSON.parse(localStorage.getItem('topics')) : this.articles
  },
  methods: {
    className(article) {
      if(article.verified)
        return 'card verified'
      return 'card notverified'
    }
  }
}
</script>


<style>
</style>

