<template>
  <div
    class="w-full px-4 lg:px-[100px] bg-[#FEF2F0] h-[56px] lg:h-[76px] flex items-center flex-row"
  >
    <div
      :class="{
        'text-base lg:text-xl text-blackPrimary font-medium': true,
      }"
    >
      Passenger details
    </div>
    <div class="px-2 lg:mx-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M13.0608 11.9997L8.11084 7.04974L9.52484 5.63574L15.8888 11.9997L9.52484 18.3637L8.11084 16.9497L13.0608 11.9997Z"
          fill="#676769"
        />
      </svg>
    </div>
    <div
      :class="{
        'text-base lg:text-xl text-blackPrimary font-medium': true,
        'text-[#676769]': type === 'passenger',
      }"
    >
      Payment details
    </div>
  </div>
</template>
<script>
export default {
  props: ["type"],
};
</script>
