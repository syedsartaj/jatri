<template>
  <div
    class="w-full border-[1px] border-[#EDEDED] rounded-2xl bg-[#FFFFFF] mt-4"
  >
    <div class="w-full p-4 border-b-[1px] border-[#EDEDED]">
      <div class="text-[20px] text-xl text-blackPrimary font-medium">
        Tickets
      </div>
    </div>
    <div class="p-4 pb-0">
      <table class="w-full text-center">
        <tbody class="text-xs font-medium text-blackSecondary">
          <tr
            v-for="(item, index) in getLaunchBookingData?.invoice?.seatNo"
            :key="index"
            :class="
              false
                ? ''
                : 'border-dashed border-b dark:border-neutral-[#EDEDED]'
            "
          >
            <td
              class="whitespace-nowrap pl-[0px] pt-0 p-[10px] dark:border-neutral-[#EDEDED] text-left"
            >
              {{ item }}
            </td>
            <td
              class="whitespace-nowrap pt-0 p-[10px] dark:border-neutral-[#EDEDED]"
            >
              {{ getLaunchBookingData?.invoice?.floor }}
            </td>
            <td
              class="whitespace-nowrap pt-0 p-[10px] dark:border-neutral-[#EDEDED]"
            >
              {{ getLaunchBookingData?.invoice?.seatClass }}
            </td>
            <td
              :class="{
                'whitespace-nowrap pt-0 p-[10px] text-sm text-right text-blackPrimary': true,
                'pr-0': !isEditable,
              }"
            >
              {{ getLaunchBookingData?.seatFares[index] }}
            </td>
            <td v-if="isEditable" class="pb-[14px]">
              <div class="w-full flex items-start justify-end">
                <div
                  @click="deleteSeatFromTicketList(item)"
                  class="bg-[#F7F7F7] rounded-[100px] h-[20px] w-[20px] flex items-center justify-center cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M7.99999 7.05732L11.3 3.75732L12.2427 4.69999L8.94266 7.99999L12.2427 11.3L11.3 12.2427L7.99999 8.94266L4.69999 12.2427L3.75732 11.3L7.05732 7.99999L3.75732 4.69999L4.69999 3.75732L7.99999 7.05732Z"
                      fill="#E0293B"
                    />
                  </svg>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div
        class="w-full flex flex-row justify-between py-[10px] border-dashed border-b-[1px] border-[#DBDBDB] font-medium text-blackPrimary"
      >
        <div class="text-xs">Processing fee</div>
        <div class="text-sm">BDT {{ serviceCharge }}</div>
      </div>
      <div class="w-full flex flex-row justify-between py-[10px]">
        <div class="text-xs">Gateway fee</div>
        <div class="text-sm">BDT {{ paymentGatewayCommission }}</div>
      </div>
      <div
        v-if="
          getLaunchBookingData?.invoice?.offer?.totalAmount ||
          getLaunchBookingData?.invoice?.promo?.amount
        "
        class="flex justify-between py-2"
      >
        <p class="text-[11px] leading-4 lg:text-sm font-normal text-blackLight">
          {{
            getLaunchBookingData?.invoice?.offer?.totalAmount
              ? "Offer"
              : "Promo"
          }}
        </p>
        <div
          class="border border-[#F04935] h-6 px-2 rounded-full flex items-center"
        >
          <p class="text-xs font-medium text-[#F04935]">
            {{
              `- BDT ${
                getLaunchBookingData?.invoice?.offer?.totalAmount ||
                getLaunchBookingData?.invoice?.promo?.amount
              }`
            }}
          </p>
        </div>
      </div>
    </div>
    <div
      class="w-full px-4 py-[14px] w-full flex flex-row justify-between items-center rounded-b-lg border-t-[1px] border-[#DBDBDB]"
    >
      <p class="text-sm text-blackPrimary font-medium">
        Total ({{ getLaunchBookingData.invoice.seatNo.length }} seat{{
          getLaunchBookingData.invoice.seatNo.length > 1 ? "s" : ""
        }})
      </p>
      <div class="flex flex-col-reverse md:flex-row items-end md:items-start">
        <div
          v-if="getLaunchBookingData.invoice.discount"
          class="flex flex-row md:mr-4 items-center bg-[#48A43F] pl-[4px] pr-2 py-[2px] justify-center rounded-full mt-[4px] md:mt-0"
        >
          <img
            src="@/assets/images/icons/promoIcon.svg"
            alt=""
            class="mr-[4px]"
          />
          <p class="text-xs font-medium text-[#FFF]">
            You save BDT
            <span class="text-sm">{{
              getLaunchBookingData.invoice.discount
            }}</span>
          </p>
        </div>
        <p class="text-base font-medium text-blackPrimary">
          <span class="font-bold"> BDT {{ getLaunchBookingData.amount }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  props: ["isEditable"],
  methods: {
    ...mapMutations("launchStore", ["deleteSeatFromTicketList"]),
    getTotalSeatFare() {
      return (
        this.getLaunchBookingData?.seatFares?.reduce(
          (sum, element) => sum + parseInt(element),
          0
        ) || 0
      );
    },
  },
  computed: {
    ...mapGetters("launchStore", ["getLaunchBookingData"]),
    serviceCharge() {
      return this.getLaunchBookingData?.serviceCharge;
    },
    paymentGatewayCommission() {
      return this.getLaunchBookingData?.paymentGatewayCommission;
    },
    totalPrice() {
      return (
        this.getTotalSeatFare() +
        this.paymentGatewayCommission +
        this.serviceCharge
      );
      // return (
      //   this.getTotalSeatFare() +
      //   this.paymentGatewayCommission +
      //   this.serviceCharge -
      //   this.promoAmount
      // );
    },
  },
};
</script>
