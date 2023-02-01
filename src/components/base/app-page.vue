<template>
<main class="page-wrapper">
  <slot></slot>
</main>
</template>

<script>
export default {
  name: "app-page"
}
</script>

<style lang="scss" scoped>
.page-wrapper {
  display: block;
  margin: auto;
  max-width: 1100px;

  @media screen and (max-width: 1100px) {
    margin: 0 25px !important;
  }

  @media screen and (max-width: 600px) {
    margin: 0 10px !important;
  }
}
</style>