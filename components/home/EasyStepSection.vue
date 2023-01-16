<template>
   <div class="lg:pt-20 mt-[40px] px-4 lg:px-[100px]">
      <div>
         <div class="">
            <h2
               class="
               text-2xl
               lg:text-4xl
               text-blackPrimary text-center
               font-semibold
               lg:leading-[44px]
               "
               >
               Easy steps to enjoy journey
            </h2>
         </div>
         <div
            class="
            mt-[60px]
            lg:flex flex-wrap
            xl:flex-nowrap
            justify-between
            lg:gap-x-[32px]
            "
            >
            <div
               class="
               lg:w-[392px]
               flex flex-col
               lg:items-start
               lg:text-left
               "
               >
               <img
                  src="@/assets/images/home/searchDestination.png"
                  alt=""
                  class="
                  h-[80px]
                  lg:h-[140px]
                  block
                  max-sm:m-auto
                  "
                  />
               <h2
                  class="
                  text-base
                  lg:text-2xl
                  text-blackPrimary
                  lg:leading-8
                  font-medium
                  mt-8
                  "
                  >
                  Search Destination
               </h2>
               <p
                  class="
                  text-sm
                  lg:text-base
                  text-blackSecondery
                  lg:leading-6
                  font-normal
                  mt-4
                  "
                  >
               <ul class="list-disc ml-5">
                  <li>Go to Jatri Website: <a href="https://ticket.jatri.co" class="font-semibold">https://ticket.jatri.co</a></li>
                  <li>Select your location</li>
                  <li>Select Bus Type</li>
                  <li>Select the date of your journey</li>
               </ul>
               </p>
            </div>
            <div
               class="
               lg:w-[392px]
               flex flex-col
               lg:items-start
               lg:text-left
               my-[32px]
               lg:my-0
               "
               >
               <img
                  src="@/assets/images/home/selectTicket.png"
                  alt=""
                  class="
                  w-[74px]
                  h-[80px]
                  lg:w-[127px] lg:h-[140px]
                  block
                  max-sm:m-auto
                  "
                  />
               <h2
                  class="
                  text-base
                  lg:text-2xl
                  text-blackPrimary
                  lg:leading-8
                  font-medium
                  mt-8
                  "
                  >
                  Select Ticket
               </h2>
               <p
                  class="
                  text-sm
                  lg:text-base
                  text-blackSecondery
                  lg:leading-6
                  font-normal
                  mt-4
                  "
                  >
               <ul class="list-disc ml-5">
                  <li>Click the <span class="font-semibold">View Seats</span> option</li>
                  <li>Provide all the information</li>
                  <li>Select your seats</li>
                  <li>Select the <span class="font-semibold">Next</span> option</li>
                  <li>Get your tickets</li>
               </ul>
               </p>
            </div>
            <div
               class="
               lg:w-[392px]
               flex flex-col
               lg:items-start
               lg:text-left
               "
               >
               <img
                  src="@/assets/images/home/payAndEnjoy.png"
                  alt=""
                  class="
                  w-[74px]
                  h-[80px]
                  lg:w-[128px] lg:h-[140px]
                  block
                  max-sm:m-auto
                  "
                  />
               <h2
                  class="
                  text-base
                  lg:text-2xl
                  text-blackPrimary
                  lg:leading-8
                  font-medium
                  mt-8
                  "
                  >
                  Pay and enjoy journey
               </h2>
               <p
                  class="
                  text-sm
                  lg:text-base
                  text-blackSecondery
                  lg:leading-6
                  font-normal
                  mt-4
                  "
                  >
               <ul class="list-disc ml-5">
                  <li>You can pay via SSLCommerz, Nagad and bKash</li>
                  <li>After making all the
                     payment procedures, you will get your ticket.
                  </li>
               </ul>
               </p>
            </div>
         </div>
         <div class="max-w-[840px] mx-auto">
            <div
               class="
               border-dashed border-[1px] border-[#6FB3EE]
               rounded-[20px]
               mt-12
               relative
               ml-[24px]
               "
               >
               <img
                  src="@/assets/images/home/easySteps.png"
                  alt=""
                  class="h-[48px] w-[48px] ml-[-24px] mt-[-24px] absolute top-[50%]"
                  />
               <div
                  class="
                  flex flex-col
                  md:flex-row
                  w-full
                  justify-between
                  items-center
                  p-4
                  pl-[46px]
                  md:p-6 md:pl-[46px]
                  "
                  >
                  <p
                     class="
                     text-base
                     lg:text-2xl
                     font-medium
                     text-blackPrimary
                     max-w-[456px]
                     "
                     >
                     Still confused? View detailed video to clear your confusion.
                  </p>
                  <button
                  @click="handleOnClick"
                     class="
                     bg-corporate
                     w-[149px]
                     lg:w-[216px]
                     h-[36px]
                     lg:h-[56px]
                     rounded-full
                     text-xs
                     lg:text-xl
                     font-medium
                     text-white
                     mt-4
                     md:mt-0
                     "
                     >
                  How to buy ticket
                  </button>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
export default {
  props: ["handleOnClick"],
};
</script>