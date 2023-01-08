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
        :min="minInput"
        :minlength="minlength"
        :maxlength="maxlength"
        :value="value"
        @input="updateValue"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: [
    "placeholder",
    "type",
    "value",
    "errorOccured",
    "minInput",
    "maxlength",
    "minlength",
  ],
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>