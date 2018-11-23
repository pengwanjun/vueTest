
import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import hello_world from './helloWorld.js';//引入某个store对象

export default new vuex.Store({
    modules: {
        helloWorld: hello_world
    }
})
