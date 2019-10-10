<template>
  <div>
    <button type="primary" @click="msgBtn">{{msg}}</button>
    {{test}}
  </div>
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
    // ts中基础类型有如下几种:boolean / number / string / object / 数组 / 元组 / 枚举 / any / undefined / null / void / never,
    // let n:string|number
    // let numbers:number[] = [1,2,3,4,5];
    // number|string代表联合类型
    interface A {
      a: number;
      b: string;
    }
    let obj: A = { a: 123, b: "456" };
    // console.log('obj',obj)

    let array: object = [12, 321];
    const IS_TABLE: boolean = false;

    // console.log(typeof array )
    // console.log(typeof IS_TABLE,IS_TABLE)

    // 1.枚举(enum)
    enum Color {
      Red = 1,
      Green = 2,
      Blue = 4
    }
    console.log(Color["Red"]);
    console.log(Color);

    //any(任意类型)

    //void 一般出现在函数中, 用来标记函数没有返回值
    //never 示不可达, 用文字还真不好描述, 主要使用在throw的情况下:

    //   function error():never{
    //     throw '错了!';
    // }

    //高级类型入门

    interface Article {
      title?: string; //非必填(?)
      count: number;
      content: string;
      fromSite: string;
    }

    const article: Article = {
      // // title: ,
      count: 9999,
      content: "xxx...",
      fromSite: "baidu.com"
    };

    //用接口定义函数
    // 声明接口
    interface Core {
      (n: number, s: string): [number, string];
    }
    // 声明函数遵循接口定义
    const core: Core = (a, b) => {
      return [a, b];
    };
    let s = core(1, "b");
    console.log(s);

    //用接口定义类
    // 定义
    interface Animate {
      head: number;
      body: number;
      foot: number;
      eat(food: string): void;
      say(word: string): string;
    }

    // implements
    class Dog implements Animate {
      head = 1;
      body = 1;
      foot = 1;
      eat(food: string) {
        console.log(food);
      }
      do(th:string){
         console.log(th);
      }
      say(word: string) {
        return word;
      }
    }
    let dog=new Dog();
    // Readonly
    type A1  = {a:number, b:string}
    type A2 = Readonly<A> // {readonly a: number;readonly b: string;}
    let a3:A2={
      a:1,
      b:'',
    }
    type A4=keyof A1;
    let a5:A4="a"
    console.log('a5;',a5)

   

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
  watch: {
    msg(val: any) {
      console.log("watch", val);
    }
  },
  methods: {
    msgBtn(ev: any) {
      this.msg = "点击了typescript";
      console.log("点击事件", ev);
    }
  }
});
</script>