// import Vue from "vue";
Vue.mixin({
  methods: {
    dateFormatter(date) {
			let newDate = new Date(date)
      return newDate.setHours(newDate.getHours() - 6).toLocaleString(
        "en-US",
        {
          dateStyle: "medium",
        }
      );
    },

    timeFormatter(date) {
			let newDate = new Date(date)
      return newDate.setHours(newDate.getHours() - 6).toLocaleString(
        "en-US",
        {
          timeStyle: "short",
        }
      );
    },

    dateTimeFormatter(date) {
			let newDate = new Date(date)
      return newDate.setHours(newDate.getHours() - 6).toLocaleString(
        "en-US",
        {
          dateStyle: "medium",
          timeStyle: "short",
        }
      );
    },

    timeCalculateAndFormatter(date, time) {
      return new Date(
        new Date(date) - 6 * 60 * 60 * 1000 - time
      ).toLocaleString("en-US", {
        timeStyle: "short",
      });
    },
  },
});
