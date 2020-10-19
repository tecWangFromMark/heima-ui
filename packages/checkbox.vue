<template>
  <label class="hm-checkbox" :class="{'is-checked': isChecked}">
    <span class="hm-checkbox_input">
      <span class="hm-checkbox_inner"></span>
      <input type="checkbox" class="hm-checkbox_original" :name="name" v-model="model" :value="label">
    </span>
    <span class="hm-checkbox_label">
      <slot></slot>
      <!-- 如果不传内容，就把label当内容显示 -->
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'HmCheckBox',
  inject: {
    CheckboxGroup: {
      default: ''
    }
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    isGroup () {
      return !!this.CheckboxGroup
    },
    model: {
      get () {
        return this.isGroup ? this.CheckboxGroup.value : this.value
      },
      set (value) {
        console.log(this.isGroup)
        this.isGroup ? this.CheckboxGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    isChecked () {
      // 如果是group包裹,判断label是否在model中
      // 如果没有group包裹,直接使用label
      return this.isGroup ? this.model.includes(this.label) : this.model
    }
  }
}
</script>

<style lang='scss'>
.hm-checkbox {
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
  -ms-user-select: none;
  .hm-checkbox_input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .hm-checkbox_inner {
      border: 1px solid #dcdfe6;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        background-color: #fff;
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform .15s ease-in;
      }
    }
    .hm-checkbox_original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
  .hm-checkbox_label {
    font-size: 14px;
    padding-left: 10px;
  }
}
.hm-checkbox.is-checked {
  .hm-checkbox_input {
    .hm-checkbox_inner {
      border-color: #409eff;
      background: #409eff;
      &:after {
        transform: rotate(45deg) scale(1);
      }
    }
  }
  .hm-checkbox_label {
    color: #409eff;
}
}
</style>
