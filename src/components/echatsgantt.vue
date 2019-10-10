<template>
  <div class="echatsgantt" ref="echatsgantt"></div>
</template>
<script>
import echatsgantt from "@/assets/echatsgantt.js";
export default {
  name: "AppUser",
  computed: {},
  mounted() {
    this.initChart();

    // let a = ["aa", "bb", "cc", "dd"];
    // let b = [
    //   { name: "小明", sex: "男", key: "aa" },
    //   { name: "小王", sex: "男", key: "dfdsfds" },
    //   { name: "小的", sex: "男", key: "bb" },
    //   { name: "小花", sex: "男", key: "cc" },
    //   { name: "小胖", sex: "男", key: "dfjshdf" },
    //   { name: "小瘦", sex: "男", key: "dd" }
    // ];


    // let resultArr = [];
    // b.forEach(element => {
    //   if (a.includes( element.key)) {
    //     resultArr.push(element);
    //   }
    // });
    // console.log('resultArr',resultArr)
    

  },
  methods: {
    initChart() {
      let rawData = require("../../public/json/test.json");
      let tar = this.$refs["echatsgantt"];
      echatsgantt(rawData, tar, myChart => {
        window.onresize = () => {
          myChart && myChart.resize();
        };
      });
    }
  }
};
</script>
<style lang='less' scoped>
.echatsgantt {
  height: 100%;
  width: 100%;
}
</style>

