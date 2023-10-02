<template>
  <div class="w-full relative" v-click-outside="onClickOutside">
    <!-- Input box open -->
    <button
      :class="{
        'border border-[#E0293B]': showErrorToolTip,
        'border border-[#151414]': optionsIsOpen,
      }"
      class="flex justify-between items-center rounded-[8px] bg-[#F7F7F7] focus:outline-none w-full px-[12px] py-[10px]"
    >
      <div class="flex justify-start gap-x-4 items-center w-full">
        <img v-if="icon" :src="icon" alt="" />
        <input
          ref="searchInput"
          id="searchInput"
          v-model="searchKey"
          autocomplete="off"
          :class="{
            'text-blackSecondary': searchKey === '',
          }"
          class="rounded-md outline-none overflow-x-hidden text-sm xl:text-base font-normal text-blackPrimary text-left placeholder-blackSecondary searchInput bg-transparent"
          :placeholder="defaultOption"
          type="text"
          autofocus
          @focus="handleOnFocus"
          @keyup="search"
          @mousedown="handleOnClick"
        />
      </div>
      <img
        src="@/assets/images/icons/mobileFilterDropdownIcon.svg"
        alt=""
        :class="optionsIsOpen ? 'transition-all ease-in-out rotate-180' : ''"
      />
    </button>

    <!-- ErrorToolTip -->
    <SearchErrorToolTip v-if="showErrorToolTip" :message="errorMessage" />

    <!-- dropdown -->
    <div
      v-if="optionsIsOpen && filteredOptionsData?.length"
      class="absolute mt-2 w-full bg-white rounded-[16px] custom-shadow z-[1000] divide-y-2 py-4"
    >
      <ul
        class="w-full bg-white overflow-y-auto divide-y divide divide-[#EDEDED] h-[252px] text-base px-4"
      >
        <li
          v-for="(option, index) in filteredOptionsData"
          :key="index"
          class="cursor-pointer font-inter py-[12px] font-normal hover:text-corporate relative"
          :class="{
            'text-corporate font-normal':
              option.city_name === selectedOption.city_name,
            'pt-0': index === 0,
          }"
          @click="selectOption(option)"
        >
          {{ option.city_name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SearchErrorToolTip from "../../SearchForm/SearchErrorToolTip.vue";
import vClickOutside from "v-click-outside";
export default {
  directives: {
    clickOutside: vClickOutside.directive,
  },
  components: {
    SearchErrorToolTip,
  },
  props: {
    label: {
      type: String,
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
    defaultOption: {
      type: String,
      required: false,
    },
    allowFilter: {
      type: Boolean,
      required: false,
    },
    options: {
      type: Array,
      required: true,
    },
    defaultValue: "",
    errorOccured: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      optionsIsOpen: false,
      selectedOption: "",
      searchKey: "",
    };
  },
  methods: {
    handleOnMouseDown() {
      this.$refs.searchInput.focus();
    },
    onClickOutside(e) {
      e.stopPropagation();
      this.optionsIsOpen = false;
    },
    toggleDropdown() {
      this.optionsIsOpen = !this.optionsIsOpen;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.searchKey = option.city_name;
      this.$emit("input", this.selectedOption.city_name);
      this.optionsIsOpen = false;
      let items = this.getSearchElementData();
      if (items) {
        if (this.label === "From" && !items[1].value) {
          setTimeout(function () {
            items[1].focus();
          }, 10);
        } else if (this.label === "To" && !items[0].value) {
          setTimeout(function () {
            items[0].focus();
          }, 10);
        }
      }
    },
    handleOnClick(e) {
      e.stopPropagation();
      this.optionsIsOpen = true;
      let items = this.getSearchElementData();
      if (items) {
        let focusItem = items[this.label === "From" ? 0 : 1];
        setTimeout(function () {
          const end = focusItem.value.length;
          focusItem.setSelectionRange(end, end);
          focusItem.focus();
        }, 10);
      }
    },
    search(e) {
      this.searchKey = e.target.value;
      this.optionsIsOpen = true;
      this.$emit("input", e.target.value);
    },
    handleOnFocus() {
      this.optionsIsOpen = true;
    },
    getSearchElementData() {
      return document.getElementsByClassName("searchInput");
    },
  },
  watch: {
    defaultValue: {
      handler(value) {
        this.selectedOption = value;
        if (this.selectedOption?.city_name) {
          this.searchKey = this.selectedOption.city_name;
        } else {
          this.searchKey = value;
        }
      },
      deep: true,
      immediate: true,
    },
  },
  computed: {
    filteredOptionsData() {
      const searchKey = this.searchKey.toLowerCase().trim();

      const filteredOptions = this.options.filter((option) => {
        return option.city_name.toLowerCase().startsWith(searchKey);
      });

      return filteredOptions.sort((a, b) =>
        a.city_name.localeCompare(b.city_name)
      );
    },

    showErrorToolTip() {
      return this.errorOccured && !this.selectedOption && !this.searchKey;
    },
    errorMessage() {
      return this.label === "To"
        ? "Enter destination first"
        : "Enter location first";
    },
    isInitialView() {
      return !this.selectedOption && !this.searchKey;
    },
  },
};
</script>

<style scoped>
input[type="text"]:focus::-webkit-input-placeholder {
  color: #8d8d8f;
}

.custom-shadow {
  fill: var(--white-primary, #fff);
  filter: drop-shadow(0px 2px 30px rgba(0, 0, 0, 0.3));
}
</style>
