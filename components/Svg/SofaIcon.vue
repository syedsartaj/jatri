<template>
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="3.07715"
      y="3.07715"
      width="13.8462"
      height="1.53846"
      rx="0.769231"
      :fill="hover ? '#FFFFFF' : '#151414'"
    />
    <rect
      x="3.07715"
      y="6.15381"
      width="13.8462"
      height="10.7692"
      rx="2"
      :fill="hover ? '#FFFFFF' : '#151414'"
    />
    <rect
      x="2.30762"
      y="6.15381"
      width="6.15385"
      height="1.53846"
      rx="0.769231"
      transform="rotate(90 2.30762 6.15381)"
      :fill="hover ? '#FFFFFF' : '#151414'"
    />
    <rect
      x="19.231"
      y="6.15381"
      width="6.15385"
      height="1.53846"
      rx="0.769231"
      transform="rotate(90 19.231 6.15381)"
      :fill="hover ? '#FFFFFF' : '#151414'"
    />
  </svg>
</template>

<script>
export default {
  props: {
    hover: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style></style>
