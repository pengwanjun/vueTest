<template>
	<div class="template2">
		<h1 :class="{'active':$store.state.helloWorld.baseData[value].canOpera}">{{$store.state.helloWorld.baseData[value].name}}：{{ $store.state.helloWorld.baseData[value].curValue }}</h1>
	</div>
</template>

<script>
	export default {
		name: 'template2',
		props: {
			value: Number
		},
		data() {
			return {}
		},
		methods: {
			changeData(param) {
				if(param == 37) {
					//左键
//					this.$emit('changenum', -1);
				} else {
					this.$store.state.helloWorld.baseData[this.value].curValue++;
					console.log(this.$store.state.helloWorld.baseData[this.value].curValue);
					//右键
//					this.$emit('changenum', 1);
				}
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>