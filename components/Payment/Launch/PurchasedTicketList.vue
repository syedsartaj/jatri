<template>
  <div
    class="w-full border-[1px] border-[#EDEDED] rounded-2xl bg-[#FFFFFF] mt-4"
  >
    <div
      :class="{
        'w-full p-4 flex flex-row items-center justify-between': true,
        'border-b-[1px] border-[#EDEDED]': expandView,
      }"
    >
      <div class="text-base lg:text-xl text-blackPrimary font-medium">
        Tickets
      </div>
      <div @click="toggleExpand" class="cursor-pointer flex lg:hidden">
        <svg
          v-if="expandView"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12.0007 10.9391L7.05072 15.8891L5.63672 14.4751L12.0007 8.11108L18.3647 14.4751L16.9507 15.8891L12.0007 10.9391Z"
            fill="#151414"
          />
        </svg>
        <svg
          v-if="!expandView"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12.0007 13.061L16.9507 8.11096L18.3647 9.52496L12.0007 15.889L5.63672 9.52496L7.05072 8.11096L12.0007 13.061Z"
            fill="#151414"
          />
        </svg>
      </div>
    </div>
    <div class="p-4 pb-0" v-if="expandView">
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
                'pr-0':
                  !isEditable &&
                  getLaunchBookingData?.invoice?.seatNo?.length === 1,
              }"
            >
              {{ getLaunchBookingData?.seatFares[index] }}
            </td>
            <td
              v-if="
                isEditable && getLaunchBookingData?.invoice?.seatNo?.length > 1
              "
              class="pb-[14px]"
            >
              <div class="w-full flex items-start justify-end">
                <div
                  @click="handleDeleteSeat(item)"
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
      v-if="expandView"
      class="w-full px-4 py-[14px] w-full flex flex-row justify-between items-center rounded-b-lg border-t-[1px] border-[#DBDBDB]"
    >
      <p class="text-sm text-blackPrimary font-medium">Total</p>
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
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  props: ["isEditable"],
  data() {
    return {
      expandView: true,
    };
  },
  methods: {
    ...mapMutations("launchStore", [""]),
    ...mapActions("launchStore", ["seatRemoveAction"]),
    toggleExpand() {
      this.expandView = !this.expandView;
    },
    async handleDeleteSeat(seatNo) {
      const filteredSeats = this.getLaunchBookingData.invoice.seatNo.filter(
        (seatItem) => seatItem !== seatNo
      );

      if (filteredSeats.length === 0) {
        this.$toast.error(
          "You have to be at least one ticket left to continue!",
          {
            position: "bottom-right",
            duration: 5000,
          }
        );

        return;
      }

      const { invoice, _id } = this.getLaunchBookingData;

      const { companyId, shipId, trip, seatClassId, floorId } = invoice;

      const payload = {
        companyId,
        shipId,
        tripId: trip,
        seatClassId: seatClassId,
        floorId,
        seatNumbers: filteredSeats.join(","),
        paymentId: _id,
      };

      await this.seatRemoveAction(payload);
    },
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
      return this.getLaunchBookingData?.amount;
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
