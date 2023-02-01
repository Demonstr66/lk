<template>
  <div class="text-field">
    <label v-if="label" class="text-field-label" :class="{'text-field-label_required': required}">
      <span>{{label}}</span>
      <app-input-wrapper :focus="focus">
        <div style="max-width: 150px; background-color: #d1d1d1; border-radius: 5px 0 0 5px;">
          <slot name="append"></slot>
        </div>
        <input
            :type="type"
            class="text-field-input"
            :required="required"
            :placeholder="placeholder"
            :name="name"

            @focus="focus = true"
            @blur="focus = false"
        />
      </app-input-wrapper>
    </label>
  </div>
</template>

<script>
import AppInputWrapper from "@/components/base/app-input-wrapper";
export default {
  name: "app-text-filed",
  components: {AppInputWrapper},
  props: {
    label: {
      type: String,
      required: false
    },
    required: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    name: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      data: "",
      focus: false
    }
  },
}
</script>

<style lang="scss" scoped>
.text-field{
  margin: 5px 0;
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;

  &-label {
    display: block;
    text-align: left;
    margin-top: 3px;

    &_required span::after {
      content: "*";
      color: red;

    }
  }
  &-input-wrapper {
    width: 100%;
    box-sizing: border-box;
    margin: auto;
    border-radius: 6px;
    border: 1.5px solid #666666;
    box-shadow: 0 0 2px 0px #7c7c7c;
    background-color: white;
    min-height: 47px;
    display: flex;
    flex-direction: row;

    &.focus{
      box-shadow: 0 0 2px 0px #0080ff;
      border-color: #0080ff;
    }

  }
  &-input {
    margin: 0 1em;
    flex-grow: 1;
    line-height: 34px;
    outline: none;
    border: none;

  }

}
</style>