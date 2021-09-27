<template>
  <div>
      <div class="m-switch" @click="changeActive" :class="{'is-checked':value}">
        <input type="checkbox"
        class="m-switch_input"
        :name="name"
        ref="input">
          <span class="m-switch_core" ref='core'>
              <span class="m-switch_button"></span>
          </span>
      </div>
  </div>
</template>

<script>
export default {
    name:"MSwitch",
    props:{
        value:{
            type:Boolean,
            default:false
        },
        activecolor:{
            type:String,
            default:''
        },
        inactivecolor:{
            type:String,
            default:''
        },
        name:{
          type:String,
          default:''
        }
    },
    methods:{
        changeActive(){
            this.$emit('input',!this.value)
            // value值改了之后得重新调设置颜色的函数。
            // 如果加这个this.$nextTick就会出现渲染的颜色和对应的数值不匹配
            // 这都是Vue的异步更新机制导致的，虽然数据发生了变化，但是页面并没有更新，
            // 我们让他更新的时候颜色发生变化
            // 
            this.$nextTick(()=>{
                 this.setColor()
                this.$refs.input.checked = this.value
            })
        },
        // 设置颜色
        setColor(){
           if(this.activecolor||this.inactivecolor){
            let color = this.value?this.activecolor:this.inactivecolor
            console.log(color)
            this.$refs.core.style.borderColor = color
            this.$refs.core.style.backgroundColor = color
        } 
        }
    },
    // 初始挂载的时候，显示的颜色
    mounted(){
        // 修改我们的开关的颜色
        this.setColor();
        this.$refs.input.checked = this.value
    }
}
</script>

<style lang='scss' scope>
    .m-switch{
    display: inline-block;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    vertical-align: middle;
    .m-switch_core{
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    .m-switch_button{
      position:absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
      }
    }
  }
  // 选中样式
  .is-checked {
    .m-switch_core{
      border-color: #409eff;
      background-color: #409eff;
      .m-switch_button {
        transform: translateX(20px);
      }
    }
  }
  // 隐藏input标签
  .m-switch_input{
    position:absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
</style>