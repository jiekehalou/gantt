<template>
  <div v-ripple.foo="'#7B68EE'" class="ripple">{{msg}}<slot></slot></div>
</template>
<script lang='ts'>
// import { Component, Vue } from "vue-property-decorator";
import { Vue } from "vue-property-decorator";
export default Vue.extend({
  components: {
    // TableCom
  },
  data() {
    return {
      msg: "fanxing"
    };
  },
  created() {
    class Person<U> {
      who: U;
      constructor(who: U) {
        this.who = who;
      }
      say(code: U): string {
        return this.who + " :i am " + code;
      }
    }
    let preson = new Person<object>([1, 2, 3]);
    console.log("preson", preson.say([5, 6]));
    console.log("this.$slots", this.$slots);
  }
  //泛型约束 泛型主要是为了约束, 或者说缩小类型范围, 如果不能约束功能, 就代表不需要用泛型:
  //   function echo<T extends {name:string}>(input: T): T {
  //     console.log(input.name); // 正确
  //     return input;
  // }
});
</script>
<style>
.ripple{
  
}
</style>