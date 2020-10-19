<template>
  <label class="hm-radio" :class="{'is-checked': label === model}">
    <span class="hm-radio_input">
      <span class="hm-radio_inner"></span>
      <input type="radio" class="hm-radio_original" :value="label" :name="name"
      v-model="model">
    </span>
    <span class="hm-radio_label">
      <slot></slot>
      <!-- 如果不传内容，就把label当内容显示 -->
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'HmRadio',
  inject: {
    RadioGroup: { // 当你不传的时候，默认为空
      default: ''
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    value: null,
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    isGroup () {
      // 用于判断radio是否被radioGroup包裹
      return !!this.RadioGroup
    },
    model: {
      get () {
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set (val) {
        this.$emit('input', val)
        this.isGroup ? this.RadioGroup.$emit('input', val) : this.$emit('input', val)
      }
    }
  }
}
</script>

<style lang='scss'>
.hm-radio {
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
  .hm-radio_input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .hm-radio_inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
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
        border-radius: 100%;
        background-color: #fff;
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform .15s ease-in;
      }
    }
    .hm-radio_original {
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
  .hm-radio_label {
    font-size: 14px;
    padding-left: 10px;
  }
}
.hm-radio.is-checked {
  .hm-radio_input {
    .hm-radio_inner {
      border-color: #409eff;
      background: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .hm-radio_label {
    color: #409eff;
}
}
</style>
