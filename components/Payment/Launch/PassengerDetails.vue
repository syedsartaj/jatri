<template>
  <div class="w-full px-[100px] py-[32px] bg-[#f7f7f7] flex flex-row gap-8">
    <div class="w-[40.16%] flex flex-col">
      <TripInfo />
      <PurchasedTicketList :isEditable="true" />
    </div>
    <PassengerDetailsForm />
  </div>
</template>
