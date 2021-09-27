// 整个包的入口
// 将所有的组件引入
import MyButton from './M-Botton.vue'
import MyDialog from './MDialog.vue'
import MInput from './Input.vue'
import MSwitch from './Switch.vue'
import MRadio from './Radio.vue'
import RadioGroup from './RadioGroup.vue'
import CheckBox from './CheckBox.vue'
import CheckboxGroup from './CheckboxGroup.vue'
import MForm from './From.vue'
import ItemForm from './ItemForm.vue'
import './fonts/iconfont.css'
const components = [MyButton,MyDialog,MInput,MSwitch,MRadio,RadioGroup
,CheckBox,CheckboxGroup,MForm,ItemForm]
const install = function(Vue){
     // 在这里需要全局注册所有的组件
    components.forEach((item)=>{
        Vue.component(item.name,item)
    })
}

if(typeof window !=='undefined'&&window.Vue){
    install(window.Vue)
}
export default{
   install
}