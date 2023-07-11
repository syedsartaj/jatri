<template>
  <div
    class="flex bg-white h-[40px] lg:h-[36px] justify-between rounded-t-[10px] max-w-max ml-[10px]"
  >
    <div
      :class="getServiceClassName(ServiceType.BUS)"
      @click="handleServiceChange(ServiceType.BUS)"
    >
      <svg
        class="h-[20px] w-[20px] lg:h-[24px] lg:w-[24px]"
        width="20"
        height="19"
        viewBox="0 0 20 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 17H5V18C5 18.2652 4.89464 18.5196 4.70711 18.7071C4.51957 18.8946 4.26522 19 4 19H2C1.73478 19 1.48043 18.8946 1.29289 18.7071C1.10536 18.5196 1 18.2652 1 18V9H0V5H1V2C1 1.46957 1.21071 0.960859 1.58579 0.585786C1.96086 0.210714 2.46957 0 3 0H17C17.5304 0 18.0391 0.210714 18.4142 0.585786C18.7893 0.960859 19 1.46957 19 2V5H20V9H19V18C19 18.2652 18.8946 18.5196 18.7071 18.7071C18.5196 18.8946 18.2652 19 18 19H16C15.7348 19 15.4804 18.8946 15.2929 18.7071C15.1054 18.5196 15 18.2652 15 18V17ZM3 2V9H17V2H3ZM5.5 15C5.89782 15 6.27936 14.842 6.56066 14.5607C6.84196 14.2794 7 13.8978 7 13.5C7 13.1022 6.84196 12.7206 6.56066 12.4393C6.27936 12.158 5.89782 12 5.5 12C5.10218 12 4.72064 12.158 4.43934 12.4393C4.15804 12.7206 4 13.1022 4 13.5C4 13.8978 4.15804 14.2794 4.43934 14.5607C4.72064 14.842 5.10218 15 5.5 15ZM14.5 15C14.8978 15 15.2794 14.842 15.5607 14.5607C15.842 14.2794 16 13.8978 16 13.5C16 13.1022 15.842 12.7206 15.5607 12.4393C15.2794 12.158 14.8978 12 14.5 12C14.1022 12 13.7206 12.158 13.4393 12.4393C13.158 12.7206 13 13.1022 13 13.5C13 13.8978 13.158 14.2794 13.4393 14.5607C13.7206 14.842 14.1022 15 14.5 15Z"
          :fill="selectedService === ServiceType.BUS ? 'white' : '#151414'"
        />
      </svg>

      <span
        :class="
          selectedService === ServiceType.BUS ? 'text-white' : 'text-black'
        "
        class="text-xs lg:text-xl font-medium ml-[10px]"
        >Bus</span
      >
    </div>
    <div
      :class="getServiceClassName(ServiceType.LAUNCH)"
      @click="handleServiceChange(ServiceType.LAUNCH)"
    >
      <svg
        class="h-[20px] w-[20px] lg:h-[24px] lg:w-[24px]"
        width="23"
        height="21"
        viewBox="0 0 23 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 3H13.446C13.6156 3 13.7824 3.04314 13.9308 3.12536C14.0791 3.20758 14.2041 3.32617 14.294 3.47L17.75 9H22.158C22.2448 8.99994 22.3302 9.02248 22.4056 9.06542C22.4811 9.10837 22.5441 9.17022 22.5884 9.24489C22.6327 9.31957 22.6568 9.40449 22.6583 9.49131C22.6598 9.57812 22.6387 9.66383 22.597 9.74L18.66 16.957C17.7794 17.075 16.8832 16.9559 16.064 16.6118C15.2448 16.2678 14.5323 15.7114 14 15C13.5347 15.6214 12.9309 16.1258 12.2365 16.473C11.5421 16.8202 10.7763 17.0006 10 17C9.22367 17.0006 8.45788 16.8202 7.76351 16.473C7.06913 16.1258 6.4653 15.6214 6 15C5.47889 15.6962 4.78494 16.2443 3.98687 16.5898C3.1888 16.9354 2.3143 17.0664 1.45 16.97L0.214 10.179C0.187777 10.0349 0.193542 9.88674 0.230886 9.74509C0.268229 9.60343 0.33624 9.47171 0.430108 9.35924C0.523977 9.24677 0.64141 9.1563 0.774102 9.09422C0.906794 9.03214 1.0515 8.99998 1.198 9H2V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H4V0H8V3ZM4 9H15.392L12.892 5H4V9ZM2 19C3.47626 19.002 4.90107 18.4578 6 17.472C7.09893 18.4578 8.52374 19.002 10 19C11.4763 19.002 12.9011 18.4578 14 17.472C15.0989 18.4578 16.5237 19.002 18 19H20V21H18C16.5956 21.0023 15.2157 20.6331 14 19.93C12.7843 20.6331 11.4044 21.0023 10 21C8.59564 21.0023 7.21565 20.6331 6 19.93C4.78435 20.6331 3.40436 21.0023 2 21H0V19H2Z"
          :fill="selectedService === ServiceType.LAUNCH ? 'white' : '#151414'"
        />
      </svg>

      <span
        :class="
          selectedService === ServiceType.LAUNCH ? 'text-white' : 'text-black'
        "
        class="text-xs lg:text-xl font-medium ml-[10px]"
        >Launch</span
      >
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import { ServiceType } from "../../helpers/utils";

export default {
  name: "SearchTab",
  data() {
    return {
      ServiceType: ServiceType,
    };
  },
  methods: {
    ...mapMutations("common", ["setSelectedService"]),
    handleServiceChange(value) {
      this.$router.push(`/${value.toLowerCase()}`);
    },
    getServiceClassName(service) {
      return {
        "w-full p-4 flex justify-between items-center flex-row cursor-pointer": true,
        "rounded-t-[10px] bg-[#1E88E5]": this.selectedService === service,
      };
    },
    checkRoutePath() {
      const path = this.$route.path.toString();

      if (path === "/launch") {
        this.setSelectedService(ServiceType.LAUNCH);
      } else if (path === "/bus" || path === "/") {
        this.setSelectedService(ServiceType.BUS);
      }
    },
  },
  computed: {
    ...mapGetters("common", ["getSelectedServiceType"]),
    selectedService() {
      return this.getSelectedServiceType;
    },
  },
  created() {
    this.checkRoutePath();
  },
  watch: {
    "$route.query": {
      immediate: true,
      handler() {
        this.checkRoutePath();
      },
    },
  },
};
</script>
