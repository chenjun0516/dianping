<template>
  <div class="shopcar">
  		<div class="content-left"></div>
  		<div class="content-right"></div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .shopcar
    display: flex
    position: fixed
    bottom: 0
    left: 0
    width: 100%
    height: 60px
    background: green
    .content-left
    	flex: 1
    	background: black
    .content-right
    	flex: 0 0 100px
</style>
