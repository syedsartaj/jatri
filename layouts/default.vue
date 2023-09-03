<template>
  <div>
    <!-- <Loader v-if="getLoading" /> -->
    <FullBusReserveModal v-if="getBusReserveModalOpenStatus" />
    <RequestSuccessfulModal v-if="getRequestSuccessfulStatus" />
    <SurpriseDealShowingModal v-if="getSurpriseDealModalStatus" />
    <CancelTicketOTPModal v-if="getIsTicketPopupOpen" />
    <div class="bg-corporateBg flex flex-col justify-start items-start h-full">
      <Header />
      <div class="w-full">
        <Nuxt />
      </div>
      <Footer />
    </div>
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
      "getBusReserveModalOpenStatus",
      "getRequestSuccessfulStatus",
    ]),
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
