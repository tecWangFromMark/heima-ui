<template>
  <div class="hm-switch" @click="handleClick" :class="{'is-checked': value}">
      <input type="checkbox"
      class="hm-switch_input"
      :name="name"
      ref='input'>
    <span class="hm-switch_core" ref="core">
      <span class="hm-switch_btn"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'HmSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.setColor()
  },
  methods: {
    async handleClick () {
      this.$emit('input', !this.value)
      // 数据修改后，等待DOM更新，再修改按钮的颜色
      await this.$nextTick()
      this.setColor()
    },
    setColor () {
      if (this.activeColor || this.inactiveColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        // console.log(color)
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
        // console.log(this.$refs.input.checked)
        this.$refs.input.checked = this.value
      }
    }
  }
}
</script>

<style lang='scss'>
.hm-switch {
    display: inline-flex;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
    vertical-align: middle;
    .hm-switch_input {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: 0;
      opacity: 0;
    }
    .hm-switch_core {
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
      transition: border-color .3s, background-color .3s;
      vertical-align: middle;
      .hm-switch_btn {
        position: absolute;
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
.hm-switch.is-checked {
  .hm-switch_core {
    border-color: #409eff;
    background-color: #409eff;
    .hm-switch_btn {
      transform: translateX(20px);
    }
  }
}
</style>
