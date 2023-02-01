<template>
    <button class="btn" tabindex="0" :class="{danger: color === 'danger', success: color === 'success'}">
      <slot></slot>
    </button>
</template>

<script>
export default {
  name: "app-button",
  props: {
    color: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  display: block;
  width: 100%;
  height: 40px;
  font-weight: 600;
  border-radius: 4px;
  border: .2em solid #56abff;
  background-color: white;
  cursor: pointer;
  text-transform: uppercase;
  transition: ease-in-out .15s;
  color: darken(#56abff, 20%);

  &.text {
    border: none;
  }

  &:hover {
    border: .2em solid;
    background-color: rgb(200 227 255 / 79%);
    transition: ease-in-out .15s;
  }
  &:active, &:focus {
    box-shadow: 0 0 3px 0 #56abff;
    transition: ease-in-out .1s;
  }

  &.danger {
    border-color: #ff5656;
    color: darken(#ff5656, 20%);
    &:hover {
      border: .2em solid;
      background-color: rgba(255, 200, 200, 0.79);
    }
    &:active, &:focus {
      box-shadow: 0 0 3px 0 #ff5656;
    }
  }

  &.success {
    border-color: #2ea800;
    color: darken(#2ea800, 20%);
    &:hover {
      border: .2em solid;
      background-color: rgba(206, 255, 200, 0.79);
    }
    &:active, &:focus {
      box-shadow: 0 0 3px 0 #2ea800;
    }
  }
}
</style>