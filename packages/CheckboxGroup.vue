<template>
  <div class="m-checkbox-group">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:"CheckboxGroup",
    props:{
        value:{
            type:Array
        },
    },
    provide(){
        return {
            CheckboxGroup:this
        }
    }
}
</script>

<style>

</style>