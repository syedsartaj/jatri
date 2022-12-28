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
    <p
      class="
        lg:text-xs
        text-sm
        2xl:text-base
        font-normal
        text-blackSecondery text-left
      "
    >
      {{ label }}
    </p>
    <img
      src="@/assets/images/home/arrowDown.svg"
      alt="arrow-down"
      class="w-6 h-6 cursor-pointer"
    />
  </div>
</template>
<script>
export default {
  props: ["label"],
};
</script>