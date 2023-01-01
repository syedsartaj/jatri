<template>
  <div>
    <div
      class="
        flex
        justify-between
        px-2
        py-[10px]
        border border-[#DBDBDB]
        rounded
        mt-[10px]
        w-full
      "
      @click="toggleDropdown"
    >
      <p
        class="
          lg:text-xs
          text-sm
          2xl:text-base
          font-normal
          text-blackPrimary text-left
        "
        v-if="dateUpdate !== ''"
      >
        {{
          new Date(dateUpdate).toLocaleString("es-CL", { dateStyle: "medium" })
        }}
      </p>
      <p
        class="
          lg:text-xs
          text-sm
          2xl:text-base
          font-normal
          text-blackPrimary text-left
        "
        v-else-if="defaultOption"
      >
        Select a date
      </p>
      <img
        src="@/assets/images/home/calendar.svg"
        alt="arrow-down"
        class="w-6 h-6 cursor-pointer"
      />
    </div>
    <div
      v-if="optionsIsOpen"
      class="
        bg-white
        rounded-md
        shadow-xl
        z-[1000]
        leading-6
        absolute
        divide-y-2
      "
    >
      <div class="text-center p-4">
        <h2 class="font-inter text-sm xl:text-[20px] font-[400]">
          <span>{{ defaultOption }}</span>
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
    errorOccured: {
      type: Boolean,
      required: true,
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
    showErrorToolTip() {
      return this.errorOccured && !this.dateUpdate;
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
