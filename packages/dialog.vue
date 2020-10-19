<template>
  <transition name="dialog-fade">
      <!-- 对话框的遮罩层 .self: 只有点击自己才触发-->
    <div class="hm-dialog_warapper" v-show='visible' @click.self="handleClick">
        <div class="hm-dialog" :style="{width, marginTop: top}">
            <div class="hm-dialog_header">
                <slot name='title'>
                <span class="hm-dialog_title">
                    {{title}}
                </span>
                </slot>
                <button class="hm-dialog_headerbtn" @click="handleClick">
                    <i class="hm-icon-close"></i>
                </button>
            </div>
            <div class="hm-dialog_body">
                <!-- 默认插槽,由用户输入 -->
                <slot></slot>
            </div>
            <!-- 当有底部插槽的时候才渲染展示 -->
            <div class="hm-dialog_footer" v-if="$slots.footer">
                <!-- 具名插槽，由用户输入 -->
                <slot name='footer'></slot>
            </div>
        </div>
  </div>
  </transition>
</template>

<script>
export default {
  name: 'HmDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick () {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang='scss' scoped>
.hm-dialog_warapper {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: 0;
  overflow: hidden;
  z-index: 2001;
  background-color: rgba(0, 0, 0, .5);
  .hm-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
    box-sizing: border-box;
    width: 30%;
    &_header {
      padding: 20px 20px 10px;
      .hm-dialog_title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      };
      .hm-dialog_headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .hm-icon-close {
            color: #909399;
        }
      }
    }
    &_body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &_footer {
        padding: 10px 20px 20px;
        text-align: right;
        box-sizing: border-box;
        // scss里面的深度选择器: ::v-deep less里面的深度选择器: /deep/
        ::v-deep .hm-button:first-child {
            margin-right: 20px;
        }
    }
  }
}
.dialog-fade-enter-active {
    animation: run .5s;
}
.dialog-fade-leave-active {
    animation: run .5s reverse;
}
@keyframes run {
  0% {
    opacity: 0;
    transform: translateY(-30px)
  }
  100% {
    opacity: 1;
    transform: translateY(0px)
  }
}
</style>
