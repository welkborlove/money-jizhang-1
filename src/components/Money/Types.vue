<template>
  <div>
    <ul class="types">
      <li :class="{[classPrefix+'-item']: classPrefix,selected: value==='-'}" @click="selectType('-')">支出</li>
      <li :class="{[classPrefix+'-item']: classPrefix,selected: value==='+'}" @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";


@Component
export default class Types extends Vue {
  @Prop(String) readonly value!: string;
  @Prop(String) classPrefix?: string;
   type = '-'; //'-'表示支出'+'表示收入
  selectType(type: string) {
    //type 只能是'-'和 '+'中的一个
    if (type !== "-" && type !== "+") {
      throw new Error("type is unknown");
    }
    this.type = type;   
  }
  @Watch('type')
  onTypeChanged(value:string){
    this.$emit('update:value',value)
  }
}

/* export default {
        name: 'Types',
        props: ['xxx'],
        data(){
          return {
            type: '-' //'-'表示支出，'+'表示收入
          }
        },
        mounted() {
          console.log(this.xxx)
        },
        methods: {
          selectType(type) { //type 只能是'-'和 '+'中的一个
           if (type !== '-' && type !== '+'){
             throw new Error('type is unknown')
           }
              this.type = type
          }
        }
    }; */
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.types {
  background: #808e9b;
  display: flex;
  text-align: center;
  font-size: 24px;
  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333;
    }
  }
}
</style>