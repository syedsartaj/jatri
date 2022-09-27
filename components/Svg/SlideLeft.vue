<template>
     <svg
          :width="width"
          :height="height"
          viewBox="0 0 10 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
     >
          <path
               d="M3.73017 6.9998L9.09267 12.3623L7.56084 13.8941L0.666504 6.9998L7.56084 0.105469L9.09267 1.6373L3.73017 6.9998Z"
               :fill="fill"
               :stroke="fill"
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
          },
     };
</script>

<style></style>
