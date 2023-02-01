<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false" @focus="open = true">
<!--    <div class="selected" :class="{ open: open, flat: flat }" @click.prevent="open = !open">-->
    <app-input-wrapper :flat="flat" :focus="open" class="selected" :class="{ open: open }"  @click.native.prevent="setFocus">
      <div v-if="typeof(selectedItems) === 'number' ? !selectedItems : !selectedItems.length" style="pointer-events: none">----</div>
      <template v-else-if="multiple">
        <div v-for="item of selectedItems" :key="item">
          <slot name="item" :item="options.find( o => o[id] === item)">
            <div class="item">
              {{ options.find( o => o[id] === item)[label] }}
              <span style="color: red" @click.prevent="onClearSelectItem(item)">x</span>
            </div>
          </slot>
        </div>
      </template>
      <template v-else>
        <slot name="item" :item="options.find( o => o[id] == selectedItems)">
          <div>
            {{ options.find( o => o[id] == selectedItems)[label] }}
          </div>
        </slot>
      </template>
<!--    </div>-->
    </app-input-wrapper>
<!--    dropdown block-->
    <div class="items" :class="{ selectHide: !open }">
      <div
          v-for="option of options"
          :key="option[id]"
          @click="onSelectItem(option[id])"
          :class="{'item-selected': multiple ? selectedItems.find( item => item === option[id]) : selectedItems === id}"
      >
        {{ option[label] }}
      </div>
    </div>
  </div>
</template>

<script>
import AppInputWrapper from "@/components/base/app-input-wrapper";
export default {
  name: "app-select",
  components: {AppInputWrapper},
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: [Array, Number],
      required: true
    },
    label: {
      type: String,
      default: "label"
    },
    id: {
      type: String,
      default: "id"
    },
    tabindex: {
      type: Number,
      default: 0,
    },
    multiple: {
      type: Boolean,
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      open: false,
    };
  },
  computed: {
    selectedItems: {
      get: function () {return  this.value},
      set: function (newVal) {this.$emit('input', newVal)}
    }
  },
  methods: {
    setFocus(e) {
      e.srcElement.focus()
    },
    onSelectItem(id) {
      if (this.multiple) {
        if (this.selectedItems.indexOf(id) !== -1) {
          this.onClearSelectItem(id)
        }else {
          this.selectedItems.push(id);
        }
      }else {
        if (this.selectedItems !== id) {
          this.selectedItems = id
        }

        this.open = false;
      }
    },
    onClearSelectItem(id) {
      this.selectedItems = this.selectedItems.filter(x => x !== id)
    }
  }
}
</script>

<style scoped>

.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  line-height: 34px;
  min-height: 47px;
}

.custom-select .selected {
  display: flex;
  padding-left: 1em;
  padding-right: 40px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  flex-direction: row;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}

.custom-select .selected.open {
  border-radius: 6px 6px 0px 0px;
}

.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 22px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #000000 transparent transparent transparent;
}

.custom-select .selected .item {
  display: inline-block;
  line-height: 18px;
  padding: 3px;
  margin: 3px;
  background-color: #bdbdbd;
  border: 1px solid #8d8d8d;
  border-radius: 3px;
}

.custom-select .items {
  max-height: 200px;
  overflow-y: auto;
  border-radius: 0px 0px 6px 6px;
  background-color: white;
  border-right: 1px solid grey;
  border-left: 1px solid grey;
  border-bottom: 1px solid grey;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-select .items div {
  margin: 1px 0;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .items .item-selected {
  background-color: rgba(115, 250, 250, 0.98);
}


.custom-select .items div:hover {
  background-color: #258dad;
}

.selectHide {
  display: none;
}
</style>