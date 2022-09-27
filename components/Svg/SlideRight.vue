<template>
     <svg
          :width="width"
          :height="height"
          viewBox="0 0 10 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
     >
          <path
               d="M6.26983 6.9998L0.907331 12.3623L2.43916 13.8941L9.3335 6.9998L2.43916 0.105469L0.907331 1.6373L6.26983 6.9998Z"
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
