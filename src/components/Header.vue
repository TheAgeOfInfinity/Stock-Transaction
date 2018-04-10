<template>
  <nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <router-link to="/"><a class="navbar-brand">Stock Trader</a></router-link>
    </div>

    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <router-link to="/portfolio" tag="li" activeClass="active"><a>Portfolio</a></router-link>
        <router-link to="/stocks" tag="li" activeClass="active"><a>Stocks</a></router-link>
        <router-link to="/trend" tag="li" activeClass="active"><a>Trend</a></router-link>
      </ul>
      <strong class="navbar-text navbar-right">Funds: {{funds | currency}}</strong>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#" @click="endDay">End Day</a></li>
        <li class="dropdown" :class="{open: isDropOpen}" @click="isDropOpen = !isDropOpen">
          <a href="#" class="dropdown-toggle">Save & Load<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li @click="saveData"><a href="#">Save data</a></li>
            <li @click="loadData"><a href="#">Load data</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</template>

<script>
export default {
  data(){
    return {
      isDropOpen: false
    }
  },
  computed:{
    funds(){
      return this.$store.getters.funds
    }
  },
  methods:{
    endDay(){
      this.$store.dispatch('randomizeStocks')
      console.log(this.$store.state)
    },
    saveData(){
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks,
      }
      this.$http.put('data.json', data)
    },
    loadData(){
      this.$store.dispatch('loadData')
      console.log(this.$store)
    }
  }
}
</script>
