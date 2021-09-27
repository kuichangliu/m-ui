<template>
      <div class="m-input" :class="{'m-input_suffix':showIcon}"> 
          <!-- 这里的逻辑就是如果传了showPassword,那么判断显示不显示
            如果没有showPassword，那么直接用type -->
          <input :placeholder="placeholder" :type="showPassword?(passWordVisible?'text':'password'):type" :name='name' :disabled='disabled' class="m-input_inner" :class="{'is-disabled':disabled}"
          :value="value" @input="handleInput">
          <span class="m-input_suffix" v-if="showIcon">
              <i class="m-icon-cancel" v-if="clearable&&value" @click="clear"></i>
              <i class="m-icon-visible" v-if="showPassword" @click="show" :class="{'m-icon-visible-active':passWordVisible}"></i>
          </span>
      </div>
</template>

<script>
export default {
    name:"m-input",
    data(){
        return{
            // 用于控制密码是否显示
            passWordVisible:false
        }
    },
    props:{
        placeholder:{
            type:String,
            default:""
        },
        type:{
            type:String,
            default:'text'
        },
        name:{
            type:String,
            default:""
        },
        disabled:{
            type:Boolean,
            default:false
        },
        value:{
            type:String,
            default:""
        },
        clearable:{
            type:Boolean,
            default:false
        },
        showPassword:{
            type:Boolean,
            default:false
        }
    },
    computed:{
        showIcon(){
            return this.clearable||this.showPassword
        }
    },
    methods:{
        // 事件函数的参数，在ev中包含了事件触发的参数，比如在click事件中包含了
        // e.target.value等
        handleInput(e){
            this.$emit('input',e.target.value)
        },
        // 点小叉号是触发的事件，清空内容
        'clear'(){
            // 这里可以再次借用一下input事件，input事件本来就是用来改变
            // 父组件的数据的,可以直接让这个click事件触发input事件，然后给它传个空值
            this.$emit('click')
        },
        show(){
            this.passWordVisible=!this.passWordVisible
        }
    }
}
</script>

<style lang="scss" scope>
.m-input{
    width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-block;
    .m-input_inner{
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      outline: none;
      padding: 0 15px;
      transition: border-color .2s cubic-bezier(.645,045,.355,1);
      width: 100%;

      &:focus{
        outline: none;
        border-color: #409eff;
      }
      // input禁用样式
      &.is-disabled{
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        color: #c0c4cc;
        cursor:not-allowed;
      }
    }
  }
  .m-input_suffix{
    .m-input_inner{
      padding-right: 30px;
    }
    .m-input_suffix{
      position: absolute;
      right: 10px;
      height: 100%;
      top: 0;
      line-height: 40px;
      text-align: center;
      color: #c0c4cc;
      transition: all .3s;
      z-index: 900;
      i{
        color: #c0c4cc;
        font-size: 14px;
        cursor: pointer;
        transition: color .2s cubic-bezier(.645,.045,.355,1);
      }
      .m-icon-visible-active{
      color: blue;
        }
    }
  }
</style>
