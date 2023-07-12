<template>
  <svg
    width="28"
    height="40"
    viewBox="0 0 28 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="0.5" y="0.5" width="27" height="39" rx="1.5" :fill="fill" />
    <rect
      x="6"
      y="4"
      width="16"
      height="3"
      :fill="fill == '#48A43F' || fill == '#8D8D8F' ? 'white' : '#8D8D8F'"
    />
    <rect x="0.5" y="0.5" width="27" height="39" rx="1.5" :stroke="stroke" />
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: "28",
    },
    height: {
      type: String,
      default: "40",
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
