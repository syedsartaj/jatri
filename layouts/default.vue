<template>
  <div>
    <!-- <Loader v-if="getLoading" /> -->
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
// import { mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  // computed: {
  //   ...mapGetters(['getLoading']),
  // },
}
</script>
