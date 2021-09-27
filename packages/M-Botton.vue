<template>
  <button @click="handleclick"
  class="m-button" 
  :class='[`m-button-${type}`,{"is-plain":plain,
  "is-round":round,
  "is-circle":circle,
  "is-disabled":disabled
  }]' :disabled='disabled'>
      <i :class="icon"></i>
      <!-- 在这里，如果没有插槽就相当于没有插入的文字，那么就不能再在
      i标签和span中间加上空格 -->
      <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
    name:"MyButton",
    props:{
        type:{
            type:String,
            default:'default'
        },
        // default: '0'
        plain:{
            type:Boolean,
            default:false
        },
        round:{
            type:Boolean,
            default:false
        },
        circle:{
            type:Boolean,
            default:false
        },
        icon:{
            type:String,

        },
        disabled:{
            type:Boolean,
            default:false
        }
    }, 
    methods:{
        handleclick(e){
            // 页面展示的其实是一个个的按钮组件，当你按下时触发的是组件的点击事件
            // 然后用这个触发的点击事件来触发你定义的那个子组件上的点击事件
            this.$emit('click',e)
            // 这个e代表的就是点击事件
            // console.log(e)
        }
    },
    created(){
        // console.log(this.type)
        // console.log(this.$slots)
    }
}
</script>

<style lang="scss" scoped>
    .m-button{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #ffffff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    //禁止元素的文字被选中
    -moz-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    &:hover,
    &:focus{
      color: #409eff;
      border-color: #c6e2ff;
      background-color: #ecf5ff;
    }
    }
    .m-button-primary{
    color:#fff;
    background-color: #409eff;
    border-color: #409eff;
    &:hover,
    &:focus{
        background: #66b1ff;
        background-color: #66b1ff;
        color: #fff;
        }
    }
    .m-button-success{
    color:#fff;
    background-color: #67c23a;
    border-color: #67c23a;
    &:hover,
    &:focus{
        background: #85ce61;
        background-color: #85ce61;
        color: #fff;
        }
    }
    .m-button-info{
    color:#fff;
    background-color: #909399;
    border-color: #909399;
    &:hover,
    &:focus{
        background: #a6a9ad;
        background-color: #a6a9ad;
        color: #fff;
        }
    }
    .m-button-warning{
    color:#fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
    &:hover,
    &:focus{
        background: #ebb563;
        background-color: #ebb563;
        color: #fff;
        }
    }
    .m-button-danger{
    color:#fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
    &:hover,
    &:focus{
        background: #f78989;
        background-color: #f78989;
        color: #fff;
        }
    }
    // 朴素按钮样式
    .m-button.is-plain{
    &:hover,
    &:focus{
        background: #fff;
        border-color: #489eff;
        color: #409eff;
    }
    }
    .m-button-primary.is-plain{
    color: #409eff;
    background: #ecf5ff;
    &:hover,
    &:focus{
        background: #409eff;
        border-color: #409eff;
        color: #fff;
    }
    }
    .m-button-success.is-plain{
    color: #67c23a;
    background: #c2e7b0;
    &:hover,
    &:focus{
        background: #67c23a;
        border-color: #67c23a;
        color: #fff;
    }
    }
    .m-button-info.is-plain{
    color: #909399;
    background: #d3d4d6;
    &:hover,
    &:focus{
        background: #909399;
        border-color: #909399;
        color: #fff;
    }
    }
    .m-button-warning.is-plain{
    color: #e6a23c;
    background: #f5dab1;
    &:hover,
    &:focus{
        background: #e6a23c;
        border-color: #e6a23c;
        color: #fff;
    }
    }
    .m-button-danger.is-plain{
    color: #f56c6c;
    background: #fbc4c4;
    &:hover,
    &:focus{
        background: #f56c6c;
        border-color: #f56c6c;
        color: #fff;
    }
    }
    // round属性
    .m-button.is-round{
    border-radius: 20px;
    padding: 12px 23px;
    }
    // circle属性
    .m-button.is-circle{
    border-radius: 50%;
    padding: 12px;
    }
    // icon配套样式
    // 加号表示紧邻着的兄弟元素，这里就表示紧邻着i表签的span元素
    .m-button [class*=m-icon-]+span{
    margin-left: 5px;
    }
    // disabled属性
    .m-button.is-disabled{
    cursor: no-drop;
    }
</style>>

