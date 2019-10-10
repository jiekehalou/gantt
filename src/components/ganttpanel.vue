<template>
  <div id="ganttpanel" class="ganttpanel">
    <div v-html="list" ></div>
  </div>
</template>
<script>
// import zrender from "zrender";
export default {
  name: "app",
  components: {},
  data() {
    return {
      cellWidth:46,
      cellHeight:36,
      list:"",
      jsondata: [
        { id: 1},
      ]
    };
  },
  created(){
    let list=[];
    for(var i=0;i<24;i++){
        list.push({ id: i+1})
    }
    this.jsondata=list;
  },
  mounted() {
  
    let list=this.initSvgGrid();
    this.list=list;
    // console.log(list);
  },
  methods: {
    initSvgGrid() {
      let arr=[...this.jsondata];
       let cellWidth=this.cellWidth;
      let cellHeight=this.cellHeight;
      let svgwidth=arr.length*cellWidth;
      let s = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width=${svgwidth}>`;
            //  stroke-dasharray='5,5'
      let svgs = arr.map((item,index) => {
        let color=index%2===0?"rgb(123,201,111,.3)":"#fff";
        return `
         <g transform="translate(${(index)*46}, 0)"
       >
        <rect
          class="day"
          width=${cellWidth}
          height=${cellHeight}
          fill=${color}
          data-count=${index}
          data-date="2018-09-04"
        ></rect><text x="50%" y="50%" fill="red">${index}</text></g>`;
      });
      s+=svgs.join("");
      s +="</svg>";
      return s;
    }
  }
};
</script>
<style lang="less">
.no-wrap {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ganttpanel {
  width: auto;
  height: 100%;
  margin: 10px 10px 10px 60px;
  .panel-row {
    height: 36px;
    .panel-cell {
      box-sizing: border-box;
      display: inline-block;
      vertical-align: top;
      height: 36px;
      width: 46px;
      border-bottom: 1px dotted #ccc;
      border-right: 1px dotted #ccc;
    }
  }
}
</style>
