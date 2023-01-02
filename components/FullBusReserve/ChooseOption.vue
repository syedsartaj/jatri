<template>
  <div>
    <div
      v-bind:class="errorOccured && 'border-[#E0293B]'"
      class="
        flex
        justify-between
        px-2
        py-[10px]
        border border-[#DBDBDB]
        rounded
        mt-[10px]
        w-full
        cursor-pointer
      "
      @click="handleDropDown"
    >
      <p class="text-sm font-normal text-blackPrimary text-left">
        {{ selectedValue.toUpperCase() }}
      </p>
      <img
        src="@/assets/images/home/arrowDown.svg"
        alt="arrow-down"
        class="w-6 h-6"
      />
    </div>
    <div
      v-if="isDropdownOpen"
      class="
        mt-1
        w-[260px]
        md:w-[200px]
        lg:w-[390px]
        bg-white
        rounded
        shadow-xl
        z-[1000]
        leading-6
        absolute
        divide-y-2
        transform
      "
    >
      <div
        v-for="(option, i) of options"
        :key="i"
        class="
          cursor-pointer
          font-inter
          p-[14px]
          font-medium
          hover:text-corporate
          relative
          cursor-pointer
        "
        @click="handleSelect(option)"
      >
        {{ option.toUpperCase() }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["label", "options", "modelValue", "selectedValue"],
  emits: ["update:modelValue"],
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  methods: {
    handleDropDown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    handleSelect(option) {
      this.$emit("update:modelValue", option);
      this.isDropdownOpen = false;
    },
  },
};
</script>