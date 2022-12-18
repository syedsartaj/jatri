<template>
  <div
    class="
      mt-5
      ml-5
      w-auto
      bg-white
      rounded-md
      shadow-xl
      z-[1000]
      before:block
      before:-mt-2
      before:ml-4
      before:bg-white
      before:h-4
      before:w-4
      before:rotate-45
      absolute
    "
  >
    <div class="text-center py-[10px] px-[14px] pt-[0px]">
      <h2 class="font-inter text-sm xl:text-[14px] font-[500] text-[#E0293B]">
        <span>{{ message }}</span>
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
};
</script>
