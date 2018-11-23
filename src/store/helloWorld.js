
export default {
    state:{
        baseData: [{
						name: "picture mode",
						value: ["user", "vivid", "sport"],
						curVlaue: 0,
						templateType: 1,
						focus: true,
						canOpera: true,
						index: 0
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
						canOpera: true,
						index: 1
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
						canOpera: true,
						index: 2
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
						canOpera: true,
						index: 3
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
						canOpera: false,
						index: 4
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
						canOpera: false,
						index: 5
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
						canOpera: false,
						index: 6
					},
					{
						name: "Color Temperature",
						templateType: 4,
						subPage: false,
						canOpera: true,
						index: 7
					}
				]
    },
    mutations:{
        switch_dialog(state){//这里的state对应着上面这个state
            state.show = state.show?false:true;
            //你还可以在这里执行其他的操作改变state
        }
    },
    actions:{
        switch_dialog(context){//这里的context和我们使用的$store拥有相同的对象和方法
            context.commit('switch_dialog');
            //你还可以在这里触发其他的mutations方法
        },
    }
}