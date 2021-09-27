<template>
  <div class="m-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name:'RadioGroup',
    provide(){
     return{
       RadioGroup:this
     }
    },
    props:{
      // radio-group接收到了value值
      // 将来还需要触发当前组件的input事件
      // provide与inject context
      value:null,
    }
}
</script>

<style>

</style>