<template>
 <div>
    <label class="m-checkbox" :class="{'is-checked':ischecked}">
          <span class="m-checkbox_input">
              <span class="m-checkbox_inner"></span>
              <input type="checkbox" 
              class="m-checkbox_original"
              :value="label"
              v-model="model"
              >
          </span>
          <span class="m-checkbox_label">
              <slot>
                  <span>{{label}}</span>
              </slot>
          </span>
      </label>
 </div>
</template>

<script>
export default {
 name:'CheckBox',
 props:{
     value:null,
     label:{
         type:String,
         default:''
     }
 },
 computed:{
     model:{
         get(){
             return this.isGroup?this.CheckboxGroup.value:this.value
         },
         set(newv){
             this.isGroup?this.CheckboxGroup.$emit('input',newv):this.$emit('input',newv)
         }
     },
     isGroup(){
         return !!this.CheckboxGroup
     },
     ischecked(){
        //如果是group包裹，判断label是否再model中
        // 这个includes返回的也是布尔值。
        return this.isGroup?this.model.includes(this.label):this.model
     }
 },
 inject:{
     CheckboxGroup:{
         default:''
     }
 }
}
</script>

<style lang='scss'>
 .m-checkbox{
    color: #606266;
    font-weight: 500;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    user-select: none;
    margin-right: 30px;
    .m-checkbox_input{
      white-space: nowrap;
      cursor: pointer;
      outline: none;
      display: inline-block;
      line-height: 1;
      position: relative;
      vertical-align: middle;
      .m-checkbox_inner{
        display: inline-block;
        position: relative;
        border: 1px solid #dcdfe6;
        border-radius: 2px;
        box-sizing: border-box;
        width: 14px;
        height: 14px;
        background-color: #fff;
        z-index: 1;
        transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s,cubic-bezier(.71,-.46,.29,1.46);
        &:after{
          box-sizing: content-box;
          content: '';
          border: 1px solid #ffffff;
          border-left: 0;
          border-top: 0;
          height: 7px;
          left: 4px;
          position: absolute;
          top: 1px;
          transform: rotate(45deg) scaleY(0);
          width: 3px;
          transition: transform .15s ease-in .05s;
          transform-origin: center;
        }
      }
      .m-checkbox_original{
        opacity: 0;
        outline: none;
        position: absolute;
        left: 10px;
        margin: 0;
        width: 0;
        height: 0;
        z-index: -1;
      }
    }
    .m-checkbox_label{
      display: inline-block;
      padding-left: 10px;
      line-height: 19px;
      font-size: 14px;
    }
  }
  // 选中的样式
  .m-checkbox.is-checked{
    .m-checkbox_input{
      .m-checkbox_inner{
        background-color: #409eff;
        border-color: #409eff;
      }
      &:after{
        transform: rotate(45deg) scaleY(1);
      }
    }
    .m-checkbox_label{
      color: #409eff;
    }
  }
</style>