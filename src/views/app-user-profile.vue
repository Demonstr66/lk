<template>
  <app-page>
    <div class="profile">
      <div class="profile-block_left">
        <app-sheet>
          <user-profile-avatar/>
        </app-sheet>
      </div>
      <div class="profile-block_main">
        <app-sheet>
          <span class="block-title">
            Персональная информация
          </span>
          <user-profile-info/>
        </app-sheet>
        <app-sheet>
          <span class="block-title">
            Изменение пароля
          </span>
          <user-profile-password/>
        </app-sheet>
      </div>
<!--      <div>-->
<!--        <div>-->
<!--        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid blanditiis dicta, distinctio dolore dolores excepturi facilis fugiat hic nihil nostrum, quaerat quidem quod sit soluta sunt tempore unde? Aspernatur, dignissimos.-->
<!--        </div>-->
<!--        </div>-->
<!--      <div>-->
<!--        <div>-->
<!--        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid blanditiis dicta, distinctio dolore dolores excepturi facilis fugiat hic nihil nostrum, quaerat quidem quod sit soluta sunt tempore unde? Aspernatur, dignissimos.-->
<!--        </div>-->
<!--        </div>-->
    </div>
  </app-page>
</template>

<script>
import AppPage from "@/components/base/app-page";
import UserProfileAvatar from "@/components/user-profile/user-profile-avatar";
import UserProfileInfo from "@/components/user-profile/user-profile-info";
import UserProfilePassword from "@/components/user-profile/user-profile-password";
import AppSheet from "@/components/base/app-sheet";

export default {
  name: "app-user-profile",
  components: {AppSheet, UserProfilePassword, UserProfileInfo, UserProfileAvatar, AppPage}
}
</script>

<style lang="scss" scoped>
.profile {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  padding: 0 5px;

  & > div{
    margin: 5px;

    @media screen and (max-width: 1100px) {
      margin: 5px 0 !important;
    }
  }

  &-block {
    &_left {
      flex-basis: 35%;
      flex-grow: 0;
      flex-shrink: 0;

      @media screen and (max-width: 1100px) {
        flex-basis: 100%;
        flex-grow: 1;
      }
    }

    &_main {
      flex-grow: 1;
      text-align: center;

      & > div{
        margin-bottom: 5px;
      }


    }
  }
}
.block-title {
  font-size: x-large;
}
</style>