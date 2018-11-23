<template>
	<div class="template2">
		<h1 :class="value[2]">{{value[0]}}：{{ value[1] }}</h1>
	</div>
</template>

<script>
	export default {
		name: 'template2',
		props: {
			value: Array
		},
		data() {
			return {}
		},
		methods: {
			changeData(param) {
				if(param == 37) {
					//左键
					this.$emit('changenum', -1);
				} else {
					//右键
					this.$emit('changenum', 1);
				}
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>