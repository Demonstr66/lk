<template>
  <div class="sheet">
    <slot />
  </div>
</template>

<script>
export default {
  name: "app-sheet"
}
</script>

<style scoped>
.sheet {
  box-sizing: border-box;
  background-color: #c1b5a738;
  border: 1px solid #8d8d8d;
  border-radius: 4px;
  padding: 1em;
  box-shadow: 2px 2px 5px 0px #80808091;
}
</style>