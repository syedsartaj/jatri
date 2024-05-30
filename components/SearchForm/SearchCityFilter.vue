<template>
  <div class="w-1/4" v-click-outside="onClickOutside">
    <!-- Input box open -->
    <button
      @click="handleOnClick"
      v-bind:class="showErrorToolTip && 'border-[#E0293B]'"
      class="block rounded-lg bg-white focus:outline-none w-full lg:p-2 border-[1px] border-[#DBDBDB] cursor-pointer"
    >
      <div
        v-if="label"
        class="text-xs font-normal text-blackSecondary text-left uppercase mb-[2px]"
      >
        {{ label }}
      </div>
      <div class="flex justify-between items-center">
        <input
          v-if="allowFilter"
          v-model="searchKey"
          autocomplete="off"
          class="w-full rounded-md outline-none overflow-x-hidden text-sm xl:text-base font-medium text-blackPrimary text-left placeholder-blackPrimary searchInput"
          :placeholder="secondHand || defaultOption"
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
      v-if="optionsIsOpen && filteredOptionsData?.length"
      class="mt-10 -ml-5 xl:w-[380px] w-80 bg-white rounded-md shadow-xl z-[1000] leading-6 before:block before:-mt-2 before:ml-20 before:-skew-y-3 before:bg-white before:h-5 before:w-5 before:rotate-45 absolute divide-y-2"
    >
      <ul
        class="overflow-y-auto divide-y divide-dashed divide-[#DBDBDB] h-[344px] text-sm xl:text-md text-td_text px-4"
      >
        <li
          v-for="(option, index) in filteredOptionsData"
          :key="index"
          class="cursor-pointer font-inter py-[14px] font-normal hover:text-corporate relative"
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
import vClickOutside from "v-click-outside";
import { mapGetters } from "vuex";
import SearchErrorToolTip from "./SearchErrorToolTip.vue";
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
      secondHand: "",
    };
  },
  methods: {
    onClickOutside() {
      this.optionsIsOpen = false;

      const availableCities =
        (this.searchKey && this.getMatchingCities(this.searchKey)) || [];

      if (this.searchKey && availableCities.length === 1) {
        this.searchKey = availableCities[0].city_name;
        this.secondHand = this.searchKey;
        this.$emit("input", this.searchKey);
      } else if (this.secondHand && availableCities.length === 0) {
        this.searchKey = this.secondHand;
        this.secondHand = this.searchKey;
        this.$emit("input", this.searchKey);
      } else if (this.isCityAvailable(this.searchKey)) {
        
        this.searchKey = this.secondHand;
        this.$emit("input", this.searchKey);
      }
    },
    getMatchingCities(city) {
      return this.getCities.filter((s) =>
        s.city_name.toLowerCase().startsWith(city.toLowerCase())
      );
    },
    isCityAvailable(city) {
      return this.getCities.map((s) =>
        s.city_name.toLowerCase().includes(city.toLowerCase())
      );
    },
    toggleDropdown() {
      this.optionsIsOpen = !this.optionsIsOpen;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.searchKey = option.city_name;
      this.secondHand = this.searchKey;
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
      this.searchKey != "" && (this.searchKey = "");
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
          this.secondHand = this.searchKey;
        } else {
          this.searchKey = value;
          this.secondHand = this.searchKey;
        }
      },
      deep: true,
      immediate: true,
    },
  },
  computed: {
    ...mapGetters("common", ["getCities"]),
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
</style>
