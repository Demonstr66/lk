<template>
  <div>
    <app-text-filed label="ФИО" required name="fullname"/>
    <app-text-filed label="Дата рождения" placeholder="ДД/ММ/ГГГГ" type="date" name="birthday"/>
    <app-text-filed label="E-mail" required name="email"/>
    <app-text-filed label="Город" name="city"/>
    <app-select v-model="selectedLanguages" :options="languages" multiple>
<!--      <template v-slot:item="{item}">-->
<!--        {{item.id}}-->
<!--      </template>-->
    </app-select>
    <app-text-filed name="phonenumber"  label="Телефон" v-mask="countryPhoneCodes.find(x => x.id == selectedPhoneCode).mask">
      <template v-slot:append>
        <app-select v-model="selectedPhoneCode" flat :options="countryPhoneCodes" label="country">
          <template v-slot:item="{item}">
            <div style="display: flex; align-items: center; pointer-events: none;">
              <img :src="getImageSrc(item.icon)" style="max-height: 2em; margin-right: 1em;"/>
              <span>{{item.code}}</span>
            </div>
          </template>
        </app-select>
      </template>
    </app-text-filed>
    <app-button color="success">
      Сохранить
    </app-button>
  </div>
</template>

<script>
import AppTextFiled from "@/components/base/app-text-filed";
import AppSelect from "@/components/base/app-select";
import AppButton from "@/components/base/app-button";
export default {
  name: "user-profile-info",
  components: {AppButton, AppSelect, AppTextFiled},
  data() {
    return {
      languages: [
        {id: 1, label: "Китайский"},
        {id: 2, label: "Английский"},
        {id: 3, label: "Испанский"},
        {id: 4, label: "Арабский"},
        {id: 5, label: "Французский"},
        {id: 6, label: "Португальский"},
        {id: 7, label: "Русский"},
        {id: 8, label: "Немецкий"},
      ],
      countryPhoneCodes: [
        {id: 1, code: "+7", mask: "(###) ### - ## - ##", country: "Россия", icon: 'assets/country icons/rus.png'},
        {id: 2, code: "+1", mask: "### - ### - ####", country: "США", icon: 'assets/country icons/usa.png'},
        {id: 3, code: "+55", mask: "### - ### - ###", country: "Бразилия", icon: 'assets/country icons/bra.png'},
        {id: 4, code: "+34", mask: "## ### - ## - ##", country: "Испания", icon: 'assets/country icons/esp.png'},
      ],
      selectedLanguages: [],
      selectedPhoneCode: 3,
    }
  },
  methods: {
    getImageSrc(src) {
      return require('../../' + src);
    }
  }
}
</script>

<style scoped>

</style>