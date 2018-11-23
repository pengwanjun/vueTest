<template>
	<div class="hello">
		<ul tabindex="1" @keyup="changeFocus($event)">
			<li :class="{'active':item.focus,'canOpera':item.canOpera}" v-for="item in renData[pageNum]">
				<template1 ref="t1" v-if="item.templateType==1" :value="[item.name,item.value[item.curVlaue],item.canOpera]"></template1>
				<template2 ref="t2" v-else-if="item.templateType==2" :value="[item.name,item.curValue,item.canOpera]"></template2>
				<template3 ref="t3" v-else-if="item.templateType==3" :value="[item.name,item.curValue,item.canOpera]"></template3>
				<template4 ref="t4" v-else :value="[item.name,item.canOpera]"></template4>
			</li>
		</ul>
	</div>
</template>

<script>
	import template1 from '@/components/template1'
	import template2 from '@/components/template2'
	import template3 from '@/components/template3'
	import template4 from '@/components/template4'
	export default {
		name: 'HelloWorld',
		components: {
			template1,
			template2,
			template3,
			template4
		},
		data() {
			return {
				baseData: [{
						name: "picture mode",
						value: ["user", "vivid", "sport"],
						curVlaue: 0,
						templateType: 1,
						focus: true,
						canOpera: true
					},
					{
						name: '张一',
						value: {
							minValue: 0,
							maxValue: 100
						},
						curValue: 88,
						templateType: 2,
						focus: false,
						canOpera: true
					},
					{
						name: '李二',
						value: {
							minValue: 0,
							maxValue: 100
						},
						curValue: 36,
						templateType: 3,
						focus: false,
						canOpera: false
					},
					{
						name: '齐三',
						value: {
							minValue: 0,
							maxValue: 100
						},
						curValue: 88,
						templateType: 2,
						focus: false,
						canOpera: true
					},
					{
						name: '王四',
						value: {
							minValue: 0,
							maxValue: 100
						},
						curValue: 36,
						templateType: 3,
						focus: false,
						canOpera: false
					},
					{
						name: '孙五',
						value: {
							minValue: 0,
							maxValue: 100
						},
						curValue: 88,
						templateType: 2,
						focus: false,
						canOpera: true
					},
					{
						name: '包六',
						value: {
							minValue: 0,
							maxValue: 100
						},
						curValue: 36,
						templateType: 3,
						focus: false,
						canOpera: true
					},
					{
						name: "Color Temperature",
						templateType: 4,
						subPage: false,
						canOpera: true
					}
				],
				focusIndex: 0,
				renData: [],
				stage: 5,
				pageNum: 0
			}
		},
		mounted() {
			this.sliceArr(this.baseData, this.stage);
		},
		methods: {
			//切割数组
			sliceArr(array, size) {
				for(let x = 0; x < Math.ceil(array.length / size); x++) {
					var start = x * size;
					var end = start + size;
					this.renData.push(array.slice(start, end));
				}
			},
			//循环数组将其他选项的active置为false
			toFalse(fIndex) {
				for(let i = 0; i < this.baseData.length; i++) {
					if(i != fIndex) {
						this.baseData[i].focus = false;
					}
				}
			},
			down() {

			},
			//键盘操作
			changeFocus(e) {
				//下键
				if(e.keyCode == 40) {
					if(this.focusIndex == this.baseData.length - 1) {
						this.focusIndex = 0;
						this.baseData[0].focus = true;
						this.baseData[this.baseData.length - 1].focus = false;
						this.pageNum = 0;
					} else {						
						this.baseData[this.focusIndex].focus = false;
						this.baseData[this.focusIndex + 1].focus = true;
						this.focusIndex++;
						if(this.focusIndex % this.stage == 0) {
							this.pageNum++;
						}
					}
				} //上键
				if(e.keyCode == 38) {
					if(this.focusIndex == 0) {
						this.focusIndex = this.baseData.length - 1;
						this.baseData[this.baseData.length - 1].focus = true;
						this.baseData[0].focus = false;
						this.pageNum = this.renData.length - 1;
					} else {
						if((this.focusIndex) % this.stage == 0) {
							this.pageNum--;
						}
						this.baseData[this.focusIndex].focus = false;
						this.baseData[this.focusIndex - 1].focus = true;
						this.focusIndex--;
					}
				}
				//左右键
				if(e.keyCode == 39 || e.keyCode == 37) {
					let temType = this.baseData[this.focusIndex].templateType;
					if(temType == 1) {
						this.$refs.t1[0].keyFuc(e.keyCode);
					} else if(temType == 2) {
						this.$refs.t2[0].changeData(e.keyCode);
					} else if(temType == 3) {
						this.$refs.t3[0].changeData(e.keyCode);
					} else {
						this.$refs.t4[0].keyFuc(e.keyCode);
					}
				}
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1 {
		font-weight: normal;
		margin-top: 50px;
	}
	
	ul {
		outline: none;
	}
	
	li {
		margin-top: 50px;
		border: 1px solid transparent;
		color: #b0b0b0;
	}
	
	li.active {
		border: 1px solid #FF3300;
	}
	
	li.canOpera {
		color: #333;
	}
</style>