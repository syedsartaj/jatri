<template>
  <div class="w-1/4 p-[8px]">
    <button v-bind:class="showErrorToolTip && 'border-[#E0293B]'" class="block rounded-lg bg-white focus:outline-none w-full lg:p-2 border-[1px] border-[#DBDBDB] cursor-pointer" @click="toggleDropdown">
      <p v-if="label" class="lg:text-[10px] xl:text-xs font-normal text-blackSecondery text-left uppercase"> {{label}} </p>
      <div v-if="dateUpdate !== ''" class="flex justify-between">
        <p
          class="
            lg:text-xs
            xl:text-sm
            2xl:text-base
            font-medium
            text-blackPrimary text-left
          "
        >
          {{ new Date(dateUpdate).toLocaleString("es-CL", { dateStyle: "medium", }) }} 
        </p>
        <img
          src="@/assets/images/home/calendar.svg"
          alt="arrow-down"
          class="w-6 h-6"
        />
      </div>
      <div v-else-if="defaultOption" class="flex justify-between">
        <p
          class="
            lg:text-xs
            xl:text-sm
            2xl:text-base
            font-medium
            text-blackPrimary text-left
          "
        >
          {{ defaultOption }} 
        </p>
        <img
          src="@/assets/images/home/calendar.svg"
          alt="arrow-down"
          class="w-6 h-6"
        />
      </div>
      <div v-else class="flex justify-between">
        <p
          class="
            lg:text-xs
            xl:text-sm
            2xl:text-base
            font-medium
            text-blackPrimary text-left
          "
        >
          Select Journey Date
        </p>
        <img
          src="@/assets/images/home/calendar.svg"
          alt="arrow-down"
          class="w-6 h-6"
        />
      </div>
    </button>
    <!-- ErrorToolTip -->
    <SearchErrorToolTip v-if="showErrorToolTip" message="Select journey date first"/>

    <div v-if='optionsIsOpen' class='mt-10 -ml-5 bg-white rounded-md shadow-xl z-[1000] leading-6 before:block before:-mt-2 before:ml-20 before:-skew-y-3 before:bg-white before:h-5 before:w-5 before:rotate-45 absolute divide-y-2'>
      <div class='text-center p-4'>
        <h2 class='font-inter text-sm xl:text-[20px] font-[400]'>
          <span>{{defaultOption}}</span>
        </h2>
      </div>
      <div class="">
        <v-date-picker
          class="inline-block h-full border-none"
          mode="date"
          v-model="dateUpdate"
          color="teal"
          :masks="masks"
          :model-config="modelConfig"
          :min-date="new Date()"
          :max-date="maxDateAllow"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { dateFormat } from "../../helpers/dateTimeFormat";
import SearchErrorToolTip from "../SearchForm/SearchErrorToolTip.vue";
import moment from 'moment';
export default {
  components: {
    SearchErrorToolTip
  },
  name: "DatePicker",
  model: {
    prop: 'dateUpdate',
    event: 'update:dateUpdate',
  },
  props: {
    dateUpdate: {
      require: true
    },
    icon: {
      type: String,
      required: false,
    },
    width: {
      type: String,
      required: false,
      default: 'lg:w-1/5 w-full'
    },
    customDesign: {
      type: String,
      required: false,
    },
    label: {
      type: String,
      required: false,
    },
    defaultOption: {
      type: String,
      required: false,
    },
    defaultValue: {
      type: String,
      required: false,
    },
    maxAllowDate: {
      required: false,
    },
    errorOccured: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      optionsIsOpen: false,
      date: '',
      modelConfig: {
        type: "string",
        mask: "YYYY-MM-DD",
      },
      masks: {
        input: "YYYY-MM-DD",
      },
    };
  },
  mounted() {
    if(this.defaultValue) {
      this.date = this.defaultValue;
    }
    window.addEventListener("click", this.close);
    this.$emit("input", this.date);
  },

  beforeDestroy() {
    window.removeEventListener("click", this.close);
  },
  methods: {
    toggleDropdown() {
      this.optionsIsOpen = !this.optionsIsOpen;
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.optionsIsOpen = false;
      }
    },
  },
  computed: {
    maxDateAllow() {
      if(this.maxAllowDate) {
        return moment(new Date()).add(this.maxAllowDate, 'd').format('YYYY-MM-DD HH:mm:ss')
      }
    },
    showErrorToolTip () {
        return this.errorOccured && !this.dateUpdate;
      }
  },
  watch: {
    dateUpdate() {
      this.$emit("update:dateUpdate", this.dateUpdate);
      this.optionsIsOpen = false;
    },
  },
};
</script>

<style>
.border-none {
  border: 0 !important;
}
</style>
