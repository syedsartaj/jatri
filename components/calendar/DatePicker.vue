<template>
  <div class="w-1/4 px-6 py-4">
    <button class="block rounded-lg bg-white focus:outline-none w-full cursor-pointer" @click="toggleDropdown">
      <p v-if="label" class="text-xs font-normal text-blackSecondery text-left uppercase"> {{label}} </p>
      <p v-if="date !== ''" class="text-base font-medium text-blackPrimary text-left"> {{ new Date(date).toLocaleString("es-CL", { dateStyle: "medium", }) }} </p>
      <p v-else class="text-base font-medium text-blackPrimary text-left"> 
          <span v-if='defaultOption'>{{ defaultOption }}</span>
          <span v-else>Select Journey Date</span>     
      </p>
    </button>
    <div v-if='optionsIsOpen' class='mt-10 -ml-5 bg-white rounded-md shadow-xl z-[1000] leading-6 before:block before:-mt-2 before:ml-20 before:-skew-y-3 before:bg-white before:h-5 before:w-5 before:rotate-45 absolute divide-y-2'>
      <v-date-picker
        class="inline-block h-full border-none"
        mode="date"
        v-model="date"
        color="teal"
        :masks="masks"
        :model-config="modelConfig"
        :min-date="new Date()"
        :max-date="maxDateAllow"
      />
    </div>
  </div>
</template>

<script>
import { dateFormat } from "../../helpers/dateTimeFormat";
import moment from 'moment';
export default {
  name: "DatePicker",
  props: {
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
    }
  },
  watch: {
    date() {
      this.$emit("input", this.date);
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
