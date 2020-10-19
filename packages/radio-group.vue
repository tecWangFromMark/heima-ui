<template>
  <div class="hm-radio-group">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HmRadioGroup',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  provide () {
    return {
      RadioGroup: this // 将组建自己传给自己的子孙后代
    }
  }
}
</script>

<style>

</style>
