<template>
  <div
    @click="callBack"
    :class="isSelected && 'border border-0 border-b-[2px] border-[#F04935]'"
    class="
      p-[13px]
      lg:p-4
      flex
      items-center
      text-center
      justify-center
      w-content
      cursor-pointer
    "
  >
    <p
      :class="isSelected && 'text-[#F04935]'"
      class="text-blackPrimary text-xs lg:text-base font-medium"
    >
      {{ text }}
    </p>
  </div>
</template>
<script>
export default {
  props: ["text", "isSelected", "callBack"],
};
</script>