<template>
  <label class="m-radio" :class="{'is-checked':label===model?true:false}">
      <span class="m-radio_input">   
              <span class="m-radio_inner">
                  <input type="radio" 
                  class="m-radio_original"
                  :value='label'
                  :name='name'
                  v-model="model">
                
              </span>
      </span>
      <span class="m-radio_label">
          <slot>
            <span>{{label}}</span>
          </slot>
          <!-- 下面这是如果没有传内容进来，那么就显示label，其实和上面写在里面当成默认值差不多 -->
          <!-- <template v-if="!$slots.default">{{label}}</template> -->
      </span>
  </label>
</template>

<script>
export default {
    name:'MRadio',
    inject:{
      RadioGroup:{
        default:''
      }
    },
    props:{
        label:{
        type:[String,Number,Boolean],
        default:''
        },
        value:null,
        name:{
            type:String,
            default:''
        }
    },
    computed:{
        model:{
            get(){
              // 这里有可能返回的是group的值也有可能是自身的值
              return this.isGroup?this.RadioGroup.value:this.value
            },
            set(value){
               this.isGroup?this.RadioGroup.$emit('input',value):this.$emit('input',value)
            }
        },
        isGroup(){
          return !!this.RadioGroup
        }
       
    }
}
</script>

<style lang='scss'>
 .m-radio{
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 30px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    .m-radio_input{
      white-space: nowrap;
      cursor: pointer;
      outline: none;
      display: inline-block;
      line-height: 1;
      position: relative;
      vertical-align: middle;
      .m-radio_inner{
        border: 1px solid #dcdfe6;
        border-radius: 100%;
        width: 14px;
        height: 14px;
        background-color: #fff;
        position: relative;
        cursor: pointer;
        display: inline-block;
        box-sizing: border-box;
        &:after{
          width: 4px;
          height: 4px;
          border-radius: 100%;
          background-color: #fff;
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%) scale(0);
          transition: transform .15s ease-in;
        }
      }
      .m-radio_original{
        opacity: 0;
        outline: none;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0px;
        right: 0;
        bottom: 0;
        margin: 0;
      }
    }
    .m-radio_label{
      font-size: 14px;
      padding-left: 10px;;
    }
  }
  // 选中的样式
  .m-radio.is-checked{
    .m-radio_input{
      .m-radio_inner{
        border-color: #409eff;
        background-color: #409eff;
        &:after{
          transform: translate(-50%,-50%) scale(1);
        }
      }
    }
    .m-radio_label{
      color:#409eff;
    }
  }
</style>