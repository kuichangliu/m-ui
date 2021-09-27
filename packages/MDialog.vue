<template>
  <div>
    <transition name="dialog_fade">
      <div class="m-dialog_wrapper" v-show="visable" @click.self="handleClose">
          <div class="m-dialog" :style="{'width':width,'margin-top':top}">
              <div class="m-dialog_header">
                  <!-- 具名插槽 -->
                  <slot name='title'>
                    <span class="m-dialog_title">{{title}}</span>
                  </slot>
                  <button class="m-dialog_headerbtn" @click="handleClose">
                      <i class="m-icon-close"></i>
                  </button>
              </div>
              <div class="m-dialog_body">
                  <!-- 默认插槽 -->
                  <slot></slot>
              </div>
              <!-- 如果给底部的footer具名插槽传内容了,那么就显示，如果没有就不显示 -->
              <div class="m-dialog_footer" v-if="$slots.footer">
                 <slot name="footer">
                 </slot>
              </div>
          </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
    name:'MyDialog',
    // props是父组件传进来的不能直接改，说白了它是单向数据流
    // 要父组件自己改
    props:{
        title:{
            type:String,
            default:'标题'
        },
        width:{
            type:String,
            default:'50%'
        },
        top:{
            type:String,
            default:"15vh"
        },
        visable:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        handleClose(){
            // 在这里不能直接改props当中的visible，要让父组件自己改
            this.$emit('update:visable',false)
        }
    }
}
</script>

<style lang="scss" scoped>   

  .dialog_fade-enter-active{
      animation: fade .3s;
  }
  .dialog_fade-leave-active{
      animation: fade .3s reverse;
  }
  @keyframes fade {
      0%{
          opacity: 0;
          transform: translateY(-20px);
      }
      100%{
          opacity: 1;
          transform: translateY(0);
      }
  }
  .m-dialog_wrapper{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
    z-index: 2001;
    background-color: rgba(0,0,0,0.5);
  .m-dialog{
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.3);
    box-sizing: border-box;
    width: 30%;
    &_header{
      padding: 20px 20px 10px;
      .m-dialog_title{
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .m-dialog_headerbtn{
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .one-icon-close{
          color:909399
        }
      }
    }
    &_body{
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &_footer{
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
        .my-button:first-child{
        margin-right: 20px;
      }
    }
  }
}
.dialog-fade-enter-active{
  animation: fade .3s;
}
.dialog-fade-leave-active{
  animation: fade .3s reverse;
}
@keyframes fade{
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
}
</style>