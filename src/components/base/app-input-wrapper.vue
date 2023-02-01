<template>
  <div
      class="input-wrapper"
      :class="{focus: focus, flat: flat}"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "app-input-wrapper",
  props: {
    focus: {
      type: Boolean,
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.input-wrapper {
  width: 100%;
  box-sizing: border-box;
  margin: auto;
  border-radius: 6px;
  border: 1px solid #939393;
  box-shadow: 0 0 2px 0px #a5a5a5;
  background-color: white;
  min-height: 47px;
  display: flex;
  flex-direction: row;


  &.focus{
     box-shadow: 0 0 2px 0px #0080ff;
     border-color: #0080ff;
   }

  &.flat {
    border: none !important;
    background-color: inherit !important;
    box-shadow: none !important;
  }
}
</style>