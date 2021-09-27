<template>
  <div class="m-form-item">
      <label class="m-from-item_label">{{label}}</label>
      <div class="m-from-item_content">
        <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
    name:"ItemFrom",
    props:{
      label:{
        type:String,
        default:''
      },
      inject:['From']
    }
}
</script>

<style lang='scss' scope>
.m-form-item{
    margin-bottom: 25px;
    .m-form-item_label{
      text-align: right;
      vertical-align: middle;
      float: left;
      font-size: 14px;
      color: #606266;
      line-height: 40px;
      padding: 0 12px 0 0;
      box-sizing: border-box;
    }
    .m-form-item_content{
      line-height: 40px;
      position: relative;
      font-size: 14px;
      overflow: hidde;
    }
  }
</style>