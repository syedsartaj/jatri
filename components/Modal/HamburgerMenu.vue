<template>
  <div class="relative z-[1000]">
    <div class="fixed inset-0 bg-white transition-opacity"></div>

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="h-[68px] w-full flex justify-between items-center px-4">
        <span class="text-xl text-blackPrimary font-medium">Menu</span>
        <img
          class="w-6 h-6 cursor-pointer"
          src="@/assets/images/home/close.svg"
          alt="close"
          @click="close"
        />
      </div>
      <div class="border-b-[1px] border-[#DBDBDB]" />

      <div class="px-4">
        <ul class="list-none">
          <li
            v-for="(item, index) in menuList"
            :key="index"
            @click="handleOnClick(index)"
            class="cursor-pointer"
          >
            <div
              class="h-[70px] flex justify-between items-center border-b-[1px] border-[#DBDBDB]"
            >
              <div class="gap-x-4 flex">
                <img
                  class="w-6 h-6"
                  :src="require(`@/assets/images/home/${item.icon}.svg`)"
                  alt="close"
                />
                <span class="text-[20px] text-[#151414] font-medium">
                  {{ item.name }}</span
                >
              </div>
            </div>
          </li>
        </ul>
        <div class="h-[70px] flex justify-between items-center w-full">
          <a class="gap-x-4 flex cursor-pointer w-full" href="tel:09642080808">
            <img
              class="w-6 h-6 cursor-pointer"
              src="@/assets/images/icons/phoneBlack.svg"
              alt="phoneBlack"
            />
            <span class="text-[20px] text-[#151414] font-medium">
              Jatri helpline</span
            >
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  props: ["close"],
  computed: {
    ...mapGetters("common", ["getBusReserveModalOpenStatus"]),
  },
  data() {
    return {
      menuList: [
        {
          name: "History",
          icon: "history",
          url: "/find-ticket",
        },
        {
          name: "Full bus reserve",
          icon: "fullBusReserve",
          url: "#",
        },
      ],
    };
  },
  methods: {
    ...mapMutations("common", ["setBusReserveModalOpenStatus"]),
    handleOnClick(index) {
      if (index === 1) {
        this.setBusReserveModalOpenStatus();
      } else {
        this.close();
        this.$router.push(this.menuList[0].url);
      }
    },
  },
};
</script>

<style></style>
