
import { Vue } from "vue-property-decorator";
// import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import "@/assets/css/reset.less"
import directives from "@/directives/ripple" 
Vue.directive('ripple', directives)
new Vue({
  render: h => h(App),
}).$mount('#app')
 