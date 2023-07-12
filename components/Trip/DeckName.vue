<template>
  <div
    class="mt-[20px] w-full h-6 rounded bg-[#EDEDED] flex justify-center items-center text-xs font-medium"
  >
    {{ name }}
  </div>
</template>

<script>
export default {
  name: "DeckName",
  props: ["name"],
};
</script>
