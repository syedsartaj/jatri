<template>
  <div class="relative z-[99999999]">
    <div
      class="fixed inset-0 bg-blackPrimary bg-opacity-50 transition-opacity"
    ></div>

    <div class="fixed inset-0 z-10">
      <div class="lg:items-center lg:px-[100px] lg:p-25 lg:mt-10 p-[16px]">
        <div
          class="
            relative
            transform
            overflow-hidden
            lg:rounded-lg
            bg-white
            text-left
            shadow-xl
            transition-all
            w-full
            lg:pb-10
          "
        >
          <div class="bg-white py-6 px-10 w-full">
            <div class="flex justify-between">
              <div class="flex justify-start gap-x-4 items-center w-10/12">
                <img
                  :src="
                    (companyImages?.logo &&
                      `${imageUrl}${companyImages?.logo}`) ||
                    require(`@/assets/images/busDefaultImage.svg`)
                  "
                  class="h-[56px] w-[56px]"
                  alt=""
                />
                <div>
                  <h2 class="text-sm lg:text-xl font-medium text-blackPrimary">
                    {{ companyName }}
                  </h2>
                </div>
              </div>

              <button @click="() => close()" class="pr-[6px]">
                <img src="@/assets/images/icons/closeIcon.svg" alt="" />
              </button>
            </div>
          </div>
          <hr />
          <div
            class="
              bg-white
              overflow-x-auto
              max-h-[85vh]
              md:max-h-[calc(100vh-300px)]
              w-full
            "
          >
            <ul
              class="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-6 p-10 pb-0"
            >
              <li
                v-for="bus in companyImages.gallery"
                :key="bus"
                class="gallery-item flex items-center rounded-md justify-center"
              >
                <img :src="imageUrl + bus" class="md:w-[376px] lg:w-[750px]" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["companyName", "close", "companyImages"],
  data() {
    return {
      imageUrl: "",
    };
  },
  mounted() {
    this.imageUrl = process.env.OFFER_IMAGE_BASE_URL;
  },
  methods: {
    getImgUrl(url) {
      return url;
    },
  },
  computed: {},
};
</script>

<style scoped>
.gallery-container {
  display: flex;
  flex-direction: row;
}
</style>