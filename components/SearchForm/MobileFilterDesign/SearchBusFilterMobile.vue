<template>
  <div class="w-full relative">
    <div
      :class="optionsIsOpen && 'border border-[#4D4D4F]'"
      class="flex justify-between items-center rounded-[8px] bg-[#F7F7F7] focus:outline-none w-full px-[12px] py-[10px]"
      @click="toggleDropdown"
    >
      <div class="flex justify-start gap-x-4 items-center w-full">
        <img v-if="icon" :src="icon" alt="" />
        <p
          v-if="label && selectedOption === ''"
          class="text-sm font-normal text-blackSecondary text-left"
        >
          {{ label }}
        </p>
        <p
          v-if="selectedOption !== ''"
          class="text-sm font-normal text-blackPrimary text-left"
        >
          {{ this.selectedOption.city_name.toUpperCase() }}
        </p>
      </div>
      <img
        src="@/assets/images/icons/mobileFilterDropdownIcon.svg"
        alt=""
        :class="optionsIsOpen ? 'transition-all ease-in-out rotate-180' : ''"
      />
    </div>

    <!-- dropdown -->
    <div
      v-if="optionsIsOpen"
      class="absolute mt-2 w-full bg-white rounded-[16px] custom-shadow z-[1000] py-4"
    >
      <ul
        class="w-full bg-white overflow-y-auto divide-y divide divide-[#EDEDED] h-[146px] text-base px-4"
      >
        <li
          v-for="(option, index) in filteredOptionsData"
          :key="index"
          class="cursor-pointer font-inter py-[12px] font-normal hover:text-corporate relative"
          :class="{
            'text-corporate font-normal':
              option.city_name === selectedOption.city_name,
          }"
          @click="selectOption(option)"
        >
          {{ option.city_name.toUpperCase() }}
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
export default {
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
      this.$emit("input", this.selectedOption.city_name);
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
        return option.city_name
          .toLowerCase()
          .includes(this.searchKey.toLowerCase());
      });
    },
  },
  watch: {
    "$route.query": {
      handler: function (value) {
        const { type } = value;
        if (type) {
          this.options.filter((s) => {
            if (s.city_name.toLowerCase() === type.toLowerCase()) {
              this.selectedOption = s;
            }
          });
        }
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style>
.custom-shadow {

}
</style>
