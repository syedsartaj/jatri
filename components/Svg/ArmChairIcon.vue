<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 27 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7.08398 9.28571H7.08401L7.08396 9.28081C7.06653 7.50425 5.88513 5.9697 4.20898 5.46577V2.85714C4.20898 1.55826 5.26937 0.5 6.58398 0.5H18.084C19.3986 0.5 20.459 1.55826 20.459 2.85714V5.46577C18.7828 5.9697 17.6014 7.50425 17.584 9.28081H17.584V9.28571V12.3571H7.08398V9.28571Z" 
      :fill="fill" 
      :stroke="stroke"
    />
    <path d="M19.5215 14.7859H20.0215V14.2859V9.29246C20.0465 8.39698 20.7705 7.67153 21.6777 7.64326C22.585 7.67153 23.309 8.39698 23.334 9.29246V19.5002H20.959H18.084H6.58398H3.70898H1.33398V9.29246C1.359 8.39697 2.08296 7.67153 2.99023 7.64326C3.89751 7.67153 4.62147 8.39697 4.64648 9.29246V14.2859V14.7859H5.14648H19.5215Z" 
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
      default: "26",
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
