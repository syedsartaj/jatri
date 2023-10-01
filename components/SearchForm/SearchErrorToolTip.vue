<template>
  <div
    class="mt-[12px] xl:mt-5 xl:ml-5 w-auto bg-white rounded-md shadow-xl z-[1000] before:block before:-mt-2 before:ml-4 before:bg-white before:h-4 before:w-4 before:rotate-45 absolute custom"
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

<style scoped>
.custom {
  fill: var(--white-primary, #fff);
  filter: drop-shadow(0px 2px 30px rgba(0, 0, 0, 0.3));
}
</style>
