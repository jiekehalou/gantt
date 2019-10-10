<template>
  <div class="child" ref="child"></div>
</template>
<script>
export default {
  name: "child",
  data() {
    return {};
  },
  computed: {},
  created() {
    const obj = {
        a:1,
      toString() {
        return "abc";
      }
    };
    const sym = Symbol(obj);
    console.log('sym',sym)
    let obj2={a:1,b:2,[Symbol('s')]:3}; console.log(Reflect.ownKeys(obj2))
    console.log(Object.getOwnPropertySymbols(obj2))
    console.log(Object.getOwnPropertyNames(obj2))
  
  },
  components: {},
  methods: {}
};
</script>
<style lang='less' scoped>
.echatsgantt {
  height: 100%;
  width: 100%;
}
</style>

