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
          font-inter
          h-full
          w-full
          outline-none
          overflow-x-hidden
          text-sm
          font-normal
          text-blackPrimary text-left
          placeholder-blackSecondery-400
        "
        :type="type"
        :placeholder="placeholder"
        :min="minInput"
        :minlength="minlength"
        :maxlength="maxlength"
        :value="value"
        @keypress="(e) => (type === 'number' ? numbersOnly(e) : updateValue(e))"
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
    numbersOnly(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
  },
};
</script>