// 这是整个包的入口

// 定义install方法
import Button from '../packages/button.vue'
import Checkbox from '../packages/checkbox.vue'
import CheckboxGropu from '../packages/checkbox-group.vue'
import Dialog from '../packages/dialog.vue'
import Radio from '../packages/radio.vue'
import RadioGroup from '../packages/radio-group.vue'
import Input from '../packages/input.vue'
import Switch from '../packages/switch.vue'
import Form from '../packages/form.vue'
import FormItem from '../packages/form-item.vue'

// 存储所有的组件
const components = [
  Button,
  Checkbox,
  CheckboxGropu,
  Dialog,
  Radio,
  RadioGroup,
  Input,
  Switch,
  Form,
  FormItem
]
const install = (Vue) => {
  // 全局注册所有的组件
  components.forEach(item => {
    Vue.component(item.name, item)
  })
}
// 判断是否直接引入文件,如果是，就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
