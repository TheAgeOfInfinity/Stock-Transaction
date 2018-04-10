<template>
  <div class="container">
    <appHeader></appHeader>
    <div class="row">
      <div class="col-xs-12">
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>   
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
    components:{
      appHeader: Header,
    },
    created() {
      this.$store.dispatch('initStocks')
      console.log(this.$store)
    }
}
</script>

<style>
  body{
    padding: 30px;
  }
  .slide-enter-active{
    animation: slide-in 500ms ease-out  forwards;
  }
  .slide-leave-active{
    animation: slide-out 500ms ease-out  forwards;
  }
  @keyframes slide-in {
    from{
      transform: rotateY(90deg);
      opacity: 0;
    }
    to{
      transform: rotateY(0deg);
      opacity: 1;
    }
  }
  @keyframes slide-out {
    from{
      transform: rotateY(0deg);
      opacity: 1;
    }
    to{
      transform: rotateY(90deg);
      opacity: 0;
    }
  }
</style>
