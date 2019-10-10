<template>
  <div></div>
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
      msg: "typescript"
    };
  },
  created() {
    interface User {
      /**
       * 用户信息
       */
      username: string;
      id: string;
      token: string;
      avatar: string;
      role: string;
    }
    let user: User = {
      username: "man",
      id: "string",
      token: "string",
      avatar: "string",
      role: "string"
    };
    console.log("user", user);
  },
  mounted() {
    // console.log('mounted')
  },
  computed: {
    // test: {
    //   // 需要标注有 `this` 参与运算的返回值类型
    //   get(): string {
    //     return this.msg
    //   },
    //   set(val: string) {
    //     this.msg = val
    //   }
    // }
    test(): any {
      return this.msg;
    }
  },
  watch: {},
  methods: {}
});
</script>