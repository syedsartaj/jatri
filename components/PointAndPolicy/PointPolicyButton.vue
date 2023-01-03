<template>
  <div
    @click="click"
    class="
      rounded
      bg-[#EDEDED]
      w-full
      font-normal
      text-xs
      lg:text-sm
      text-center
      flex
      justify-center
      items-center
      cursor-pointer
      py-2
    "
  >
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: ["click", "text"],
};
</script>