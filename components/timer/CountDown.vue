<template>
  <span>{{ modifiedMin }} : {{ modifiedSec }}</span>
</template>

<script>
  export default {
    name: "CountDown",
    props: ['time'],
    data() {
      return {
        min: 0,
        sec: 0,
        t: ''
      }
    },
    created() {
      this.min = Math.floor( this.time / 60);
      this.sec = this.time - (this.min * 60)
    },
    mounted() {
      this.t = setInterval(() => {
        if(this.sec <= 0 ) {
          this.sec = 60
          this.min = this.min-1
        } else {
          this.sec = this.sec - 1
        }
      }, 1000)
    },
    computed: {
      modifiedMin() {
        return this.min <= 9 ? '0'+ this.min : this.min
      },
      modifiedSec() {
        return this.sec <= 9 ? '0'+ this.sec : this.sec
      },
    },
    watch: {
      min(value) {
        if(value < 0) {
          this.$emit("timeUp")
          clearInterval(this.t)
          this.min = 0;
          this.sec = 0;
        }
      }
    },
    beforeDestroy () {
      clearInterval(this.t)
    }
  }
</script>
