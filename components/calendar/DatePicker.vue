<template>
  <div :class="width" class="custom-filter-element">
    <div class="flex justify-center">
      <div class="relative w-full">
        <button
          :class="customDesign"
          class="relative z-10 block rounded-lg bg-white p-2 focus:outline-none w-full"
          @click="toggleDropdown"
        >
          <div class="flex gap-1 xl:gap-x-3">
            <div class="flex justify-center items-center">
              <div
                v-if="icon"
                class="rounded-xl lg:h-[30px] xl:h-[40px] lg:w-[30px] xl:w-[40px] h-[40px] w-[40px] flex items-center justify-center"
              >
                <img :src="icon" alt="Icon" class="w-8" />
              </div>
              <div class="ml-2">
                <p
                  v-if="label"
                  class="font-inter flex items-start text-xs text-secondary_p"
                >
                  {{ label }}
                </p>
                <p v-if="date !== ''">
                  {{
                    new Date(date).toLocaleString("es-CL", {
                      dateStyle: "medium",
                    })
                  }}
                </p>
                <p
                  v-else
                  class="font-inter font-[500] text-xs lg:text-[8px] xl:text-xs text-td_text"
                >
                  <span v-if="defaultOption">{{ defaultOption }}</span>
                  <span v-else>Select Date</span>
                </p>
              </div>
            </div>
          </div>
        </button>
        <div
          v-show="optionsIsOpen"
          class="mt-5 bg-white rounded-md shadow-xl z-[1000] leading-6 before:block before:-mt-2 before:ml-20 before:-skew-y-3 before:bg-white before:h-5 before:w-5 before:rotate-45 absolute divide-y-2"
        >
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
