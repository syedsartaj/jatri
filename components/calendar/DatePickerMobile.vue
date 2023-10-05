<template>
  <div class="">
    <button
      :class="optionsIsOpen && 'border border-[#4D4D4F]'"
      class="flex justify-between items-center rounded bg-[#F7F7F7] focus:outline-none w-full px-[12px] py-[10px]"
      @click="toggleDropdown"
    >
      <div class="flex justify-start gap-x-4 items-center w-10/12">
        <img v-if="icon" :src="icon" alt="" />
        <p
          v-if="label && dateUpdate === ''"
          class="text-sm font-normal text-blackPrimary text-left"
        >
          {{ label }}
        </p>
        <p
          v-if="dateUpdate !== ''"
          class="text-sm font-normal text-blackPrimary text-left"
        >
          {{
            (() => {
              const months = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ];
              const date = new Date(dateUpdate);
              const day = date.getDate();
              const month = months[date.getMonth()];
              const year = date.getFullYear();
              return `${day} ${month} ${year}`;
            })()
          }}
        </p>
      </div>
      <img
        src="@/assets/images/icons/mobileFilterDropdownIcon.svg"
        alt=""
        :class="optionsIsOpen ? 'transition-all ease-in-out rotate-180' : ''"
      />
    </button>

    <!-- dropdown -->
    <div
      v-if="optionsIsOpen"
      class="mt-2 max-w-[348px] bg-white rounded shadow-xl z-[1000] leading-6 absolute divide-y-2 left-1/2 transform -translate-x-1/2"
    >
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
</template>

<script>
import { dateFormat } from "../../helpers/dateTimeFormat";
import moment from "moment";
export default {
  name: "DatePicker",
  model: {
    prop: "dateUpdate",
    event: "update:dateUpdate",
  },
  props: {
    dateUpdate: {
      require: true,
    },
    icon: {
      type: String,
      required: false,
    },
    width: {
      type: String,
      required: false,
      default: "lg:w-1/5 w-full",
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
      date: "",
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
    if (this.defaultValue) {
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
      if (this.maxAllowDate) {
        return moment(new Date())
          .add(this.maxAllowDate, "d")
          .format("YYYY-MM-DD HH:mm:ss");
      }
    },
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
