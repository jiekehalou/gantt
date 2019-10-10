<template>
  <div class="grandson" ref="grandson" ></div>
</template>
<script>
export default {
  name: "grandson",
  computed: {},
  created() {
    // console.log(this.$listeners);
     console.log('this.$attrs',this.$attrs);
  },
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

