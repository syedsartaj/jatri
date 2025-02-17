<template>
  <div class="px-4 xl:px-[100px] pb-10 xl:pb-[100px] bg-[#F7F7F7]">
    <div
      class="pt-6 xl:pt-[40px] pb-[32px] text-blackPrimary font-inter text-[36px] leading-[44px] font-semibold"
    >
      Featured offers
    </div>
    <div
      v-for="(offer, index) in offerPromoGetter"
      :id="offer._id"
      :ref="offer.code"
      :key="index"
      class="bg-white rounded-2xl mb-4"
    >
      <div class="p-6 xl:grid xl:grid-cols-3 xl:gap-4 justify-start">
        <div class="xl:col-span-2">
          <img
            class="w-full rounded-2xl"
            :src="offer.image"
            alt="offer image"
          />
        </div>
        <div
          class="flex flex-col pt-4 md:grid md:grid-cols-3 xl:col-span-1 xl:flex xl:flex-col gap-4 xl:justify-start xl:items-center md:pt-4 xl:pt-0 xl:pl-4"
        >
          <div v-if="!offer?.title"
            class="w-full border border-solid border-[#EDEDED] p-4 rounded-lg"
          >
            <div class="flex justify-start items-center">
              <div>
                <img
                  class="w-5"
                  src="~/assets/images/price-tag.svg"
                  alt="price tag"
                />
              </div>
              <div class="pl-2 text-base text-[#4D4D4F] font-inter font-medium">
                Discount amount
              </div>
            </div>
            <div class="pt-4 text-[#151414] font-inter text-xl font-medium">
              {{
                  offer.offerType === "percentage"
                  ? `${offer.amount}% upto BDT ${offer.maxOfferAmount}`
                  : `BDT ${offer.amount} per seat`
              }}
            </div>
          </div>

          <div
            v-if="!offer?.title"
            class="w-full border border-solid border-[#EDEDED] p-4 rounded-lg"
          >
            <div class="flex justify-start items-center">
              <div>
                <img
                  class="w-5"
                  src="~/assets/images/calendar.svg"
                  alt="price tag"
                />
              </div>
              <div class="pl-2 text-base text-[#4D4D4F] font-inter font-medium">
                Offer validity
              </div>
            </div>
            <div class="pt-4 text-[#151414] font-inter text-xl font-medium">
              Valid till {{ validity(offer.toDate) }}
            </div>
          </div>

          <div
            v-if="offer.code"
            class="w-full border border-solid border-[#EDEDED] p-4 rounded-lg"
          >
            <div class="flex justify-start items-center">
              <div>
                <img
                  class="w-5"
                  src="~/assets/images/promo.svg"
                  alt="price tag"
                />
              </div>
              <div class="pl-2 text-base text-[#4D4D4F] font-inter font-medium">
                Promo code
              </div>
            </div>
            <div
              @click="handlePromoCopy(offer.code)"
              class="mt-4 p-3 bg-[#eff7fd] flex justify-between items-center cursor-pointer rounded-lg border border-[#8FC4F2] border-dashed"
            >
              <div class="text-blackPrimary font-inter text-xl font-medium">
                {{ offer.code }}
              </div>
              <div>
                <img
                  class="w-8"
                  src="~/assets/images/copy-button.svg"
                  alt="copy promo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="
          offer.details !== 'undefined' &&
          offer.details &&
          offer.details.length > MAX_DETAIILS_LEN &&
          clickedOffer !== index
        "
        class="px-6 pb-6"
      >
        <div
          class="text-base font-normal text-blackLight"
          v-html="offer.details.slice(0, MAX_DETAIILS_LEN).concat(['...'])"
        ></div>
        <span
          @click="() => changeClickedOffer(index)"
          class="font-bold cursor-pointer"
          >See more</span
        >
      </div>

      <div
        v-if="
          (offer.details !== 'undefined' &&
            offer.details &&
            offer.details.length < MAX_DETAIILS_LEN) ||
          clickedOffer === index
        "
        class="px-6 pb-6"
        v-html="offer.details"
      ></div>

      <div class="flex justify-start items-center pl-6 pb-6">
        <div
          @click="gotoHomePage"
          class="bg-corporate cursor-pointer rounded-full max-w-[185px] flex justify-start items-center py-[11px] pl-8 pr-8"
        >
          <div
            class="pr-2 text-white text-base xl:text-xl font-medium font-inter"
          >
            Book Now
          </div>
          <div>
            <img
              class="w-4"
              src="~assets/images/icons/rightArrowWhite.svg"
              alt="right arrow"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { dateTimeFormat } from "@/helpers/dateTimeFormat";
import { mapGetters } from "vuex";

export default {
  name: "FeaturedOffers",
  data() {
    return {
      MAX_DETAIILS_LEN: 250,
      clickedOffer: undefined,
    };
  },
  mounted() {
    if (this.getPromoCode().includes(this.$route.params.id)) {
      setTimeout(() => {
        const el = document.getElementById(this.$route.params.id);
        window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
      }, 1);
    }
  },

  beforeDestroy() {},
  methods: {
    validity(time) {
      return dateTimeFormat(time, 0, "DD MMM YYYY");
    },
    changeClickedOffer(index) {
      this.clickedOffer = index;
    },
    gotoHomePage() {
      this.$router.push("/bus");
    },
    handlePromoCopy(promoCode) {
      navigator.clipboard.writeText(promoCode);
      navigator.clipboard.readText();
    },
    getPromoCode() {
      return this.offerPromoGetter.map((offer) => offer._id);
    },
  },
  components: {},
  computed: {
    ...mapGetters("common", ["offerPromoGetter"]),
  },
};
</script>

<style scoped></style>
