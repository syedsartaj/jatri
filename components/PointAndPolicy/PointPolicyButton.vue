<template>
  <div
    @click="click"
    class="
      rounded
      lg:bg-[#EDEDED]
      w-full
      font-normal
      text-xs
      lg:text-sm lg:text-center
      text-left
      flex
      lg:justify-center
      justify-left
      items-center
      cursor-pointer
      py-2
      underline
      lg:no-underline
    "
  >
    {{ text }}
  </div>
</template>

<script>
export default {
  props: ["click", "text"],
};
</script>