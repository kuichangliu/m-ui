<template>
  <div class="m-from">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:'From',
    props:{
      model:{
        type:Object,
        required:true
      }
    },
    LableWidth:{
      type:String,
      default:'80px'
    },
    provide(){
      return{
        From:this
      }
    }
}
</script>

<style>

</style>