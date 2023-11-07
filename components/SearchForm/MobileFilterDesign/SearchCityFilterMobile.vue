<template>
  <div class="w-full relative" v-click-outside="onClickOutside">
    <div
      :class="{
        'border border-[#E0293B]': showErrorToolTip,
        'border border-[#151414]': optionsIsOpen,
      }"
      class="flex justify-between items-center rounded-[8px] bg-[#F7F7F7] focus:outline-none w-full px-[12px] py-[10px] input-wrapper"
      @click="handleOnClick"
    >
      <div class="flex justify-start gap-x-4 items-center w-full">
        <img v-if="icon" :src="icon" alt="" />
        <input
          v-model="searchKey"
          :class="{
            'text-blackSecondary': searchKey === '',
          }"
          class="w-full rounded-md outline-none overflow-x-hidden text-sm xl:text-base font-normal text-blackPrimary text-left placeholder-blackSecondary searchInput bg-transparent"
          :placeholder="secondHand || defaultOption"
          autocomplete="off"
          type="text"
          @keyup="search"
          @focus="handleOnFocus"
        />
      </div>
      <img
        src="@/assets/images/icons/mobileFilterDropdownIcon.svg"
        alt=""
        :class="optionsIsOpen ? 'transition-all ease-in-out rotate-180' : ''"
      />
    </div>

    <!-- ErrorToolTip -->
    <SearchErrorToolTip v-if="showErrorToolTip" :message="errorMessage" />

    <!-- dropdown -->
    <div
      v-if="optionsIsOpen && filteredOptionsData?.length"
      class="absolute mt-2 w-full bg-white rounded-[16px] custom-shadow z-[1000] divide-y-2 py-4"
    >
      <ul
        class="w-full overflow-y-auto divide-y divide divide-[#EDEDED] h-[220px] text-base px-4"
      >
        <li
          v-for="(option, index) in filteredOptionsData"
          :key="index"
          class="cursor-pointer font-inter py-[12px] font-normal hover:text-corporate relative"
          :class="{
            'text-corporate font-normal':
              option.city_name === selectedOption.city_name,
            'pt-0': index === 0,
            'pb-0': filteredOptionsData.length === 1,
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
import { mapGetters } from "vuex";
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
      secondHand: "",
    };
  },
  methods: {
    onClickOutside() {
      if (this.optionsIsOpen) {
        this.optionsIsOpen = false;
      }

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
        this.secondHand = "";
        this.searchKey = "";
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
    handleOnClick() {
      let items = this.getSearchElementData();
      if (items.length <= 4) {
        if (this.label === "From") {
          this.optionsIsOpen = true;

          items[2].focus();
        } else if (this.label === "To") {
          this.optionsIsOpen = true;

          items[3].focus();
        }
      }
    },
    handleInputFocus() {
      if (!this.optionsIsOpen) {
        this.optionsIsOpen = true;
      }
      this.searchKey != "" && (this.searchKey = "");
    },

    selectOption(option) {
      this.selectedOption = option;
      this.searchKey = option.city_name;
      this.secondHand = this.searchKey;
      this.$emit("input", this.selectedOption.city_name);
      this.optionsIsOpen = false;
      let items = this.getSearchElementData();
      let inputClickerItems = document.getElementsByClassName("input-wrapper");

      if (items && inputClickerItems) {
        this.$nextTick(() => {
          if (this.label === "From" && !items[3].value) {
            inputClickerItems[1].click();
          } else if (this.label === "To" && !items[2].value) {
            inputClickerItems[0].click();
          }
        });
      }
    },
    search(e) {
      this.searchKey = e.target.value;
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
  },
};
</script>

<style scoped>
input[type="text"]:focus::-webkit-input-placeholder {
  color: #8d8d8f;
}

.custom-shadow {
  background-color: #fff;
  box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.3);
}
</style>
