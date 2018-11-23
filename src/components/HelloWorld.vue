<template>
	<div class="hello">
		<ul tabindex="1" @keyup="changeFocus($event)">
			<li :class="{'active':item.focus,'canOpera':item.canOpera}" v-for="item in renData[pageNum]">
				<template1 ref="t1" v-if="item.templateType==1" :value="[item.name,item.value[item.curVlaue],item.canOpera]"></template1>
				<template2 @changenum="change_num" ref="t2" v-else-if="item.templateType==2" :value="[item.name,item.curValue,item.canOpera]"></template2>
				<template3 ref="t3" v-else-if="item.templateType==3" :value="[item.name,item.curValue,item.canOpera]"></template3>
				<template4 ref="t4" v-else :value="[item.name,item.canOpera]"></template4>
			</li>
		</ul>
	</div>
</template>

<script>
	window.onload=function(){
		document.getElementsByTagName('ul')[0].focus();
	}
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
						canOpera: true
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
						canOpera: false
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
						canOpera: false
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
			//改变数据
			change_num(argu){
				if(argu==1){
					this.baseData[this.focusIndex].curValue++;
					console.log(this.baseData[this.focusIndex].curValue);
					console.log(this.renData[0][this.focusIndex].curValue);
				}else{
					this.baseData[this.focusIndex].curValue--;
				}
				this.sliceArr(this.baseData, this.stage);
			},
			//切割数组
			sliceArr(array, size) {
				for(let x = 0; x < Math.ceil(array.length / size); x++) {
					var start = x * size;
					var end = start + size;
					this.renData.push(array.slice(start, end));
				}
			},
			//键盘操作
			changeFocus(e) {
				//下键
				if(e.keyCode == 40) {
					this.baseData[this.focusIndex].focus = false;
					if(this.focusIndex == this.baseData.length - 1) {
						this.focusIndex = 0;
						this.baseData[0].focus = true;
						this.pageNum = 0;
					} else {
						for(let i = this.focusIndex + 1; i < this.baseData.length; i++) {
							if(i % this.stage == 0) {
								this.pageNum++;
							}
							if(this.baseData[i].canOpera) {
								this.focusIndex = i;
								break;
							}
						}
						this.baseData[this.focusIndex].focus = true;
					}

				} 
				//上键
				if(e.keyCode == 38) {
					this.baseData[this.focusIndex].focus = false;
					if(this.focusIndex == 0) {
						for(let i = this.baseData.length - 1; i >0; i--) {
							this.pageNum = this.renData.length - 1;
							if(this.baseData[i].canOpera) {
								this.focusIndex = i;
								break;
							}
						}
					} else {
						for(let i = this.focusIndex - 1; i >=0; i--) {
							if(i % this.stage == 0&&i!=0) {
								this.pageNum--;
							}
							if(this.baseData[i].canOpera) {
								this.focusIndex = i;
								break;
							}
						}
					}
					this.baseData[this.focusIndex].focus = true;
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