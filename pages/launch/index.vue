<template>
  <div class="bg-white">
    <LaunchBannerLarge/>
    <SearchFilterForm />
    <LaunchBannerSmall/>
    <HomePageOfferAndPromo />
    <WhyChooseSection />
    <EasyStepSection :handleOnClick="handleHowToBuyModal" />
    <HowToBuyModal v-if="howToBuyModalStatus" :close="handleHowToBuyModal" />
    <OperatorSection />
    <PopularRouteSection />
    <Blog />
    <HelpSection />
    <GlobalFooter />
  </div>
</template>

<script>
export default {
  middleware(ctx) {
    ctx.$gtm.push({ event: "ssr" });
  },
  data() {
    return {
      howToBuyModalStatus: false,
    };
  },
  methods: {
    handleHowToBuyModal() {
      this.howToBuyModalStatus = !this.howToBuyModalStatus;
    },
  },
};
</script>
