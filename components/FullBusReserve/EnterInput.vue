<template>
  <div>
    <!-- v-bind:class="true && 'border-[#E0293B]'" -->
    <div
      class="
        flex
        justify-between
        px-2
        py-[10px]
        border border-[#DBDBDB]
        rounded
        mt-[10px]
        w-full
        h-[48px]
      "
    >
      <input
        class="
          h-full
          w-full
          outline-none
          overflow-x-hidden
          text-sm
          font-normal
          text-blackPrimary text-left
        "
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
    <!-- <SearchErrorToolTip v-if="true" message="Choose bus type first"/> -->
  </div>
</template>
<script>
export default {
  props: ["placeholder", "type", "modelValue"],
  emits: ["update:modelValue"],
  data() {
    return {
      value: this.modelValue,
    };
  },
};
</script>