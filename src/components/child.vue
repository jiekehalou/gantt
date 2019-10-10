<template>
  <div class="child" ref="child">
    <Grandson v-on="$listeners" v-bind="$attrs" />
  </div>
</template>
<script>
import Grandson from "@/components/grandson.vue"
export default {
  name: "child",
  data(){
    return {
        msg:"typescript",
    }
  },
  computed: {},
  created() {
     console.log('created',this.msg)
    console.log(this.$listeners);
    this.$listeners.go('sss')
    // console.log(this.$attrs);
  },
  components: {Grandson},
  methods: {
   
  }
};
</script>
<style lang='less' scoped>
.echatsgantt {
  height: 100%;
  width: 100%;
}
</style>

