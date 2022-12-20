<template>
  <div class="w-1/4 p-[8px] h-15" v-click-outside="onClickOutside">
    <button
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

      <!-- Initial View -->
      <div
        v-if="isInitialView"
        class="flex justify-between"
        @click="handleShowInputBox(true)"
      >
        <p
          class="
            lg:text-xs
            xl:text-sm
            2xl:text-base
            font-medium
            text-blackPrimary text-left
          "
        >
          <span v-if="defaultOption">{{ defaultOption }}</span>
          <span v-else>Select your Option</span>
        </p>
        <img
          src="@/assets/images/home/arrowDown.svg"
          alt="arrow-down"
          class="w-6 h-6"
        />
      </div>

      <!-- Any option is selected -->
      <div
        v-if="isAnyOptionSelected"
        class="flex justify-between"
        @click="handleShowInputBox(true)"
      >
        <p
          class="
            lg:text-xs
            xl:text-sm
            2xl:text-base
            font-medium
            text-blackPrimary text-left
          "
        >
          {{ this.selectedOption.city_name }}
        </p>
        <img
          src="@/assets/images/home/arrowDown.svg"
          alt="arrow-down"
          class="w-6 h-6"
        />
      </div>

      <!-- Input box open -->
      <div v-if="showInputBox" class="flex justify-between items-center">
        <input
          v-if="allowFilter"
          id="searchInput"
          v-model="searchKey"
          class="
            rounded-md
            outline-none
            overflow-x-hidden
            lg:text-xs
            xl:text-sm
            2xl:text-base
            font-medium
            text-blackPrimary text-left
          "
          :placeholder="defaultOption"
          type="text"
          autofocus
          @keyup="search"
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
      showInputBox: false,
    };
  },
  methods: {
    onClickOutside() {
      this.optionsIsOpen = false;
      this.showInputBox = false;
    },
    toggleDropdown() {
      this.optionsIsOpen = !this.optionsIsOpen;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.searchKey = option.city_name;
      this.$emit("input", this.selectedOption.city_name);
      this.showInputBox = false;
      this.optionsIsOpen = false;
    },

    search(e) {
      this.searchKey = e.target.value;
    },
    handleShowInputBox(value) {
      if (value) {
        this.showInputBox = true;
        this.optionsIsOpen = true;
        setTimeout(function () {
          document.getElementById("searchInput").focus();
        }, 10);
      } else {
        this.showInputBox = false;
      }
    },
  },
  watch: {
    defaultValue: {
      handler(value) {
        this.selectedOption = value;
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
      return this.errorOccured && !this.selectedOption;
    },
    errorMessage() {
      return this.label === "To"
        ? "Enter destination first"
        : "Enter location first";
    },
    isInitialView() {
      console.log("isInitialView");
      return !this.selectedOption && !this.searchKey && !this.showInputBox;
    },
    isAnyOptionSelected() {
      console.log("isAnyOptionSelected");
      return this.selectedOption !== "" && this.showInputBox === false;
    },
  },
};
</script>

<style>
</style>