<template>
  <div class="relative z-[99999999]">
    <div
      class="fixed inset-0 bg-blackPrimary bg-opacity-50 transition-opacity"
    ></div>

    <div class="fixed inset-0 z-10">
      <div
        class="flex min-h-full items-end justify-center lg:p-4 text-center lg:items-center sm:p-0"
      >
        <div
          class="relative transform overflow-hidden rounded-t-2xl lg:rounded-lg bg-white text-left shadow-xl transition-all lg:my-8 w-full lg:max-w-[800px]"
        >
          <div class="bg-white p-4 lg:p-6 w-full">
            <div class="flex justify-between items-center">
              <p class="text-xl text-blackPrimary font-medium">
                Seat Availability
              </p>
              <button @click="handleSeatAvailableModal" class="pr-[6px]">
                <img src="@/assets/images/icons/closeIcon.svg" alt="" />
              </button>
            </div>
            <hr />
            <div class="bg-white overflow-y-auto h-[504px]">
              <div class="flex flex-col">
                <div class="overflow-x-auto py-4">
                  <div
                    class="inline-block min-w-full border dark:border-neutral-[#EDEDED] rounded-lg overflow-hidden"
                  >
                    <table class="min-w-full text-center">
                      <thead
                        class="border-b bg-[#F7F7F7] text-sm font-medium dark:border-neutral-[#EDEDED]"
                      >
                        <tr>
                          <th
                            scope="col"
                            class="border-r px-4 py-2 dark:border-neutral-[#EDEDED]"
                          >
                            Seat class
                          </th>
                          <th
                            scope="col"
                            class="border-r px-4 py-2 dark:border-neutral-[#EDEDED]"
                          >
                            No of seats
                          </th>
                          <th
                            scope="col"
                            class="border-r px-4 py-2 dark:border-neutral-[#EDEDED]"
                          >
                            Fare
                          </th>
                          <th scope="col" class="px-4 py-2">Available seats</th>
                        </tr>
                      </thead>
                      <tbody class="text-base font-medium text-blackPrimary">
                        <tr
                          v-for="(item, index) in seatAvailabilityList"
                          :key="index"
                          :class="
                            index === seatAvailabilityList.length - 1
                              ? ''
                              : 'border-b dark:border-neutral-[#EDEDED]'
                          "
                        >
                          <td
                            class="whitespace-nowrap border-r px-4 py-2 dark:border-neutral-[#EDEDED]"
                          >
                            {{ item.seatClass }}
                          </td>
                          <td
                            class="whitespace-nowrap border-r px-4 py-2 dark:border-neutral-[#EDEDED]"
                          >
                            {{ item.notOfSeats }}
                          </td>
                          <td
                            class="whitespace-nowrap border-r px-4 py-2 dark:border-neutral-[#EDEDED]"
                          >
                            {{ item.fare }} TK
                          </td>
                          <td class="whitespace-nowrap px-4 py-2">
                            {{ item.availableSeats }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["handleSeatAvailableModal", "seatAvailabilityList"],
  name: "SeatAvailabilityModal",
  computed: {},
};
</script>
<style>
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f7f7f7;
}

::-webkit-scrollbar-thumb {
  background: #dbdbdb;
  width: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
  width: 6px;
}
</style>
