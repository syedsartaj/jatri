<template>
  <div
    @click="click"
    class="rounded md:bg-[#EDEDED] w-full font-medium text-xs md:text-center text-left flex md:justify-center justify-left items-center cursor-pointer py-2 underline md:no-underline"
  >
    {{ text }}
  </div>
</template>

<script>
export default {
  props: ["click", "text"],
};
</script>
