<template>
  <div id="app">
   <div class="tab">
    <button @click.stop="tabChange('echatsgantt')">echarts-gantt</button>
    <button @click.stop="tabChange('ganttpanel')">svg-gantt</button>
    <button @click.stop="tabChange('child')">listen</button>
    <button @click.stop="tabChange('tstest')">tstest</button>
    <button @click.stop="tabChange('testest2')">testest2</button>
    <button @click.stop="tabChange('est6text')">est6text</button>
    <button @click.stop="tabChange('fanxing')">泛形</button>
   </div>
  <transition name="fadeIn">
        <component v-bind:is="currentTabComponent" v-bind="$attrs" @click="add" @go="add" title="ssss" dragable></component>
  </transition>
  </div>
</template>
<script>
import ganttpanel from "@/components/ganttpanel.vue"
import echatsgantt from "@/components/echatsgantt.vue"
import child from "@/components/child.vue"
import tstest from "@/components/tstest.vue" 
import testest2 from "@/components/testest2.vue" 
import est6text from "@/components/est6text.vue" 
import fanxing from "@/components/fanxing.vue"
export default {
  name: "app",
  data(){
    return {
      currentTabComponent:echatsgantt,
      tabs:{
        ganttpanel,
        echatsgantt,
        child,
        tstest,
        testest2,
        est6text,
        fanxing
      }
    }
  },
  components: {ganttpanel,echatsgantt,child,tstest},
  mounted() {},
  methods:{
    add(arg){
      console.log(arg)
      console.log('11')
    },
    tabChange(name){
      this.currentTabComponent=this.tabs[name];
      // console.log('name',name,this.tabs[name]);
    }
  }
};
</script>
<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  .tab{
    button{
      margin:0 10px;
      text-emphasis: center;
    }
  }
}
</style>
