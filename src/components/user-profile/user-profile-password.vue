<template>
  <div>
    <app-text-filed type="password" required label="Текущий пароль"/>
    <app-text-filed type="password" required label="Новый пароль"/>
    <app-text-filed type="password" required label="Подтверждение пароля"/>
    <app-button>
      Сменить пароль
    </app-button>
  </div>
</template>

<script>
import AppTextFiled from "@/components/base/app-text-filed";
import AppButton from "@/components/base/app-button";
export default {
  name: "user-profile-password",
  components: {AppButton, AppTextFiled}
}
</script>

<style scoped>

</style>