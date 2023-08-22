<template>
  <div class="bg-white">
    <BannerSectionLarge />

    <!-- Sticky search Box Start -->
    <div
      v-if="showStickySearchBox"
      :class="
        getHeadLine?.length && getHeadLine[0].headline
          ? 'top-[130px]'
          : 'top-[70px]'
      "
      class="sticky z-50 hidden lg:block"
    >
      <div
        class="absolute lg:right-[80px] xl:right-[100px] lg:left-[80px] xl:left-[100px]"
      >
        <SearchFilterForm />
      </div>
    </div>

    <!-- Sticky search Box End -->

    <BannerSectionMobile />

    <HomePageOfferAndPromo />

    <EasyStepSection :handleOnClick="handleHowToBuyModal" />

    <div v-if="howToBuyModalStatus">
      <HowToBuyModal :close="handleHowToBuyModal" />
    </div>

    <WhyChooseSection />

    <OperatorSection />

    <PopularRouteSection />

    <Blog />

    <HelpSection />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { Hooper, Slide } from "hooper";
export default {
  middleware(ctx) {
    ctx.$gtm.push({ event: "ssr" });
  },
  data() {
    return {
      howToBuyModalStatus: false,
      isMobile: false,
      showStickySearchBox: false,
    };
  },
  components: { Hooper, Slide },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.onResize();
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.onResize);
  },
  unmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {
    ...mapGetters("common", ["getHeadLine"]),
  },
  methods: {
    handleHowToBuyModal() {
      this.howToBuyModalStatus = !this.howToBuyModalStatus;
    },
    onResize() {
      const isMobile = window.innerWidth < 1024;
      this.isMobile = isMobile;
    },
    handleScroll() {
      this.handleShowStickyBanner();
    },
    handleShowStickyBanner() {
      if (!this.isMobile) {
        const innerWidth = window.innerWidth;
        const pageYOffset = window.pageYOffset;
        if (innerWidth >= 1750) {
          this.showStickySearchBox = pageYOffset >= 600;
        } else if (innerWidth >= 1536) {
          this.showStickySearchBox = pageYOffset >= 550;
        } else if (innerWidth >= 1280) {
          this.showStickySearchBox = pageYOffset >= 450;
        } else if (innerWidth >= 992) {
          this.showStickySearchBox = pageYOffset >= 400;
        } else {
          this.showStickySearchBox = false;
        }
      }
    },
  },
};
</script>
