<template>
  <div class="template1">
    <h1 :class="{'active':value[2]}">{{value[0]}}：{{value[1]}}</h1>
  </div>
</template>

<script>
export default {
  name: 'template1',
  props: {
    value: Array
  },
  data () {
    return {
    }
  },
  methods:{
  	keyFuc(param){
  		if(param==37){
  			//左键
  			console.log('picture modez左移');
  		}else{
  			//右键
  			console.log('picture modez右移');
  		}
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
</style>
