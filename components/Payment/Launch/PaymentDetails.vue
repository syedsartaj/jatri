<template>
  <div
    class="w-full px-4 lg:px-[100px] py-4 lg:py-[32px] bg-[#f7f7f7] flex flex-col lg:flex-row gap-4 lg:gap-8"
  >
    <div class="w-full lg:w-[40.16%] flex flex-col">
      <PassengerInfoForPayment />
      <TripInfo />
      <PurchasedTicketList :isEditable="false" />
    </div>
    <LaunchPromoAndPayment />
  </div>
</template>
