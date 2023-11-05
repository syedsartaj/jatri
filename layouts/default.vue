<template>
  <div>
    <div class="bg-corporateBg flex flex-col h-full w-full">
      <GlobalHeader />
      <Header />
      <HeadLine
        v-if="headlineVisibility"
        :headline="
          getSelectedServiceType === 'BUS'
            ? this.getHeadLine[0].busSettings.headline
            : this.getHeadLine[0].launchSettings.headline
        "
        :speed="30"
        direction="left"
        behavior="scroll"
      />
      <Nuxt />
      <GlobalFooter />
    </div>

    <FullBusReserveModal v-if="getBusReserveModalOpenStatus" />
    <RequestSuccessfulModal v-if="getRequestSuccessfulStatus" />
    <SurpriseDealShowingModal v-if="getSurpriseDealModalStatus" />
    <CancelTicketOTPModal v-if="getIsTicketPopupOpen" />
    <SearchTicketOTPModal v-if="getIsSearchTicketOtpPopupOpen" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
var Tawk_API = Tawk_API || {},
  Tawk_LoadStart = new Date();
export default {
  mounted() {
    // this.liveChat();
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("busStore", ["getSurpriseDealModalStatus"]),
    ...mapGetters("common", [
      "getIsTicketPopupOpen",
      "getIsSearchTicketOtpPopupOpen",
      "getBusReserveModalOpenStatus",
      "getRequestSuccessfulStatus",
      "getHeadLine",
      "getSelectedServiceType",
    ]),
    headlineVisibility() {
      const path = this.$route.path.toString();

      if ((path === "/" || path === "/bus") && this.getHeadLine?.length) {
        return this.getHeadLine[0].busSettings.headline;
      } else if (path === "/launch") {
        return this.getHeadLine[0].launchSettings.headline;
      }
      return false;
    },
  },
  methods: {
    liveChat() {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = process.env.TAWK_SOURCE_URL;
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    },
  },
};
</script>
