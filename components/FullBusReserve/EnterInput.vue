<template>
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
    "
  >
    <input
      class="
        h-full
        w-full
        focus:outline-0
        text-xs
        focus:appearance-none
        placeholder:text-blackSecondery
        text-blackPrimary
      "
      type="number"
      :placeholder="placeholder"
    />
  </div>
</template>
<script>
export default {
  props: ["placeholder"],
};
</script>