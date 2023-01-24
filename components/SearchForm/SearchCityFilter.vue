<template>
  <div class="w-1/4 p-[8px] h-15" v-click-outside="onClickOutside">
    <!-- Input box open -->
    <button
      @click="handleOnClick"
      v-bind:class="showErrorToolTip && 'border-[#E0293B]'"
      class="
        block
        rounded-lg
        bg-white
        focus:outline-none
        w-full
        lg:p-2
        border-[1px] border-[#DBDBDB]
        cursor-pointer
      "
    >
      <p
        v-if="label"
        class="
          lg:text-[10px]
          xl:text-xs
          font-normal
          text-blackSecondery text-left
          uppercase
        "
      >
        {{ label }}
      </p>
      <div class="flex justify-between items-center">
        <input
          v-if="allowFilter"
          id="searchInput"
          v-model="searchKey"
          autocomplete="off"
          class="
            rounded-md
            outline-none
            overflow-x-hidden
            lg:text-xs
            xl:text-sm
            2xl:text-base
            font-medium
            text-blackPrimary text-left
            placeholder-blackPrimary
            searchInput
          "
          :placeholder="defaultOption"
          type="text"
          @keyup="search"
          @focus="handleOnFocus"
        />
        <img
          src="@/assets/images/home/arrowDown.svg"
          alt="arrow-down"
          class="w-6 h-6"
          @click="toggleDropdown"
        />
      </div>
    </button>

    <!-- ErrorToolTip -->
    <SearchErrorToolTip v-if="showErrorToolTip" :message="errorMessage" />

    <!-- dropdown -->
    <div
      v-if="optionsIsOpen"
      class="
        mt-10
        -ml-5
        xl:w-[380px]
        w-80
        bg-white
        rounded-md
        shadow-xl
        z-[1000]
        leading-6
        before:block
        before:-mt-2
        before:ml-20
        before:-skew-y-3
        before:bg-white
        before:h-5
        before:w-5
        before:rotate-45
        absolute
        divide-y-2
      "
    >
      <ul
        class="
          overflow-y-auto
          divide-y divide-dashed divide-[#DBDBDB]
          h-[344px]
          text-sm
          xl:text-md
          text-td_text
          px-4
        "
      >
        <li
          v-for="(option, index) in filteredOptionsData"
          :key="index"
          class="
            cursor-pointer
            font-inter
            py-[14px]
            font-normal
            hover:text-corporate
            relative
          "
          :class="
            option.city_name === selectedOption.city_name
              ? 'text-corporate font-medium'
              : ''
          "
          @click="selectOption(option)"
        >
          {{ option.city_name }}
          <span
            v-if="option.city_name === selectedOption.city_name"
            class="absolute right-5 top-5 bottom-0"
            ><img src="@/assets/images/icons/tik.svg" alt="" class="w-4 h-3"
          /></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SearchErrorToolTip from "./SearchErrorToolTip.vue";
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
    onClickOutside() {
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
    handleOnClick() {
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
      return this.options.filter((option) => {
        return option.city_name
          .toLowerCase()
          .includes(this.searchKey.toLowerCase());
      });
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
</style>