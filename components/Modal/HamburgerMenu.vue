<template>
  <div class="relative z-[1000]">
    <div class="fixed inset-0 bg-white transition-opacity"></div>

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="h-[68px] w-full flex justify-between items-center px-4">
        <span class="text-[16px] text-[#151414] font-medium">Menu</span>
        <img
          class="w-6 h-6 cursor-pointer"
          src="@/assets/images/home/close.svg"
          alt="close"
          @click="close"
        />
      </div>
      <div class="border-b-[1px] border-[#DBDBDB]" />

      <div class="px-4 mt-5">
        <ul class="list-none">
          <li v-for="(item, index) in menuList" :key="index">
            <div
              class="
                h-[70px]
                flex
                justify-between
                items-center
                border-b-[1px] border-[#DBDBDB] border-dashed
              "
            >
              <div class="gap-x-4 flex">
                <img
                  class="w-6 h-6 cursor-pointer"
                  :src="require(`@/assets/images/home/${item.icon}.svg`)"
                  alt="close"
                />
                <span class="text-[20px] text-[#151414] font-medium">
                  {{ item.name }}</span
                >
              </div>
              <img
                class="w-6 h-6 cursor-pointer"
                src="@/assets/images/home/arrowRight.svg"
                alt="close"
              />
            </div>
          </li>
        </ul>
        <div class="h-[70px] flex justify-between items-center">
          <div class="gap-x-4 flex">
            <img
              class="w-6 h-6 cursor-pointer"
              src="@/assets/images/icons/phoneBlack.svg"
              alt="phoneBlack"
            />
            <span class="text-[20px] text-[#151414] font-medium">
              Jatri helpline</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["close"],
  data() {
    return {
      menuList: [
        {
          name: "Full bus reserve",
          icon: "fullBusReserve",
          url: "#",
        },
        {
          name: "Profile",
          icon: "user",
          url: "#",
        },
      ],
    };
  },
};
</script>

<style>
</style>