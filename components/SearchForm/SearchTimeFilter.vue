<template>
  <div class="w-1/4">
    <button
      class="block rounded-lg bg-white focus:outline-none w-full lg:p-2 border-[1px] border-[#DBDBDB] cursor-pointer"
      @click="toggleDropdown"
    >
      <p
        v-if="label"
        class="text-xs font-normal text-blackSecondary text-left uppercase mb-[2px]"
      >
        {{ label }}
      </p>
      <div v-if="selectedOption !== ''" class="flex justify-between">
        <p
          class="text-sm xl:text-base font-medium text-blackPrimary text-left"
        >
          {{ this.selectedOption.toUpperCase() }}
        </p>
        <img
          src="@/assets/images/home/arrowDown.svg"
          alt="arrow-down"
          class="w-6 h-6"
        />
      </div>

      <div class="flex justify-between" v-else>
        <p
          class="text-sm xl:text-base font-medium text-blackPrimary text-left"
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
    </button>

    <!-- dropdown -->
    <div
      v-if="optionsIsOpen && filteredOptionsData?.length"
      class="mt-10 -ml-5 xl:w-[380px] w-80 bg-white rounded-md shadow-xl z-[1000] leading-6 before:block before:-mt-2 before:ml-20 before:-skew-y-3 before:bg-white before:h-5 before:w-5 before:rotate-45 absolute divide-y-2"
    >
      <ul
        class="overflow-y-auto divide-y divide-dashed divide-[#DBDBDB] max-h-[344px] text-sm xl:text-md text-td_text px-4"
      >
        <li
          v-for="(option, index) in filteredOptionsData"
          :key="index"
          class="cursor-pointer font-inter py-[14px] font-medium hover:text-corporate relative"
          :class="option === selectedOption ? 'text-corporate' : ''"
          @click="selectOption(option)"
        >
          {{ option.toUpperCase() }}

          <span
            v-if="option === selectedOption"
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
export default {
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
  mounted() {
    window.addEventListener("click", this.close);
  },
  beforeDestroy() {
    window.removeEventListener("click", this.close);
  },
  methods: {
    toggleDropdown() {
      this.optionsIsOpen = !this.optionsIsOpen;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.$emit("input", this.selectedOption);
      this.optionsIsOpen = false;
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.optionsIsOpen = false;
      }
    },
  },
  computed: {
    filteredOptionsData() {
      return this.options.filter((option) => {
        return option.toLowerCase().includes(this.searchKey.toLowerCase());
      });
    },
    showErrorToolTip() {
      return this.errorOccured && !this.selectedOption;
    },
  },
  watch: {
    "$route.query": {
      handler: function (value) {
        const { time } = value;
        if (time) {
          this.selectedOption =
            time === "morning"
              ? "4 am - 12 pm"
              : time === "day"
              ? "12 pm - 06 pm"
              : "06 pm - 03 am";
        }
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style></style>
