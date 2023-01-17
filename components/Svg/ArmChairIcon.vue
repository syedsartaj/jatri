<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 30 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 12.0715H8.00002L7.99998 12.0666C7.97752 9.78486 6.42992 7.82005 4.25 7.21805V3.71438C4.25 1.94368 5.70055 0.500092 7.5 0.500092H22.5C24.2994 0.500092 25.75 1.94368 25.75 3.71438V7.21805C23.5701 7.82005 22.0225 9.78486 22 12.0666H22V12.0715V16.2144H8V12.0715Z"
      :fill="fill"
      :stroke="stroke"
    />
    <path
      d="M24.375 19.0715H24.875V18.5715V12.0779C24.9088 10.8325 25.92 9.82285 27.1875 9.78597C28.455 9.82285 29.4662 10.8325 29.5 12.0779V25.5001H26.25H22.5H7.5H3.75H0.5V12.078C0.533789 10.8325 1.54504 9.82285 2.8125 9.78597C4.07996 9.82285 5.09121 10.8325 5.125 12.078V18.5715V19.0715H5.625H24.375Z"
      :fill="fill"
      :stroke="stroke"
    />
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: "30",
    },
    height: {
      type: String,
      default: "26",
    },
    fill: {
      type: String,
      default: "#DCDCDC",
    },
    stroke: {
      type: String,
      default: "#DCDCDC",
    },
  },
};
</script>

<style></style>
