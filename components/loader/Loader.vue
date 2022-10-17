<template>
  <div v-if='loading' class='absolute inset-0 bg-white z-50 overflow-hidden' style='background: #e4e4e4bd'>
    <div class='flex flex-col justify-center items-center h-screen'>
      <!--      <FlowerSpinner   :size="100" color="#F04935" />-->
      <!--      <LoopingRhombusesSpinner class="mt-10" :size="100" color="#F04935" />-->
      <!-- <p class="mt-10 text-3xl">Loading...</p> -->

      <div class=loader-container>
        <img src="@/assets/images/icons/loader-icon.png" id="breathing-button" />
        <div class="loader"></div>
        <h5 class='loading-text'>Processing...</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { FlowerSpinner, LoopingRhombusesSpinner } from 'epic-spinners/dist/lib/epic-spinners.min.js';

export default {
  components: {
    FlowerSpinner,
    LoopingRhombusesSpinner
  },
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true;
    },
    finish () {
      this.loading = false;
    }
  }
};
</script>

<style>
.loader {
  /* border: 8px solid #f3f3f3; */
  border-radius: 50%;
  border-top: 4px solid #f04935;
  width: 100px;
  height: 100px;
  -webkit-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loader-container {
  position: absolute;
  left: 50%;
  top: 50%;
  display: block;
  transform: translate(-50%, -50%);
}

.loader-container img {
  position: absolute;
  left: 23%;
  top: 18%;
  width: 55px;
  height: 55px;
}

.loading-text {
  font-size: 21px;
  margin-top: 10px;
  color: #232323;
  font-family: ui-monospace;
}

#breathing-button {
  animation: breathing 1s ease-out infinite normal;
  -webkit-font-smoothing: antialiased;
}

@keyframes breathing {
  0% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }

  50% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1.1);
  }

  100% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }
}
</style>>
