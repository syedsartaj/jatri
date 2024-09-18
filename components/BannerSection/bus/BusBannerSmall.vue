<template>
  <div class="block lg:hidden relative z-20 -mt-[72px] px-4 pb-12">
    <div class="bg-white rounded-2xl p-4 custom-shadow">
      <SearchFilterFormMobile />
    </div>
  </div>
</template>

<script>
export default {
  props: ["service"],
};
</script>

<style scoped>
.custom-shadow {
  box-shadow: 0px 2px 20px 4px rgba(0, 0, 0, 0.08);
}
</style>
