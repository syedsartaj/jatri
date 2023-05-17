<template>
  <div class="relative w-full">
    <div class="">
      <h2
        class="text-xs lg:text-base font-medium text-blackPrimary flex justify-between"
      >
        <span>{{ label }} </span> 
        <span v-if="isOptional" class="text-[#8D8D8F]">Optional</span>
      </h2>
      <button @click="toggleDropdown" class="z-10 block bg-[#f7f7f7] px-4 py-[13px] mt-[10px] w-full rounded focus:outline-none">
          <div class="flex justify-between items-center">
            <p v-if="selectedOption !== ''" class="text-blackPrimary text-sm font-normal">
              {{ propertyName ? selectedOption[propertyName] : selectedOption }}
            </p>
            <p v-else class="text-blackSecondery text-sm font-normal">Select Boarding point</p>
            <img src="@/assets/images/icons/dropdown.svg" alt="dropdown" />
          </div>
      </button>
    </div>
    <div v-show="optionsIsOpen" class="border mt-5 w-11/12 bg-white rounded-md shadow-xl z-[1000] leading-6 before:grid before:-mt-2 before:ml-10 before:bg-white before:-skew-y-3 before:bg-red before:h-5 before:w-5 before:rotate-45 absolute divide-y-2">
      <div class="text-center p-4">
        <h2 class="font-inter text-xs xl:text-[16px] font-[600] text-td_text">
          <span v-if="defaultOption">{{ defaultOption }}</span>
          <span v-else>Select your Option</span>
        </h2>
      </div>
      <ul class='overflow-y-auto divide-y divide-dashed h-[344px] text-sm xl:text-md text-td_text px-4'>
        <!-- <li v-for="(option, index) in options" :key="index"
          :class="
            propertyName &&
            option[propertyName] === selectedOption[propertyName]
              ? 'text-corporate'
              : option === selectedOption
              ? 'text-corporate'
              : ''
          "
          @click="selectOption(option)"
          class="cursor-pointer font-inter py-[14px] font-medium text-corporate hover:text-blackPrimary relative"
        >
          {{ propertyName ? option[propertyName] : option }}
          <span class='absolute right-5 top-5 bottom-0'><img src="@/assets/images/icons/tik.svg" alt="" class="w-4 h-3"></span>
        </li> -->

        <li v-for="(option, index) in options" :key="index" 
          class='cursor-pointer font-inter py-[14px] font-medium  hover:text-corporate relative'
          :class="propertyName && option[propertyName] === selectedOption[propertyName]
            ? 'text-corporate'
            : option === selectedOption
            ? 'text-corporate'
            : 'text-blackSecondery'
          "
          @click='selectOption(option)'>
          {{ propertyName ? option[propertyName] : option }}
          <span v-if='option === selectedOption' class='absolute right-5 top-5 bottom-0'><img src="@/assets/images/icons/tik.svg" alt="" class="w-4 h-3"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectOption",
  model: {
    prop: 'boardingPoint',
    event: 'input'
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
    options: {
      type: Array,
      required: true,
    },
    isOptional: {
      type: Boolean,
      required: false,
    },
    propertyName: "",
    boardingPoint: ''
  },
  data() {
    return {
      optionsIsOpen: false,
      selectedOption: "",
    };
  },
  created() {
    this.selectedOption =
      this.options && this.options.length > 0 ? this.boardingPoint : "";
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
};
</script>
