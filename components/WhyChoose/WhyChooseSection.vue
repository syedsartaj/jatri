<template>
  <div class="pt-[40px] md:pt-[48px] lg:pt-[100px] px-4 lg:px-[100px]">
    <div>
      <div class="">
        <h2
          class="text-2xl md:text-[32px] lg:text-4xl text-blackPrimary text-center font-semibold lg:leading-[44px]"
        >
          Why Choose Jatri
        </h2>
        <img
          src="@/assets/images/home/curveBorder.svg"
          alt=""
          class="w-[203px] lg:w-[298px] block mx-auto"
        />
      </div>

      <div
        class="mt-[60px] flex flex-wrap xl:flex-nowrap justify-between lg:gap-x-[32px]"
      >
        <div class="lg:p-4 lg:w-[392px]">
          <img
            src="@/assets/images/home/two-tickets.png"
            alt=""
            class="w-[66px] block max-sm:m-auto"
          />
          <h2
            class="text-base md:text-xl lg:text-2xl text-blackPrimary lg:leading-8 font-medium mt-8"
          >
            Ease on the move
          </h2>
          <p
            class="text-sm lg:text-base text-blackSecondary lg:leading-6 font-normal mt-4"
          >
            Tickets are available on the go through our platform, no more
            queues!
          </p>
        </div>
        <div class="lg:p-4 lg:w-[392px] mt-8 lg:mt-0">
          <img v-if="selectedService=== 'bus'"
            src="@/assets/images/home/red-bus.png"
            alt=""
            class="w-[66px] block max-sm:m-auto"
          />
          <img v-else
            src="@/assets/images/icons/shipIcon.svg"
            alt=""
            class="w-[66px] block max-sm:m-auto"
          />
          <h2
            class="text-base md:text-xl lg:text-2xl text-blackPrimary lg:leading-8 font-medium mt-8"
          >
            Promise of convenient travel
          </h2>
          <p
            class="text-sm lg:text-base text-blackSecondary lg:leading-6 font-normal mt-4"
          >
            We have an excellent system of taking service based on preference,
            as there is ticketing service for multiple routes via different
            categories of {{selectedService.toLowerCase()}}es.
          </p>
        </div>
        <div class="lg:p-4 lg:w-[392px] mt-8 lg:mt-0">
          <img
            src="@/assets/images/home/security-badge.png"
            alt=""
            class="w-[66px] block max-sm:m-auto"
          />
          <h2
            class="text-base md:text-xl lg:text-2xl text-blackPrimary lg:leading-8 font-medium mt-8"
          >
            Reliability assured
          </h2>
          <p
            class="text-sm lg:text-base text-blackSecondary lg:leading-6 font-normal mt-4"
          >
            Whether you are travelling for work or leisure, book your tickets
            through us and keep all your worries away.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from "vuex";

export default {
  computed: {
      ...mapGetters("common", ["getSelectedServiceType"]),
      selectedService() {
        return this.getSelectedServiceType.toLowerCase();
      },
    },
}
</script>