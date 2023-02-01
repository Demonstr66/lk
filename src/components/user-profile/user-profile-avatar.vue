<template>
  <div class="avatar">
    <div class="container">
      <img src="@/assets/avatar-default.png" alt="User Photo"/>
    </div>
    <div class="avatar-tools">
      <app-button>Загрузить</app-button>
      <app-button color="danger">Удалить</app-button>
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/base/app-button";
export default {
  name: "user-profile-avatar",
  components: {AppButton}
}
</script>

<style lang="scss" scoped>
.avatar {
  text-align: center;
  & img {
    max-width: 100%;
    border: 1px solid #9b9b9b;
    border-radius: 50%;
    background-color: white;
  }

  & .container {
    overflow: hidden;
    margin: 10px;
  }

  &-tools {
    display: flex;
    @media screen and (max-width: 1100px) {
      flex-wrap: wrap;
    }
  }
}
</style>