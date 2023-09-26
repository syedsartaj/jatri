<template>
  <div
    class="bg-bgShade3 py-[40px] lg:py-[60px] px-8 md:px-12 lg:px-[100px] mt-10 md:mt-[48px] lg:mt-[100px]"
  >
    <h2
      class="text-[24px] md:text-[32px] lg:text-4xl text-blackPrimary text-center font-semibold lg:leading-[44px]"
    >
      Easy steps to enjoy journey
    </h2>
    <div
      class="mt-8 lg:mt-[48px] flex flex-col justify-evenly md:flex-row md:gap-x-4 lg:gap-x-8"
    >
      <div
        class="w-full lg:w-[392px] flex flex-col lg:items-start lg:text-left"
      >
        <img
          src="@/assets/images/home/searchDestination.png"
          alt=""
          class="h-[80px] w-[98px] md:w-[120px] md:h-[100px] lg:w-[170px] lg:h-[140px] block max-sm:m-auto"
        />
        <h2
          class="text-base lg:text-2xl text-blackPrimary lg:leading-8 font-medium mt-8"
        >
          Search destination!
        </h2>
        <div
          class="text-sm lg:text-base text-blackSecondary lg:leading-6 font-normal mt-4"
        >
          <ul class="list-disc ml-5">
            <li>
              Go to Jatri Website:
              <a href="https://ticket.jatri.co" class="font-semibold"
                >https://ticket.jatri.co</a
              >
            </li>
            <li>Select your location</li>
            <li>Select Bus Type</li>
            <li>Select the date of your journey</li>
          </ul>
        </div>
      </div>
      <div
        class="w-full lg:w-[392px] flex flex-col lg:items-start lg:text-left my-[32px] md:my-0"
      >
        <img
          src="@/assets/images/home/selectTicket.png"
          alt=""
          class="w-[74px] h-[80px] md:w-[92px] md:h-[100px] lg:w-[127px] lg:h-[140px] block max-sm:m-auto"
        />
        <h2
          class="text-base lg:text-2xl text-blackPrimary lg:leading-8 font-medium mt-8"
        >
          Select ticket!
        </h2>
        <div
          class="text-sm lg:text-base text-blackSecondary lg:leading-6 font-normal mt-4"
        >
          <ul class="list-disc ml-5">
            <li>
              Click the <span class="font-semibold">View Seats</span> option
            </li>
            <li>Select your seats</li>
            <li>Provide all the information</li>
            <li>Select the <span class="font-semibold">Next</span> option</li>
            <li>
              By clicking on the operator name/image, you can see the entire bus
              image
            </li>
          </ul>
        </div>
      </div>
      <div
        class="w-full lg:w-[392px] flex flex-col lg:items-start lg:text-left"
      >
        <img
          src="@/assets/images/home/payAndEnjoy.png"
          alt=""
          class="w-[74px] h-[80px] md:w-[91px] md:h-[100px] lg:w-[128px] lg:h-[140px] block max-sm:m-auto"
        />
        <h2
          class="text-base lg:text-2xl text-blackPrimary lg:leading-8 font-medium mt-8"
        >
          Pay and enjoy journey!
        </h2>
        <div
          class="text-sm lg:text-base text-blackSecondary lg:leading-6 font-normal mt-4"
        >
          <ul class="list-disc ml-5">
            <li>You can pay via SSLCommerz, Nagad and bKash</li>
            <li>
              After making all the payment procedures, you will get your ticket.
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="max-w-[840px] mx-auto">
      <div
        class="border-dashed border-[1px] border-[#6FB3EE] rounded-[20px] mt-12 relative ml-[24px]"
      >
        <img
          src="@/assets/images/home/easySteps.png"
          alt=""
          class="h-[48px] w-[48px] ml-[-24px] mt-[-24px] absolute top-[50%]"
        />
        <div
          class="flex flex-col md:flex-row w-full justify-between items-center p-4 pl-[46px] md:p-6 md:pl-[46px]"
        >
          <p
            class="text-base md:text-xl lg:text-2xl font-medium text-blackPrimary max-w-[456px]"
          >
            Still confused? View detailed video to clear your confusion.
          </p>
          <button
            @click="handleOnClick"
            class="bg-corporate w-[149px] lg:w-[216px] h-[36px] lg:h-[56px] rounded-full text-xs lg:text-xl font-medium text-white mt-4 md:mt-0"
          >
            How to buy ticket
          </button>
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
