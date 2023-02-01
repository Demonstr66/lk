<template>
    <app-user-profile />
</template>

<script>

import AppUserProfile from "@/views/app-user-profile";
export default {
  name: 'App',
  components: {AppUserProfile}
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: sans-serif;
  font-size: 14px;
  margin: 0;
  padding: 0;
  outline: none;
  border: none;
}
</style>